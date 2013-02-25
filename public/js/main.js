$(document).ready(function(){
	// search
	var searchActive = false;

	function searchOn() {
		searchActive = true;
		$('.search').fadeIn(250);
		$('.search-input').focus();

		$('.search-input').animate({width: '1000px'}, 250);
	}

	function searchOff() {
		searchActive = false;
		$('.search').fadeOut(250);
		$('.search-input').blur();
		$('.search-input').val('');

		$('.search-input').animate({width: '630px'}, 250);
	}

	$('.search-link').click(function(){
		searchOn();
	});

	$('.search').click(function(event){
		if(!$(event.target).is('input')) {
			searchOff();
		}
	});

	$(document).keydown(function(event) {
		if (!searchActive) {
			var char = String.fromCharCode(event.which);
			if (char.match(/\w/) && !event.ctrlKey && !$('input').is(':focus')) {
				searchOn();
			}
		}
	});

	$('#home .search-input').click(function() {
		searchOn();
	});

	// viewer
	var viewerActive = false;

	function viewerOn() {
		$('.viewer').fadeIn('fast');
		viewerActive = true;
	}

	function viewerOff() {
		$('.viewer').fadeOut('fast');
		viewerActive = false;
	}

	$('.viewer-link').click(function(){
		viewerOn();
	});

	// escape
	$(document).keyup(function(event) {
		if (event.which == 27) {
			searchOff();
			viewerOff();
		}
	});
	
	// *enter to submit form
	$("input").keypress(function(event) {
	    if (event.which == 13) {
	        event.preventDefault();
	        $("form").submit();
	    }
	});
	
	//TODO: abstract preview
	$('.preview-link').click(function(){
		$('.abstract').slideToggle();
	});

	//profile publications/reviews tab
	$('.publications-link').click(function(){
		$('.item-list').fadeIn(250);
		$('.review-list').hide();
		$('.full-text').hide();
		$('.publications-link').addClass('active');
		$('.reviews-link').removeClass('active');
		$('.full-text-link').removeClass('active');

	});

	$('.reviews-link').click(function(){
		$('.item-list').hide();
		$('.review-list').fadeIn(250);
		$('.full-text').hide();
		$('.publications-link').removeClass('active');
		$('.reviews-link').addClass('active');
		$('.full-text-link').removeClass('active');
	});

	$('.full-text-link').click(function(){
		$('.item-list').hide();
		$('.review-list').hide();
		$('.full-text').fadeIn(250);
		$('.publications-link').removeClass('active');
		$('.reviews-link').removeClass('active');
		$('.full-text-link').addClass('active');
	});
});