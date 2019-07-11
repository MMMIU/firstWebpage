var special=false;
var fromItem2=false;
function showMenu() {
	document.getElementById("leftMenu").style.left = "0px";
	document.getElementById("menuLogo").style.backgroundColor = "rgb(86, 191, 218)";
}
function hideMenu() {
	document.getElementById("leftMenu").style.left = "-201px";
	document.getElementById("secondPanel").style.left = "-1000px";
	document.getElementById("menuLogo").style.backgroundColor = "";
}
function showPanel() {
	document.getElementById("secondPanel").style.left = "201px";
	setTimeout(() => {
		document.getElementById("secondPanel").style.transition = "0s";
	}, 500);
}
function hidePanel() {
	document.getElementById("secondPanel").style.transition = "0.5s";
	if(!special){
		document.getElementById("secondPanel").style.left = "-1000px";
	}else{
		document.getElementById("secondPanel").style.left = "-201px";
	}
	for (var i = 1; i <= 9; i++) {
		document.getElementById("leftMenuItem" + i).style.color = "rgb(235,235,235)";
	}
}
function showItem(index) {
	special=false;
	if(fromItem2){
		document.getElementById("secondPanel").style.transition = "0s";
		fromItem2=false;
	}
	document.getElementById("secondPanel").style.backgroundColor = "rgb(39, 42, 45)";
	for (var i = 1; i <= 9; i++) {
		document.getElementById("menuItem" + i).style.display = "none";
		document.getElementById("leftMenuItem" + i).style.color = "rgb(235,235,235)";
	}
	document.getElementById("leftMenuItem" + index).style.color = "rgb(86, 191, 218)";
	document.getElementById("menuItem" + index).style.display = "block";
	document.getElementById("secondPanel").style.width = "1000px";
}
function showSpecialItem(){
	special=true;
	document.getElementById("secondPanel").style.transition = "0s";
	document.getElementById("secondPanel").style.width = "201px";
	document.getElementById("secondPanel").style.backgroundColor = "rgb(64, 69, 74)";
}
function closeSpecial(){
	fromItem2=true;
}
function showThirdPanel(){
	document.getElementById("thirdPanel").style.left = "402px";
	document.getElementById("secondPanel").style.left = "201px";
	setTimeout(() => {
		document.getElementById("thirdPanel").style.transition = "0s";
	}, 500);
}
function hideThirdPanel(){
	document.getElementById("thirdPanel").style.transition = "0.5s";
	document.getElementById("thirdPanel").style.left = "-1000px";
	for (var i = 1; i <= 9; i++) {
		document.getElementById("secondLeftMenuItem" + i).style.color = "rgb(235,235,235)";
	}
}
function showThirdItem(index){
	for (var i = 1; i <= 9; i++) {
		document.getElementById("thirdMenuItem" + i).style.display = "none";
		document.getElementById("secondLeftMenuItem" + i).style.color = "rgb(235,235,235)";
	}
	document.getElementById("thirdMenuItem" + index).style.display = "block";
	document.getElementById("secondLeftMenuItem" + index).style.color = "rgb(86, 191, 218)";
}