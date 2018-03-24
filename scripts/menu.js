$('#menu_button').click(function(){
	if($('#options').width()===0)
	{
		$('#options').css('width', '20em');
	}

	if($('#options').width()===320)
	{
		$('#options').css('width', '0');
	}
});
