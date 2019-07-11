function showDetail() {
	document.getElementById("bridge").style.display = "block"
	document.getElementById("detail").style.display = "block"
}
function hideDetail(index) {
	document.getElementById("bridge").style.display = "none"
	document.getElementById("detail").style.display = "none"
}
window.onscroll = function() {
	var scrollTop = 0;
	if (document.documentElement && document.documentElement.scrollTop) {
		scrollTop = document.documentElement.scrollTop;
	} else if (document.body) {
		scrollTop = document.body.scrollTop;
	}
	if (scrollTop < 500) {
		document.getElementById("back").style.display = "none"
	} else {
		document.getElementById("back").style.display = "block"
	}
}
function scrollBack() {
	window.scrollTo(0, 0);
}
