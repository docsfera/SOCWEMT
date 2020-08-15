document.addEventListener("DOMContentLoaded", function(event) { 

  document.getElementById('instrument-img').addEventListener("click", clickimg);
  document.getElementById('instrument-text').addEventListener("click", clicktext);
  document.getElementById('instrument-delete').addEventListener("click", deleteblock);
  document.getElementById('instrument-b').addEventListener("click", () => {change_text('<b>','</b>',event)});
  document.getElementById('instrument-em').addEventListener("click", () => {change_text('<em>','</em>',event)});
  document.querySelector('textarea.CreatorTextarea').onclick = event => {rememberlast(event)};
  document.querySelector('div.dropZone').onclick = event => {rememberlast(event)};
   document.getElementById('instrument-rrr').addEventListener("click", () => {replacediv(event)});
  
});


function clicktext(){
	var div_text = document.createElement('textarea');
	div_text.type="text";
	div_text.className = 'CreatorTextarea CreatorTextarea-create';
	/*div_text.Id = "sortpicture2";*/
	document.querySelector('div#div-canvas').append(div_text);

    div_text.onclick = event => {rememberlast(event)};
    div_text.onkeyup = event => {textAreaAdjust(event.target)};
}
function clickimg(){
	var form_div_img = document.createElement('div');
	form_div_img.className = "dropZone dropZone-create ";
	form_div_img.innerHTML = 'Для загрузки, перетащите файл сюда.';
	document.querySelector('div#div-canvas').append(form_div_img);
    var dropZone = $('.dropZone'),
        maxFileSize = 1000000; // максимальный размер фалйа - 1 мб.
	findimg(dropZone.length-1);

    form_div_img.onclick = event => {rememberlast(event)};
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
                url: 'uploaddirectory.php',
                dataType: 'text',
                cache: false,
                contentType: false,
                processData: false,
                data: form_data,
                type: 'post',
                success: function(rrr){
                    if (dropZone[i].classList.contains('MainDropZone')){
                        dropZone[i].className = '';
                        dropZone[i].innerHTML = '';
                        var drop_zone_img = document.createElement('img');
                        drop_zone_img.src = rrr;
                        drop_zone_img.className = 'MainDropZone-image';
                        dropZone[i].append(drop_zone_img);
                    }else{
                        dropZone[i].parentNode.removeChild(dropZone[i]);  // remove from DOM
                        var drop_zone_img = document.createElement('img');
                        drop_zone_img.src = rrr;
                        drop_zone_img.className = 'dropZoneImg';
                        document.getElementById('div-canvas').append(drop_zone_img);
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







function uploader() {
    replacer();
    newphp();
    file_data = document.querySelector('.MainDropZone-image').currentSrc.split('/')[4];//MainDropZone-image
    text_data = document.querySelector('textarea.MainCreatorTextarea').value;
    var form_data = new FormData();
    form_data.append('file2', file_data);
    form_data.append('text', text_data);
    form_data.append('function', 'writedb');

    $.ajax({
                url: 'savephp.php',
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
    
}






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



function ViewText(elemText) 
     {                                                                              // заменяем "\n" на "<BR>" во всем тексте 
          var text = elemText.innerHTML;
          text = text.replace(new RegExp("\n","g"), "<BR>"); 
          elemText.innerHTML = text;
     }
function change_text(tag1, tag2,event) 
     { 
          if (tag1=="" || tag2=="") 
               return; 

          var elemText = document.querySelector('textarea.active'); 
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
          ViewText(elemText);
        //document.querySelector('div.CreatorBody').innerHTML = document.querySelector('textarea.CreatorTextarea').value;
     } 
//alert(document.querySelector('div.instruments').innerHTML);






function newphp(){
    let innerdata = document.querySelector('div#div-canvas').innerHTML;
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


function replacer() {
    let textareas = document.querySelectorAll('textarea.CreatorTextarea-create');
    for (var i = 0; i < textareas.length; i++) {
        let div_text = document.createElement('div');
        div_text.innerHTML = textareas[i].value;
        div_text.className = 'CreatorTextarea CreatorTextarea-create';
        textareas[i].replaceWith(div_text); // method jquery
    }
}


function rememberlast(event) {

    if (document.querySelector('.active')){
        document.querySelector('.active').classList.remove("active");
    }
    event.currentTarget.classList.add('active');
    
}

function deleteblock(){
    let deleteblock = document.querySelector('.active'); 

    if (deleteblock.classList.contains('MainCreatorTextarea') || deleteblock.classList.contains('MainDropZone')){
        alert('Невозможно удалить данный блок');
    }else{
        deleteblock.parentNode.removeChild(deleteblock);
    }
    

}

function textAreaAdjust(element) {
  element.style.height = "1px";
  element.style.height = (25+element.scrollHeight)+"px";
}

function replacediv(argument) {
    try{
        active_block = document.querySelector('.active');
        if(active_block){
            is_textarea_block = (active_block.type == 'textarea');
            is_img_block = active_block.classList.contains('dropZone');
            is_main_textarea_block = active_block.classList.contains('MainCreatorTextarea')
            if(is_main_textarea_block) return;
            if (is_textarea_block){
                text_active_block = active_block.value;
                var div_text = document.createElement('div');   
            }else if(is_img_block){
                return;
            }else{
                document.querySelector('div.active');
                var div_text = document.createElement('textarea');
                 
            }
            div_text.innerHTML = text_active_block;
            div_text.className = 'CreatorTextarea CreatorTextarea-create';
            div_text.onclick = event => {rememberlast(event)};
            active_block.replaceWith(div_text); // method jquery
        }else{
            return;
        }
    }catch{
        alert('нет выбранных блоков');
    }
}