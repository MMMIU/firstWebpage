function showDetail() {
	document.getElementById("bridge").style.display = "block"
	document.getElementById("detail").style.display = "block"
}
function hideDetail(index) {
	document.getElementById("bridge").style.display = "none"
	document.getElementById("detail").style.display = "none"
}
window.onscroll = function() {
	scrollTop = document.documentElement.scrollTop;
	if (scrollTop < 455) {
		document.getElementById("back").style.display = "none"
		document.getElementById("navBar").classList.add("navBarPosition");
		document.getElementById("navBar").classList.remove("navBarfixed");
		document.getElementById("indestrySolution").style.width="50%";
		document.getElementById("generalSolution").style.width="50%";
		document.getElementById("solutionConsult").style.display="none";
	} else {
		document.getElementById("back").style.display = "block"
		document.getElementById("navBar").classList.add("navBarfixed");
		document.getElementById("navBar").classList.remove("navBarPosition");
		document.getElementById("indestrySolution").style.width="280px";
		document.getElementById("generalSolution").style.width="280px";
		document.getElementById("solutionConsult").style.display="block";
	}
}
function scrollBack() {
	window.scrollTo(0, 0);
}
