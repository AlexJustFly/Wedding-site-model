window.onload = function() {
	var inp_email = document.querySelector('input[name=email]');
	var inp_phone = document.querySelector('input[name=phone]');
	var inp_name = document.querySelector('input[name=name]');

	document.querySelector('#send').onclick = function() {
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
				document.querySelector('#result').innerHTML = 'OK';
				document.querySelector('form').style.display = 'none';
			} else {
				document.querySelector('#result').innerHTML = request.responseText;
			}
			
		}
	}

	request.open ('POST', '../php/data.php');
	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // обязательная строка для метода POST для кодировки данных (всегда одинаковая)
	request.send (params); // в методе POST обязательно нужно передавать параметры через send
}