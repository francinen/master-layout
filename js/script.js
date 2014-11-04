$(function(){
	$('.drop-down').hide();
	$('.close').hide();
	$('.mobile-nav').hide();

	var $fixed = $('#fixed');
	var y = $(document).scrollTop();

	$('a.smoothScroll').smoothScroll();

	var viewportWidth = window.innerWidth;
	if (viewportWidth > 620){
		$fixed.stkr({
			startSticky: '#more',
			toggleVisibility: true,
			toggleFade: true,
			stickyPosition: 'custom',
			top: 0,
			left: 0,
			offsetStick: 100
		});
	}
	else{
		$('#mobile-fixed').stkr({
			startSticky: '#more',
			toggleVisibility: true,
			toggleFade: true,
			stickyPosition: 'custom',
			top: 0,
			left: 0
		});
	}

	$(document).scroll(function(){
		var y = $(this).scrollTop();

		var home = $('#home').position();
		var homeBottom = home.top+$('#home').height();
		if (y > homeBottom) {
			$('.scroll').find('object').removeClass('animated');
		}else{
			$('.scroll').find('object').addClass('animated');
		}

		var services = $('#services').position();
		var servicesTop = services.top;
		var servicesBottom = servicesTop+$('#services').height();

		if (y >= servicesTop && y < servicesBottom) {
			$fixed.find('#goToServices').addClass('currentSection');
		}else{
			$fixed.find('#goToServices').removeClass('currentSection');
		} 

		var portfolio = $('#portfolio').position();
		var portfolioTop = portfolio.top;
		var portfolioBottom = portfolioTop+$('#portfolio').height();

		if (y >= portfolioTop && y < portfolioBottom){
			$fixed.find('#goToPortfolio').addClass('currentSection');
		}else{
			$fixed.find('#goToPortfolio').removeClass('currentSection');
		}
		
		var about = $('#about').position();
		var aboutTop = about.top;
		var aboutBottom = aboutTop+$('#about').height();

		if (y >= aboutTop && y < aboutBottom){
			$fixed.find('#goToAbout').addClass('currentSection');
		}else{
			$fixed.find('#goToAbout').removeClass('currentSection');
		}
	
		var contact = $('#contact').position();
		var contactTop = contact.top;
		var contactBottom = contactTop+$('#contact').height();

		if (y >= contactTop && y < contactBottom){
			$fixed.find('#goToContact').addClass('currentSection');
		}else{
			$fixed.find('#goToContact').removeClass('currentSection');
		}
	});

	$('.menu').on('click', function(){
		$('.mobile-nav').slideToggle('slow');
	});
	$('.mobile-nav').find('li').on('click',function(){
		$('.mobile-nav').delay(600).slideToggle(700);
	});

	$('.filter').click(function(){
		$('.drop-down').toggle();
		$('.close').toggle();
		$('.expand').toggle();
	});
	$('.wordpress').click(function(){
		$('div#wordpress').hide();
	});
	$('.photoshop').click(function(){
		$('div#photoshop').hide();
	});
	$('.unbounce').click(function(){
		$('div#unbounce').hide();
	});
	$('.no-filter').click(function(){
		$('div.work.all').show();
	});
});