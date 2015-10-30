$(document).ready(function(){

	var portfolio_pr = false;
	var portfolio_ph = false;
	var portfolio_wr = false;

	$('#project-icon-pr').click(function(){
		if(portfolio_pr===false){
			event.preventDefault();
		}
		$(this).attr('src', 'http://stanleyyork.com/wp-content/uploads/2015/09/Screen-Shot-2015-09-21-at-10.33.19-AM.png');
		$(this).css('width', '300px');
		$(this).css('height', '500px');
		$('#href-project-icon-pr').attr("href","http://www.clarelegere.com/profiles/1");
		portfolio_pr = true;
	});

	$('#project-icon-ph').click(function(){
		if(portfolio_ph === false){
			event.preventDefault();
		}
		$(this).attr('src', 'http://stanleyyork.com/wp-content/uploads/2015/10/Screen-Shot-2015-10-27-at-5.06.28-PM.png');
		$(this).css('width', '300px');
		$(this).css('height', '300px');
		$('#href-project-icon-ph').attr("href","http://www.instagram.com/stanleyyork/");
		portfolio_ph = true;
	});

	$('#project-icon-wr').click(function(){
		if(portfolio_wr === false){
			event.preventDefault();
		}
		$(this).attr('src', 'http://stanleyyork.com/wp-content/uploads/2015/10/Screen-Shot-2015-10-27-at-5.06.02-PM.png');
		$(this).css('width', '300px');
		$(this).css('height', '300px');
		$('#href-project-icon-wr').attr("href","http://medium.com/@stanleyyork");
		portfolio_wr = true;
	});

	$('#about-image-a').mouseenter(function(){
		$(this).attr('src', "http://stanleyyork.com/wp-content/uploads/2014/03/Photo-Mar-23-7-29-59-PM.jpg");
	});

	$('#about-image-b').mouseenter(function(){
		$(this).attr('src', "http://stanleyyork.com/wp-content/uploads/2014/03/Photo-Mar-24-4-22-57-PM.jpg");
	});

	$('#about-image-c').mouseenter(function(){
		$(this).attr('src', "http://stanleyyork.com/wp-content/uploads/2013/08/IMG_5947.jpg");
	});

	$(window).scroll(function(){

		if($(window).scrollTop()>25){
			$('body > div.container-photo.container-fluid').fadeOut();
			$('body > nav > div > div > a > h4').css("color", "black");
			$('.navbar').css("background-color", "white");
		}

		if($(window).scrollTop()<1){
			$('body > div.container-photo.container-fluid').fadeIn();
			$('body > nav > div > div > a > h4').css("color", "white");
			$('.navbar').css("background-color", "rgba(255, 255, 255, 0.5)");
		}

	});


});