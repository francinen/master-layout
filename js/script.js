$(function(){
	$('a.smoothScroll').smoothScroll();
	$('a.more').smoothScroll();
	$('.drop-down').hide();
	$('.close').hide();
	$('.expand').click(function(){
		$('.drop-down').show();
		$('.close').show();
		$(this).hide();
	});
	$('.close').click(function(){
		$('.drop-down').hide();
		$('.expand').show();
		$('.close').hide();
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

	$('#fixed').stkr({
		startSticky: '#more',
		toggleVisibility: true,
		toggleFade: true,
		stickyPosition: 'custom',
		top: 0,
		left: 0
	});
});