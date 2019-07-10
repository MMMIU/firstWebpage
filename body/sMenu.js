var boxHeightSet= new Array("0px", "400px", "400px", "400px", "400px", "270px", "400px", "300px", "300px", "270px", "270px","200px", "300px", "700px", "300px", "100px")
var arrowSet= new Array("9%", "29%", "49%", "69%", "89%")
var boxPrevious=1;

function showContent(index) {
	var boxIndex=Math.floor((index-1) / 5)+1;
	for(var i=1;i<=3;i++){
		document.getElementById("box"+i).style.height="0px"; 
		document.getElementById("arrow"+i).style.display="none"; 
		document.getElementById("arrow"+i).style.marginLeft=arrowSet[(index-1)%5]; 
	}
	for(var i=1;i<=15;i++){
		document.getElementById("icon"+i).style.backgroundImage='url("./images/yzl.png")'; 
		document.getElementById("content"+i).style.display='none'; 
	}
	document.getElementById("box"+boxIndex).style.height=boxHeightSet[index]; 
	if(boxIndex==boxPrevious){
		document.getElementById("arrow"+boxIndex).style.display="block"; 
	}else{
		setTimeout(() => {
			document.getElementById("arrow"+boxIndex).style.display="block"; 
		}, 300);
		boxPrevious=boxIndex;
	}
    document.getElementById("icon"+index).style.backgroundImage='url("./images/yzlc.png")'; 
    setTimeout(() => {
    	document.getElementById("content"+index).style.display='block'
	}, 300);
    }