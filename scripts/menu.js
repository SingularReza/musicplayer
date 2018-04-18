var height = jQuery('#now_playing').height();
jQuery('#now_playing').css('width', window.innerWidth-45);

jQuery('#menu_button').click(function(){
	if(jQuery('#options').width()===45)
	{
		jQuery('#options').css('width', '400');
		jQuery('body').css('background', 'rgba(65, 65, 65, 0.9)');
		jQuery('#info').css('width', window.innerWidth-400);
		jQuery('#options').children().show();
	}

	if(jQuery('#options').width()===400)
	{
		jQuery('#options').css('width', '45');
		jQuery('body').css('background', 'rgba(255, 255, 255, 0.9)');
		jQuery('#info').css('width', '0');
		jQuery('#options').children().hide();
	}
});

function check(){

	jQuery('#now_playing').css('height', window.innerHeight);
	jQuery('body').css('background', 'rgba(65, 65, 65, 0.9)');
	jQuery('#go_back').css('visibility', 'visible');
}

jQuery('#go_back').click( function(){

	if(jQuery('#now_playing').height()===window.innerHeight)
	{
		jQuery('#now_playing').css('height', height);
		jQuery('body').css('background', 'rgba(255, 255, 255, 0)');
		jQuery('#go_back').css('visibility', 'hidden')
	}
});

jQuery('#options').children().hide();
