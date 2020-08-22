maincreatorarticles = data =>{
  let rr = data.split(' : ');
  const colums_articles = 6;
  let count_articles = Number(rr.length) / colums_articles;

  let mainArticlesBody = document.getElementById('MainArticlesBody');
  let mainArticlesBody2 = mainArticlesBody.querySelector('div.row');

  let div_col_md_7 = document.createElement('div');
  div_col_md_7.className = 'col-md-7 col-md-7-style';

  let div_col_md_5 = document.createElement('div');
  div_col_md_5.className = 'col-md-5 col-md-5-style';

  mainArticlesBody2.append(div_col_md_7);
  mainArticlesBody2.append(div_col_md_5);

  for (let i = 0; i < count_articles-1; i++) {

    if(rr[i * colums_articles + 5] != '0'){ // может быть проверку на сервере делать?
     
      let div_col_md_12 = document.createElement('div');
      div_col_md_12.className = 'col-md-12 border border-right-0';
      div_col_md_12.style = "padding: 20px 0";

      let div_col_md_5_2 = document.createElement('div');
      div_col_md_5_2.className = 'col-md-5';

      let img = document.createElement('img');
      img.className = "col-md-2-img"
      img.src=`../images/${rr[i * colums_articles + 1]}`;

      let div = document.createElement('div');

      if(rr[i * colums_articles + 5] === '2'){
        text_lenght = 1000;
      }
      if(rr[i * colums_articles + 5] === '1'){
        text_lenght = 300;
      }

      if (rr[i * colums_articles + 2].length > text_lenght ){
        div.innerHTML = `<div><a href = '../articlesphp/create_${rr[i * colums_articles]}.php'><b>${rr[i * colums_articles + 3]}</b></a></div>${rr[i *colums_articles + 2].substring(0, text_lenght)}...`;
      }else{
        div.innerHTML = `<div><a href = '../articlesphp/create_${rr[i * colums_articles]}.php'><b>${rr[i * colums_articles + 3]}</b></a></div>${rr[i *colums_articles + 2]}`;
      }
       //
      div_col_md_5_2.append(img);
      div_col_md_12.append(div_col_md_5_2);
      div_col_md_12.append(div);

      if(rr[i * colums_articles + 5] === '2'){
        div_col_md_7.append(div_col_md_12);
      }

      if(rr[i * colums_articles + 5] === '1'){
        div_col_md_5.append(div_col_md_12);
      } 
    }
  }
}


  $.ajax({
        url: 'articlesAllPosts.php',
        dataType: 'text',
        cache: false,
        contentType: false,
        processData: false,
        data: 'ff',
        type: 'post',
        success: text => maincreatorarticles(text),
        error: respons => alert('fail')
     });











creatorarticles = data => {
  let rr = data.split(' : ');
  const colums_articles = 6;
  let count_articles = Number(rr.length) / colums_articles;

  for (let i = 0; i < count_articles-1; i++) {
    if(rr[i * colums_articles + 5] === '0'){ // может быть проверку на сервере делать?
      let ArticlesBody = document.getElementById('ArticlesBody');
      let ArticlesBody2 = ArticlesBody.querySelector('div.row');
      let div_col_md_12 = document.createElement('div');
      div_col_md_12.className = 'col-md-12 col-md-12-style';

      let div_col_md_2 = document.createElement('div');
      div_col_md_2.className = 'col-md-2';
      let img_col_md_2 = document.createElement('img');

      img_col_md_2.className = 'col-md-2-img';
      img_col_md_2.src = `../images/${rr[i * colums_articles + 1]}`;
      div_col_md_2.append(img_col_md_2);
      div_col_md_12.append( div_col_md_2);

      let div_col_md_7 = document.createElement('div');
      div_col_md_7.className = 'col-md-7 border-right';
      if (rr[i * colums_articles + 2].length > 300 ){
        div_col_md_7.innerHTML = `<div><a href = '../articlesphp/create_${rr[i * colums_articles]}.php'><b>${rr[i * colums_articles + 3]}</b></a></div>${rr[i *colums_articles + 2].substring(0, 300)}...`;
      }else{
        div_col_md_7.innerText = rr[i * colums_articles + 2];
      }
                        
      div_col_md_12.append(div_col_md_7);

      ArticlesBody2.append(div_col_md_12);
      }
    }
}


function loaderarticles(){
  $.ajax({
        url: 'articlesAllPosts.php',
        dataType: 'text',
        cache: false,
        contentType: false,
        processData: false,
        data: 'ff',
        type: 'post',
        success: text => creatorarticles(text),
        error: respons => alert('fail')
     });
}

loaderarticles();

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
            success: text => creatorarticles(text),
            error: respons => alert('fail')

        });
  	}

