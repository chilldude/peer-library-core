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
			if (char.match(/\w/) && !event.ctrlKey) {
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
});