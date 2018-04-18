var test = jQuery('#now_playing').height();

jQuery('#menu_button').click(function(){
	if(jQuery('#options').width()===0)
	{
		jQuery('#options').css('width', '400');
		jQuery('body').css('background', 'rgba(65, 65, 65, 0.9)');
		jQuery('#info').css('width', window.innerWidth-400);
	}

	if(jQuery('#options').width()===400)
	{
		jQuery('#options').css('width', '0');
		jQuery('body').css('background', 'rgba(255, 255, 255, 0.9)');
		jQuery('#info').css('width', '0');
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
		jQuery('#now_playing').css('height', test);
		jQuery('body').css('background', 'rgba(255, 255, 255, 0)');
		jQuery('#go_back').css('visibility', 'hidden')
	}
});

