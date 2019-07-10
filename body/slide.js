var position= [1000,0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200]
var first= 1

function showButton(){
	document.getElementById("leftButton").style.display="block";
	document.getElementById("rightButton").style.display="block";
}
function hideButton(){
	document.getElementById("leftButton").style.display="none";
	document.getElementById("rightButton").style.display="none";
}
function left() {
	for(var i=1;i<=11;i++){
		document.getElementById("img"+i).style.transition="0s";
	}
      var move = 100;
      if (first == 2) {
    	position[1]=-20;
        document.getElementById("img1").style.left=position[1]+"%";
        move = 20;
        first = 1;
      } else {
        for (var i = 1; i <= 11; i++) {
          if (position[i] >= 120) {
            position[i]=position[i] - 220;
            document.getElementById("img"+i).style.left=position[i]+"%";
          }
        }
        first = (first + 6) % 11;
      }
      setTimeout(() => {
        for (var i = 1; i <= 11; i++) {
          position[i]= position[i] + move;
          document.getElementById("img"+i).style.left=position[i]+"%";
          document.getElementById("img"+i).style.transition="0.6s ease";
        }
      }, 30);
    }

function right() {
	for(var i=1;i<=11;i++){
		document.getElementById("img"+i).style.transition="0s";
	}
      var move = -100;
      if (first == 6) {
    	position[11]=100;
        document.getElementById("img11").style.left=position[11]+"%";
        move = -20;
        first = 7;
      } else {
        for (var i = 1; i <= 11; i++) {
          if (position[i] <=-20) {
            position[i]=position[i] + 220;
            document.getElementById("img"+i).style.left=position[i]+"%";
          }
        }
        first = (first + 5) % 11;
      }
      setTimeout(() => {
        for (var i = 1; i <= 11; i++) {
          position[i]= position[i] + move;
          document.getElementById("img"+i).style.left=position[i]+"%";
          document.getElementById("img"+i).style.transition="0.6s ease";
        }
      }, 30);
    }
