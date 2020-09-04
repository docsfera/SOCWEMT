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

maincreatorarticles = data =>{
  let randomsnumbers2 = randomArr(data[1], 3);
  let randomsnumbers1 = randomArr(data[2], 4);

  randomsnumbers2.forEach(numberartile => div_col_md_7.append(addMainArticles(data[2], numberartile, 700)));
  randomsnumbers1.forEach(numberartile => div_col_md_5.append(addMainArticles(data[1], numberartile, 300)));
  data[0].forEach(article => creatorarticles(article));
  
}

addMainArticles = (data, numberartile, countwords) => {
    //console.log(data);
    //debugger;
    let div_col_md_12 = document.createElement('div');
    div_col_md_12.className = 'col-md-12 border border-right-0';
    div_col_md_12.style = "padding: 20px 0";

    let div_col_md_5_2 = document.createElement('div');
    div_col_md_5_2.className = 'col-md-5';

    let img = document.createElement('img');
    img.className = "col-md-2-img"
    img.src=`../images/${data[numberartile].img}`;

    let div = document.createElement('div');
    let text = data[numberartile].text;
    if (text.length > countwords ) text = text.substring(0, countwords) + '...';
    div.innerHTML = `<div><a href = '../articlesphp/create_${data[numberartile].id}.php'><b>${data[numberartile].title}</b></a></div>${text}`;      

    div_col_md_5_2.append(img);
    div_col_md_12.append(div_col_md_5_2);
    div_col_md_12.append(div);
    return div_col_md_12;
   
  }

creatorarticles = (article, countwords = 300) => {

      let div_col_md_12 = document.createElement('div');
      div_col_md_12.className = 'col-md-12 col-md-12-style';
      div_col_md_12.style = "padding: 20px 0";

      let div_col_md_5_2 = document.createElement('div');
      div_col_md_5_2.className = 'col-md-5';

      let div_col_md_2 = document.createElement('div');
      div_col_md_2.className = 'col-md-2';

      let img = document.createElement('img');
      img.className = "col-md-2-img"
      img.src=`../images/${article.img}`;

      div_col_md_2.append(img);
      div_col_md_12.append(div_col_md_2);

      let div = document.createElement('div');
      let text = article.text;
      if ( text.length > countwords ) text = text.substring(0, countwords) + '...';
      div.innerHTML = `<div><a href = '../articlesphp/create_${article.id}.php'><b>${article.title}</b></a></div>${text}`;
      div.className = 'col-md-7 border-right';
                     
      div_col_md_12.append(div);

      ArticlesBody2.append(div_col_md_12);

}

  $.ajax({
        url: 'articlesAllPosts.php',
        dataType: 'json',
        success: text => maincreatorarticles(text),
        error: respons => alert('fail')
     });



var elems = document.querySelectorAll('div.aa');

// на каждый элемент повесить обработчик на стадии перехвата
GoEvent = k => {
  for (let j = 0; j < elems.length; j++) {
    elems[j].onclick = () => {foo1(event.target.textContent);}    // addEventListener нужно попробовать?? () => {}
  }
  if(Number.isInteger(Number(k))){
    elems[k].onclick = null;
  }
}

GoEvent();



foo1 = (i, event) =>{
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
      success: text => text.forEach(article => creatorarticles(article)),
      error: respons => alert('fail')
    });
}

randomInteger = (min, max) => {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

randomArr = (arr, count) => {
  let randomarr = []
   for (var i = 0; i < count; i++) {
    let number = randomInteger(0, arr.length - 1);
    
    if (arr.indexOf(number) == -1){
      randomarr.push(number);
    }else{
      i--;
    }
  }
  return randomarr;
}
