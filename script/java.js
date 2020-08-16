
function loaderarticles(){
  $.ajax({
                url: 'articlesAllPosts.php',
                dataType: 'text',
                cache: false,
                contentType: false,
                processData: false,
                data: 'ff',
                type: 'post',
                success: function(rrr){
                    rr = rrr.split(' : ');
                    for (let i = 0; i < rr.length-4; i = i + 4) {

                      let ArticlesBody = document.getElementById('ArticlesBody');
                      let ArticlesBody2 = ArticlesBody.querySelector('div.row');
                      let div_col_md_12 = document.createElement('div');
                      div_col_md_12.className = 'col-md-12 col-md-12-style';


                      let div_col_md_2 = document.createElement('div');
                      div_col_md_2.className = 'col-md-2';
                      let img_col_md_2 = document.createElement('img');
                      img_col_md_2.className = 'col-md-2-img';
                      img_col_md_2.src = `../images/${rr[i + 1]}`;
                      div_col_md_2.append(img_col_md_2);
                      div_col_md_12.append( div_col_md_2);


                      let div_col_md_7 = document.createElement('div');
                      div_col_md_7.className = 'col-md-7 border-right';
                      if (rr[i + 2].length > 300 ){
                        div_col_md_7.innerHTML = `<div><b>${rr[i + 3]}</b></div>${rr[i + 2].substring(0, 300)}...`;
                      }else{
                        div_col_md_7.innerText = rr[i + 2];
                      }
                      
                      div_col_md_12.append(div_col_md_7);

                      
                      ArticlesBody2.append(div_col_md_12);
                      //debugger;
                    }
                    

                }
     });
}

loaderarticles();

/*function countRabbits() {
       

      var element = document.getElementById('chat');
      var link = document.createElement('div');
      var br = document.createElement('br');
      var str = document.getElementById('message-text').value;

        link.innerHTML = str;

      element.appendChild(link);

      

}*/
/*var div = document.getElementById('aa');
div.addEventListener('click', foo1, false);*/
var elems = document.querySelectorAll('div.aa');

// на каждый элемент повесить обработчик на стадии перехвата
function GoEvent(k){
  for (let j = 0; j < elems.length; j++) {
    elems[j].onclick = () => {foo1(event.target.textContent);}    // addEventListener нужно попробовать?? () => {}
  }
  if(Number.isInteger(Number(k))){
    elems[k].onclick = null;
  }
}

GoEvent();



function foo1(i, event){
    GoEvent(i-1); // Удаление событие клика у нажатого элемента
    rows = document.querySelectorAll('div.row');

    for (var j = 0; j < rows.length; j++) { // Очистка холста
      rows[j].innerHTML = '';
    }
      
    
		$.ajax({
            type: 'POST',
            data: {text: i},
            url: 'test.php',	// Относительно articles (php файла где слушается событие)
            //dataType: 'json',     из-за этой хуеты не работало возвращаемое представление в виде строки и тд, только цифры работали
            success: function (text) {        
          		let count_articles = Number(text.split(',').length) / 3;  // Кол-во постов на данную тему
              document.getElementById('ArticlesBody').innerHTML = '';
              for (let l = 0; l < count_articles;l++){

                
                var div_outside = document.createElement('div');
                div_outside.className = 'row row-style';

                var div_col_md_12 = document.createElement('div');
                div_col_md_12.className = 'col-md-12 col-md-12-style';

                var div_col_md_2 = document.createElement('div');
                div_col_md_2.className = 'col-md-2 ';

                var div_col_md_7 = document.createElement('div');
                div_col_md_7.className = 'col-md-7 border-right';

                if (text.split(',')[2 + l * 3].length > 300 ){
                  div_col_md_7.innerHTML = text.split(',')[2 + l * 3].substring(0, 300) + "...";
                }else{
                  div_col_md_7.innerHTML = text.split(',')[2 + l * 3];
                }
                //debugger;
                

                var a = document.createElement('a');
                a.href = '../articlesphp/create_' + String(text.split(',')[0 + l * 3]) + '.php';

                var img = document.createElement('img');
                img.src = '../images/' + String(text.split(',')[1 + l * 3]);
                img.className = 'col-md-2-img';

                a.append(img);
                div_col_md_2.append(a);
                div_col_md_12.append(div_col_md_2, div_col_md_7);
                div_outside.append(div_col_md_12);
                document.getElementById('ArticlesBody').append(div_outside);
              }

          	},
            error: function(response) {
            	alert('fail');
            }
        });
  	}

