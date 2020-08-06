function countRabbits() {
       

      var element = document.getElementById('chat');
      var link = document.createElement('div');
      var br = document.createElement('br');
      var str = document.getElementById('message-text').value;

        link.innerHTML = str;

      element.appendChild(link);

}
/*var div = document.getElementById('aa');
div.addEventListener('click', foo1, false);*/
var elems = document.querySelectorAll('div.aa');

// на каждый элемент повесить обработчик на стадии перехвата
function GoEvent(k){
  for (var j = 0; j < elems.length; j++) {
    elems[j].onclick = function gg() {foo1(event.target.textContent);}    // addEventListener нужно попробовать??
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
          		var count_articles = Number(text.split(',').length) / 3;  // Кол-во постов на данную тему
              document.getElementById('ArticlesBody').innerHTML = '';
              for (var l = 0; l < count_articles;l++){

                /*var div_outside = document.createElement('div');
                var div_inside = document.createElement('div');
                var div_inside_2 = document.createElement('div');
                var img = document.createElement('img');
                var a = document.createElement('a');
                a.href = '../articlesphp/create_' + String(text.split(',')[0 + l * 3]) + '.php';
                img.src = '../images/' + String(text.split(',')[1 + l * 3]);
                img.className = "cpp2";
                a.append(img);
                div_inside_2.innerHTML = text.split(',')[2 + l * 3];
                div_outside.className = "bottomNews article";
                div_inside.append(a);
                div_outside.append(div_inside);
                div_outside.append(div_inside_2);
                document.getElementById('ArticlesBody').append(div_outside);*/
                var div_outside = document.createElement('div');
                div_outside.className = 'row row-style';

                var div_col_md_12 = document.createElement('div');
                div_col_md_12.className = 'col-md-12 col-md-12-style';

                var div_col_md_2 = document.createElement('div');
                div_col_md_2.className = 'col-md-2 ';

                var div_col_md_7 = document.createElement('div');
                div_col_md_7.className = 'col-md-7 border-right';
                div_col_md_7.innerHTML = text.split(',')[2 + l * 3];

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

