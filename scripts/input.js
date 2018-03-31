$('input').change(function(){
	var Files = this.files;

	//for(var i=0; i<Files.length-1; i++){
		$('audio').append("<source src=\""+Files[1].name+"\" type=\""+Files[1]+"\">");	
	//}
	
});