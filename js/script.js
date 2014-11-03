$(function(){
	$('a.smoothScroll').smoothScroll();
	$('a.more').smoothScroll();
	$('.drop-down').hide();
	$('.close').hide();
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

	$('#fixed').stkr({
		startSticky: '#more',
		toggleVisibility: true,
		toggleFade: true,
		stickyPosition: 'custom',
		top: 0,
		left: 0
	});
});