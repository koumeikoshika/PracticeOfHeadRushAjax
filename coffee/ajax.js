try{
	request = new XMLHttpRequest();
}catch (trymicrosoft){
	try{
		request = new ActiveXObject("Msxm12.XMLHTTP");
	}catch (othermicrosoft){
	try{
		request = new ActiveXObject("Microsoft.XMLHTTP");
	}catch(failed){
		request = null;
		}
	}
}
