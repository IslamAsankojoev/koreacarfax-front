(function ($) {
   $('.btn-default').on('click', function (e) {
      e.preventDefault();
      var obj = $(this);

      obj.addClass('active');

      setTimeout(function () {
         obj.removeClass('active');
      }, 1500);

      // Load Boats
      if (obj.hasClass('btn-load-boats')) {
         if (!$('.load-boats-box').hasClass('open')) {
            $('.load-boats-box').slideToggle(1000);
            setTimeout (function () {
               $('.load-boats-box').addClass('open');
            }, 700);
         }
      }

      // Load Boats
      if (obj.hasClass('btn-load-destination')) {
         if (!$('.load-destinations-box').hasClass('open')) {
            $('.load-destinations-box').slideToggle(1000);
            setTimeout (function () {
               $('.load-destinations-box').addClass('open');
            }, 700);
         }
      }
   });

   // Fade In Page
   $(document).ready(function () {
      setTimeout(function () {
         $('body').addClass('dom-ready');
		 $("#carinfo").removeClass("invisible");
      }, 300);
   });
})(jQuery);

function replaceNonAlphanumericChars(str) {
	const nonAlphanumericRegex = /[^A-Za-z0-9]/g;
	const replacedStr = str.replace(nonAlphanumericRegex, "*");
	return replacedStr.toUpperCase();
}


function imagesOpen() {
	ym(92332306,'reachGoal','show_photo');
	$('#images').fotorama().data('fotorama').requestFullScreen();
}

function vehicle_info() {
	
	var chassisNo = $("#VIN").val().trim().toUpperCase();
	var clientIp = "";

	var chassisNo_len = chassisNo.length;
	
	if(chassisNo_len < 17 || chassisNo_len > 17){
		alert("VIN номер автомобиля должен содержать 17 символов");
		return;
	}
	
	var correctVIN = replaceNonAlphanumericChars(chassisNo);
	if (chassisNo.toUpperCase() != correctVIN) {
		alert("VIN номер должен содержать только цифры и латинские буквы!\nНекорретретные символы заменены на звездочки.\nИсправьте и попробуйте еще раз.\n\n"+correctVIN);
		return;
	}

	$("#checkButton").prop('disabled', true);
	$("#checkButton").html('Загрузка...');
	
	var url = "/check3.php";

	grecaptcha.execute('6LffG2MmAAAAAEQP2ApA7Su2LcKl-E-AW6KM7oT9', {action: 'checkCar'}).then(function (token) {
	
		ym(92332306,'reachGoal','check_car');
	
		var option = {
			type : 'GET',
			url : url,
			data : {
				machineCode : "2",
				chassisNo : chassisNo,
				clientIp : clientIp,
				token : token
			},
			contentType : "application/json;charset=UTF-8",
			dataType : "json",	
			success:function(data){
				/*console.log(data);*/
				var info_array = data;
				var report = false;

				$.each(info_array, function(key, value) {

					if(key == "DATE_OF_FIRST_REGISTRATION" || key == "EXPORT_PERMIT_DATE"){
						value = value.substr("6","2")+"."+value.substr("4","2")+"."+value.substr("0","4");
						if (value == '..-') {
							value = 'не установлена';
						}
					}
					
					if(key == "FINAL_DRIVE_DISTANCE" || key == "DISPLACEMENT" || key == "LENGTH" || key == "WIDTH" || key == "HEIGHT" || key == "RIDING_CAPACITY"){		
						if (key == "FINAL_DRIVE_DISTANCE") {
							if (value == '-') {
								value = 'не указан';
							} else {
								value = (value*1).toLocaleString('ru-RU', {minimumFractionDigits: 0}) + ' км';	
							}		 
						} else {
							value = (value*1).toLocaleString('ru-RU', {minimumFractionDigits: 0});
						}
					}
					
					if(key == "FULL_DAMAGED"){
						if (value == 'Y') {
							$(".show-damage").removeClass("hide");
						} else {
							$(".show-damage").addClass("hide");
						}
						value = (value=="Y")?"Да":"Нет"; 
					}
					
					if(key == "IMAGES"){
						imagesLoad(value);
						return true;
					}
					
					if(key == "RESULT_REPORT") {
						report = value;
					}
					
					$("#M_"+key).html(value);
					
				});
				
				if(info_array.RESULT_CODE == "00"){
					$("#carinfo").removeClass("invisible");
					$("#carinfo").addClass("active");
					ym(92332306,'reachGoal','check_good');
					ym(92332306, 'params', {vin: chassisNo, status: 0});
				}else if(info_array.RESULT_CODE == "01"){
					$("#carinfo").removeClass("active");	
					ym(92332306,'reachGoal','check_nodata');
					ym(92332306, 'params', {vin: chassisNo, status: 1});
					if (report) {
						if (confirm("Данные о вывозе отсутствуют. Вы можете узнать информацию по VIN - "+chassisNo+" в Полном отчете.\n\nПолный отчет включает информацию об эксплуатации в Южной Корее, а именно: ДТП, затопление и другие важные аспекты.\n\nНажмите ОК, чтобы заказать отчет.")) {
							alert("Внимательно ознакомьтесь с информацией на сайте перед заказом отчета!");  
							window.location.href = "/report/"+chassisNo;
						}
					} else {	
						alert('Нет данных по автомобилю!');
					}
				}else if(info_array.RESULT_CODE == "02") {
					$("#carinfo").removeClass("active");
					ym(92332306,'reachGoal','check_bad');
					alert('Возникла ошибка на стороне сервера. Попробуйте еще раз.');
				}else if(info_array.RESULT_CODE == "05") {
					$("#carinfo").removeClass("active");
					ym(92332306,'reachGoal','check_noHuman');
					alert('Время сессии истекло. Перезагрузите страницу.');
				}else if(info_array.RESULT_CODE == "08") {
					$("#carinfo").removeClass("active");
					ym(92332306,'reachGoal','check_SessionClosed');
					alert('Сессия завершена. Перезагрузите страницу и попробуйте еще раз.');
					location.reload();					
				}else {
					$("#carinfo").removeClass("active");
					ym(92332306,'reachGoal','check_bad');
					alert(info_array.RESULT_MSG);
				}
				
				$('.share-result').attr('vin', info_array.CHASSIS_NO);
				
				$("#checkButton").prop('disabled', false);
				$("#checkButton").html('Начать проверку');
				
			},
			error : function(xhr, status, error) {
				
				$("#checkButton").prop('disabled', false);
				$("#checkButton").html('Начать проверку');
				
				$("#carinfo").removeClass("active");
				/*console.log(xhr);
				console.log(status);
				console.log(error);*/
				ym(92332306,'reachGoal','check_bad');
				alert('Не удалось подключиться к базе. Попробуйте еще раз.');		
				
			}
		};
						
		typeof kc != 'undefined' ? kc.ajax(option) : $.ajax(option);		
		
	});	
	
	
}

$(document).ready(function () {
	$(".destinations-form").on("submit", function(){
		vehicle_info();
		return false;
	})	
})

function toastFunction() {
	var x = document.getElementById("toast");
	x.className = "show";
	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1250);
	copyToClipboard(window.location.origin+'/'+$('.share-result').attr('vin'));
}

function buyReport() {
	window.location.href = window.location.origin+'/report/'+$('.share-result').attr('vin'); 
}

function copyToClipboard(str) {
	var aux = document.createElement("input");
	aux.setAttribute("value", str);
	document.body.appendChild(aux);
	aux.select();
	document.execCommand("copy");
	document.body.removeChild(aux);
}

//////////

function imagesLoad(imgs) {
	
	var images = [];
	imgs.forEach(function(item, index, array) {
		images.push({img: item});
	});
	
	if (images.length > 0) {
		
		$(".show-photo").removeClass("hide");
		$(".statistics-box").addClass("photo-report");
	
		fotorama = $('#images').fotorama({
			width: '100%',
			maxheight: '90%',
			nav: 'thumbs',
			thumbmargin: 10,
			allowfullscreen: true
		 }).data('fotorama').load(images);	
	 
	} else {
		$(".show-photo").addClass("hide");
		$(".statistics-box").removeClass("photo-report");
	}
}

function goToReport() {
	window.open(window.location.origin+'/report/'+$('.share-result').attr('vin'));
}