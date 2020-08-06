document.addEventListener("DOMContentLoaded", function(event) { 

  document.getElementById('instrument-img').addEventListener("click", clickimg);
  document.getElementById('instrument-text').addEventListener("click", clicktext);


});


function clicktext(){

    /*<form id="" method="POST" action="">
 
        

            <input  id="what" name="text" type="text" placeholder="Текст"/ autofocus>

            <input  type="submit" onclick="countRabbits()" value="Отправить"/ >
        </form>
*/


    //var form = document.createElement('form')
    //form.method = 'POST';
    //form.action = "upload.php";
	var div_text = document.createElement('textarea');
	div_text.type="text";
	div_text.className = 'CreatorTextarea';
	div_text.Id = "sortpicture2";
	document.querySelector('div#div-canvas').append(div_text);
    //form.append(div_text);
}
function clickimg(){
	var form_div_img = document.createElement('div');
	form_div_img.className = "dropZone dropZone-create ";
	form_div_img.innerHTML = 'Для загрузки, перетащите файл сюда.';
	document.querySelector('div#div-canvas').append(form_div_img);
    var dropZone = $('.dropZone'),
        maxFileSize = 1000000; // максимальный размер фалйа - 1 мб.
	findimg(dropZone.length-1);
}

function findimg(i){
	var dropZone = $('.dropZone'),
        maxFileSize = 1000000; // максимальный размер фалйа - 1 мб.
    // Проверка поддержки браузером
    if (typeof(window.FileReader) == 'undefined') {
        dropZone.text('Не поддерживается браузером!');
        dropZone.addClass('error');
    }
    
    // Добавляем класс hover при наведении
    dropZone[i].ondragover = function(event) {
        event.currentTarget.classList.add("hover");
        return false;
    };
    
    // Убираем класс hover
    dropZone[i].ondragleave = function(event) {
        event.currentTarget.classList.remove('hover');
        return false;
    };
    
    // Обрабатываем событие Drop
    dropZone[i].ondrop = function(event) {
        event.preventDefault();
        event.currentTarget.classList.remove('hover');
        event.currentTarget.classList.add('drop');
        
        var file = event.dataTransfer.files[0];

        //var file_data = $('#sortpicture').prop('files')[0];
        //var file_data2 = $('#sortpicture2').val();
        var form_data = new FormData();
        form_data.append('file', file);
        if (dropZone[i].classList.contains('classcheck')){
            file_data2 = $('#sortpicture2').val(); // fucking query
            form_data.append('text', file_data2);
            alert('its 0');
        }
        //form_data.append('text', file_data2);
        $.ajax({
                url: 'upload.php',
                dataType: 'text',
                cache: false,
                contentType: false,
                processData: false,
                data: form_data,
                type: 'post',
                success: function(rrr){
                    if (dropZone[i].classList.contains('classcheck')){
                        dropZone[i].className = 'dropZoneImgMain';
                        dropZone[i].innerHTML = '';
                        var drop_zone_img = document.createElement('img');
                        drop_zone_img.src = rrr;
                        drop_zone_img.className = 'dropZoneImg';
                        dropZone[i].append(drop_zone_img);
                        alert(rrr);
                    }else{
                        dropZone[i].className = 'dropZoneImgMain2';
                        dropZone[i].innerHTML = '';
                        var drop_zone_img = document.createElement('img');
                        drop_zone_img.src = rrr;
                        drop_zone_img.className = 'dropZoneImg';
                        dropZone[i].append(drop_zone_img);
                    }
                }
        });
    };
}
findimg(0);
       /* // Проверяем размер файла
        if (file.size > maxFileSize) {
            dropZone.text('Файл слишком большой!');
            dropZone.addClass('error');
            return false;
        }
        
        // Создаем запрос
        var xhr = new XMLHttpRequest();
        xhr.upload.addEventListener('progress', uploadProgress, false);
        xhr.onreadystatechange = stateChange;
        xhr.open('POST','upload.php');
        xhr.setRequestHeader('X-FILE-NAME', file.name);
        xhr.send(file);


    };
    // Показываем процент загрузки
    function uploadProgress(event) {
        var percent = parseInt(event.loaded / event.total * 100);
        dropZone.text('Загрузка: ' + percent + '%');
    }
    
    // Пост обрабочик
    function stateChange(event) {
        if (event.target.readyState == 4) {
            if (event.target.status == 200) {
                dropZone.text('Загрузка успешно завершена!');
            } else {
                dropZone.text('Произошла ошибка!');
                dropZone.addClass('error');
            }*/
/*        }
    }
}*/
// <textarea id="editableTextarea" style="height:200px; width:600px; border:1px solid gray;" onkeyup='ViewText();'> 

/*$('#upload').on('click', function() {
    var file_data = $('#sortpicture').prop('files')[0];
    var file_data2 = $('#sortpicture2').val();
    var form_data = new FormData();
    form_data.append('file', file_data);
    form_data.append('text', file_data2);
    $.ajax({
                url: 'upload.php',
                dataType: 'text',
                cache: false,
                contentType: false,
                processData: false,
                data: form_data,
                type: 'post',
                success: function(rrr){
                    alert(rrr);
                }
     });
});*/

/*function www(){
    var file_data = $('#sortpicture').prop('files')[0];
    var file_data2 = $('#sortpicture2').val();
    var form_data = new FormData();
    form_data.append('file', file_data);
    form_data.append('text', file_data2);
    $.ajax({
                url: 'upload.php',
                dataType: 'text',
                cache: false,
                contentType: false,
                processData: false,
                data: form_data,
                type: 'post',
                success: function(rrr){
                    alert(rrr);
                }
     });
}*/














/*
$('#upload').on('click', function() {
    var file_data = $('#sortpicture').prop('files')[0];
    var form_data = new FormData();
    form_data.append('file', file_data);
    alert(form_data);
    $.ajax({
                url: 'upload.php',
                dataType: 'text',
                cache: false,
                contentType: false,
                processData: false,
                data: form_data,
                type: 'post',
                success: function(php_script_response){
                    alert(php_script_response);
                }
     });
});*/



function ViewText() 
     {  
          /*alert('5');
          var tt = document.querySelector('input.CreatorTextarea');
          tt.value  = "fff"*/
          //document.getElementById("DivView").style.display = ""; 
          //document.getElementById("DivView").innerHTML = document.getElementById("editableTextarea").value; 
          //document.getElementById("DivView").innerHTML = document.querySelectorAll('input.CreatorTextarea').value;
          //document.getElementById("DivView").innerHTML = '5';
                                                                                    // заменяем "\n" на "<BR>" во всем тексте 
          /*var text = document.querySelector('textarea.CreatorTextarea').innerHTML;
          text = text.replace(new RegExp("\n","g"), "<BR>"); 
          document.querySelector('textarea.CreatorTextarea').innerHTML = text;*/
     }
function change_text(tag1, tag2) 
     { 
          if (tag1=="" || tag2=="") 
               return; 

          var elemText = instruments('textarea.CreatorTextarea'); 
          if (elemText==null) 
               return; 

          // get text 
          var text = elemText.value; 

          // get position 
          var posSelection1 = elemText.selectionStart; 
          var posSelection2 = elemText.selectionEnd; 

          // get 2 text 
          var str1 = text.substr(0, posSelection1); 
          var strMiddle = text.substr(posSelection1, posSelection2-posSelection1); 
          var str2 = text.substr(posSelection2); 

          // set text 
          elemText.value = str1 + tag1 + strMiddle + tag2 + str2; 
          elemText.selectionStart = str1.length + tag1.length; 
          elemText.selectionEnd = elemText.selectionStart+strMiddle.length; 
          elemText.focus();
        document.querySelector('div.CreatorBody').innerHTML = document.querySelector('textarea.CreatorTextarea').value;
     } 
//alert(document.querySelector('div.instruments').innerHTML);


function newphp(){
    innerdata = document.querySelector('div.CreatorBody').innerHTML;
    $.ajax({
                url: 'savephp.php',
                dataType: 'text',
                data: {text:innerdata},
                type: 'post',
                success: function(rrr){
                    alert(rrr);
                    }
                
        });
}

function filter(){   // Заменяет textaries на divы и передает в эти дивы значения textaries
    var main_div = document.querySelector('div.CreatorBody');
    var textareas = main_div.querySelectorAll('textarea.CreatorTextarea');  // Сохраним значение всех textaries чтобы не потерять
    for (var i = 0; i < textareas.length; i++){                              // Заменим все textaries на divs
        var str = document.querySelector('div.CreatorBody').innerHTML;
        var str_rep = str.replace("textarea","div");
        var str_rep = str_rep.replace("textarea","div");
        document.querySelector('div.CreatorBody').innerHTML = str_rep;
    }
    for (var i = 0; i < textareas.length; i++) {                            // Присвоим всем divs значения textaries
        if(i === 0){
            var divs = document.querySelectorAll('div.CreatorTextarea');
        }
        divs[i].innerHTML = textareas[i].value;       
    }
}