$('#menu_button').click(function(){
	if($('#options').width()===0)
	{
		$('#options').css('width', '400');
		$('body').css('background', 'rgba(65, 65, 65, 0.9)');
	}

	if($('#options').width()===400)
	{
		$('#options').css('width', '0');
		$('body').css('background', 'rgba(255, 255, 255, 1)');
	}
});
