// x = r * sin(phi),
// y = r * cos(phi)



function genStar(ecken) {
  var centerX = 0;
  var centerY = 0;
  var starX = [];
  var starY = [];
  var starSides = 25;
  var degrees = 360 / ecken;
  var starAngles = [];
  for (var i = 0; i < ecken; i++) {
    starAngles.push(i*degrees);
  }
  //einzelne koordinaten berechnen
  for (var i = 0; i < ecken; i++) {
    starX.push(centerX+starSides*Math.sin(starAngles[i]/180*Math.PI));
    starY.push(centerY+starSides*Math.cos(starAngles[i]/180*Math.PI));
  }

  // wenn ungerade eckenzahl -> gesamter stern wird gezeichet; falls gerade->nur die "hälfte" des sterns (bsp 8eckiger -> nur viereck wird gezeichet)
  var n=0;
  var star = "";
  for (var i = 0; i < ecken; i++) {
    n = (n + 2) % ecken;
    if (n==0){n=ecken;}
    // console.log(i+"->" + n);
    star+=starX[n-1]+","+starY[n-1]+" ";
  }

  //wenn gerade eckenzahl: "weiteres polygon" anfügen, aber um eine ecke versetzt -> gesamter stern gezeichnet
  n=1;
  if (ecken % 2==0) {
    for (var i = 0; i < ecken/2; i++) {
      n = (n + 2) % ecken;
      if (n==0){n=ecken;}
      // console.log(i+"->" + n);
      star+=starX[n-1]+","+starY[n-1]+" ";
    }
    star+=starX[2]+","+starY[2]+" ";
    star+=starX[ecken/2]+","+starY[ecken/2]+" ";
    //letzte ecke anpassen, sodass der kreis ordentlich und geschlossen gefüllt wird
  }

  console.log("------" + ecken + "------");
  console.log("<polygon points=" + star + "/>");

  return star;
}

document.getElementById("five").setAttributeNS(null,"points", genStar(5));
document.getElementById("eight").setAttributeNS("points", genStar(8));
document.getElementById("five").setAttribute("points", genStar(10));
document.getElementById("fourteen").setAttribute("points", genStar(14));
document.getElementById("eightteen").setAttribute("points", genStar(18));
document.getElementById("twentyseven").setAttribute("points", genStar(27));
