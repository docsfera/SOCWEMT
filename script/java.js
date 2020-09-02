maincreatorarticles = data =>{

  let mainArticlesBody = document.getElementById('MainArticlesBody');
  let mainArticlesBody2 = mainArticlesBody.querySelector('div.row');

  let ArticlesBody = document.getElementById('ArticlesBody');
  let ArticlesBody2 = ArticlesBody.querySelector('div.row');

  let div_col_md_7 = document.createElement('div');
  div_col_md_7.className = 'col-md-7 col-md-7-style';

  let div_col_md_5 = document.createElement('div');
  div_col_md_5.className = 'col-md-5 col-md-5-style';

  mainArticlesBody2.append(div_col_md_7);
  mainArticlesBody2.append(div_col_md_5);

  //randomInteger(0, data.length);
  

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {

      let div_col_md_12 = document.createElement('div');
      div_col_md_12.className = 'col-md-12 border border-right-0';
      div_col_md_12.style = "padding: 20px 0";

      let div_col_md_5_2 = document.createElement('div');
      div_col_md_5_2.className = 'col-md-5';

      let img = document.createElement('img');
      img.className = "col-md-2-img"
      img.src=`../images/${data[i][j].img}`;

      let div = document.createElement('div');

      if(i === 2) text_lenght = 1000;
      if(i === 1 || i === 0) text_lenght = 300;

      if (data[i][j].text.length > text_lenght ){
        div.innerHTML = `<div><a href = '../articlesphp/create_${data[i][j].id}.php'><b>${data[i][j].title}</b></a></div>${data[i][j].text.substring(0, text_lenght)}...`;
      }else{
        div.innerHTML = `<div><a href = '../articlesphp/create_${data[i][j].id}.php'><b>${data[i][j].title}</b></a></div>${data[i][j].text}`;
      }
       //
      /*div_col_md_5_2.append(img);
      div_col_md_12.append(div_col_md_5_2);
      div_col_md_12.append(div);*/

      if(i === 2){
        div_col_md_5_2.append(img);
        div_col_md_12.append(div_col_md_5_2);
        div_col_md_12.append(div);
        div_col_md_7.append(div_col_md_12);
      }
      if(i === 1){
        div_col_md_5_2.append(img);
        div_col_md_12.append(div_col_md_5_2);
        div_col_md_12.append(div);
        div_col_md_5.append(div_col_md_12);
      }

      if (i === 0) {
      
        div_col_md_12.className = 'col-md-12 col-md-12-style';

        let div_col_md_2 = document.createElement('div');
        div_col_md_2.className = 'col-md-2';
        
        div_col_md_2.append(img);
        div_col_md_12.append(div_col_md_2);

        div.className = 'col-md-7 border-right';
                     
        div_col_md_12.append(div);

        ArticlesBody2.append(div_col_md_12);
      }


    }
  }
}
creatorarticles = data =>{
  let ArticlesBody = document.getElementById('ArticlesBody');
  let ArticlesBody2 = ArticlesBody.querySelector('div.row');

  for (let i = 0; i < data.length; i++) {
     
      let div_col_md_12 = document.createElement('div');
      div_col_md_12.className = 'col-md-12 col-md-12-style';
      div_col_md_12.style = "padding: 20px 0";

      let div_col_md_5_2 = document.createElement('div');
      div_col_md_5_2.className = 'col-md-5';

      let div_col_md_2 = document.createElement('div');
      div_col_md_2.className = 'col-md-2';

      

      let img = document.createElement('img');
      img.className = "col-md-2-img"
      img.src=`../images/${data[i].img}`;

      div_col_md_2.append(img);
      div_col_md_12.append(div_col_md_2);

      let div = document.createElement('div');

      let text_lenght = 300;

      if (data[i].text.length > text_lenght ){
        div.innerHTML = `<div><a href = '../articlesphp/create_${data[i].id}.php'><b>${data[i].title}</b></a></div>${data[i].text.substring(0, text_lenght)}...`;
      }else{
        div.innerHTML = `<div><a href = '../articlesphp/create_${data[i].id}.php'><b>${data[i].title}</b></a></div>${data[i].text}`;
      }
      div.className = 'col-md-7 border-right';
                     
      div_col_md_12.append(div);

      ArticlesBody2.append(div_col_md_12);
  }

}s

  $.ajax({
        url: 'articlesAllPosts.php',
        dataType: 'json',
        success: text => maincreatorarticles(text),
        error: respons => alert('fail')
     });



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
            dataType: 'json',    // из-за этой хуеты не работало возвращаемое представление в виде строки и тд, только цифры работали
            success: text => creatorarticles(text),
            error: respons => alert('fail')

        });
  	}

function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}