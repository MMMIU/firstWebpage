var defenseCount=0;
function defenseCounter(){
	setInterval(() => {
		defenseCount++;
		counterStrike(defenseCount);
	}, 1000);
}
function counterStrike(defenseCount){
	document.getElementById("defenseCount").innerHTML = "阿里云，今天为全国40%的网站防御了"+defenseCount+"次攻击";
}
