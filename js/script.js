window.onscroll = function showHeader() {

	var header =  document.querySelector('header');
	if(window.pageYOffset > 60){
		header.classList.add('header-scroll');
	}
	else{
		header.classList.remove('header-scroll');
	}
}

