	$(".header_search").hide();
	$(".header_iconsSearch").click(function(){
		'use strict';
		$(".header_search").fadeToggle();
		$(".header_iconsCart").toggle('fast');
	});