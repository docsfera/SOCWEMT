creatorarticles = data => {
  let rr = data.split(' : ');
  const colums_articles = 4;
  let count_articles = Number(rr.length) / colums_articles;

  for (let i = 0; i < count_articles; i++) {

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
      // Лишний минус ${rr[i]-1} !!!! (это баг пчп мб, надо ченить)
    }else{
      div_col_md_7.innerText = rr[i * colums_articles + 2];
    }
                      
    div_col_md_12.append(div_col_md_7);

    ArticlesBody2.append(div_col_md_12);
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

