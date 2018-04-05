$('input').change(function(){
	var Files = this.files;

	//for(var i=0; i<Files.length-1; i++){
		$('#albums').append("<div>"+Files[1].name+"</div>");	
	//}
	
});