$(document).ready(function(){
    $("body").on("click","a", function (event) {
        event.preventDefault();

        var id  = $(this).attr('href'),

            top = $(id).offset().top;
        
        $('body,html').animate({scrollTop: top}, 1000);
    });
});


window.onload = function() {
	var inp_email = document.querySelector('input[name=email]');
	var inp_phone = document.querySelector('input[name=phone]');
	var inp_name = document.querySelector('input[name=name]');

	document.querySelector('#button_callback').onclick = function() {
		var params = 
		'email=' + inp_email.value + '&' +
		'phone=' + inp_phone.value + '&' +
		'name=' + inp_name.value;
		
		ajaxPOST(params);
	}
}

function ajaxPOST(params) {
	var request = new XMLHttpRequest();
	request.onreadystatechange = function() {
		if (request.readyState == 4 && request.status == 200) {
			if (request.responseText == '1') {				
				document.querySelector('#callback_form').style.opacity = '0';
				document.querySelector('#callback_form').style.visibility = 'hidden';
				document.querySelector('#callback_success_message').style.visibility = 'visible';
				document.querySelector('#callback_success_message').style.opacity = '1';
			} else {
				document.querySelector('#callback_name').placeholder = request.responseText;
				document.querySelector('#callback_phone').placeholder = request.responseText;

			}
			
		}
	}

	request.open ('POST', '../php/data.php');
	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // обязательная строка для метода POST для кодировки данных (всегда одинаковая)
	request.send (params); // в методе POST обязательно нужно передавать параметры через send
}