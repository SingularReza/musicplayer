$('#menu_button').click(function(){
	if($('#options').width()===0)
	{
		$('#options').css('width', '400');
	}

	if($('#options').width()===400)
	{
		$('#options').css('width', '0');
	}
});
