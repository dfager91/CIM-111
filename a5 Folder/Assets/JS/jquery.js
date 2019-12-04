$(document).ready(function(){
  $("header").click(function(){
    alert($("header").html());
  });
});

function changeImage() {
  var image = document.getElementById("myImage");
  if (image.src.match("Assets/IMAGES/ingredients.jpg")) {
    image.src = "Assets/IMAGES/lasgna.jpg";
  } else {
    image.src = "Assets/IMAGES/ingredients.jpg";
  }
}
$(document).ready(function(){
  $("button").click(function(){
    $("h1").css("background-color", "yellow");
  });
});
$(document).ready(function(){
  $("button").click(function(){
    $("p").hide(1000);
  });
});

var text = "";
var i;
for (i = 0; i < 5; i++) {
  text += "Number of servings in lasagna " + i + "<br>";
}
document.getElementById("demo").innerHTML = text;

$(document).ready(function(){
	console.log("test");


$(document).ready(function(){
  $("#p1").mouseleave(function(){
    alert("Enjoy Your Lasagna!"); 
  });
});
});
