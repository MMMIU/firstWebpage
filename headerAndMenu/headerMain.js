var titleIndex = 0
var interval = null
var titleLinkSet = new Array("#", "#", "#", "#", "#")
var titleSet = new Array("爆款商品拼购2折起", "DCDN IP应用加速 产品发布会", "云时序数据库 TSDB 重磅升级",
		"Cloud Toolkit开发者插件再升级", "阿里云时空数据库正式公测")
var describtionSet = new Array("云主机低至199元/年，降低上云门槛",
		"快速交付、高性能、高可用的IP应用程序加速，大幅提升传输速率和可用性",
		"TSDB完美适配Promethues，发布时序结构化查询引擎TSQL，1元体验", "支持实时查看远程服务器的应用部署日志",
		"高效处理时序/空间数据，完全兼容标准SQL")
var goSet = new Array("立即抢购", "了解详情", "查看详情", "免费下载", "免费试用")

function bt(index) {
	stopTimer();
	if (document.getElementById("button" + titleIndex).classList
			.contains("buttonAnim")) {
		document.getElementById("button" + titleIndex).classList
				.remove("buttonAnim");
	}
	if (document.getElementById("button" + titleIndex + titleIndex).classList
			.contains("buttonLight")
			&& (titleIndex != index)) {
		document.getElementById("button" + titleIndex + titleIndex).classList
				.remove("buttonLight");
		document.getElementById("button" + titleIndex + titleIndex).classList
				.add("buttonDark");
	}
	titleIndex = index;
	document.getElementById("button" + titleIndex + titleIndex).classList
			.add("buttonLight");
	changeTitleAndImage(titleIndex);
}

function timer() {
	if (interval != null) {
		clearInterval(interval);
		interval = null;
	}
	document.getElementById("button0").classList.add("buttonAnim")
	interval = setInterval(counter, 10000);
}
function counter() {
	titleIndex = (titleIndex + 1) % 5;
	lightAnother(titleIndex);
}
function lightAnother(titleIndex) {
	if (titleIndex == 0) {
		document.getElementById("button4").classList.remove("buttonAnim");
	} else {
		document.getElementById("button" + (titleIndex - 1)).classList
				.remove("buttonAnim");
	}
	document.getElementById("button" + titleIndex).classList.add("buttonAnim");
	changeTitleAndImage(titleIndex);
}
function changeTitleAndImage(titleIndex) {
	document.getElementById("headerTitle").innerHTML = titleSet[titleIndex];
	document.getElementById("headerDescribtion").innerHTML = describtionSet[titleIndex];
	document.getElementById("headerGo").innerHTML = goSet[titleIndex];
	document.getElementById("headerBackground").style.backgroundImage = "";
	setTimeout(() => {
	document.getElementById("headerBackground").style.backgroundImage = "url(./images/"
			+ (titleIndex + 1) + ".jpg)";
	     document.getElementById("headerBackground").className = "imageEnter";
	  },1);
}
function stopTimer() {
	clearInterval(interval);
	interval = null;
}
