var no = document.querySelectorAll("button").length;
for (var i = 0; i < no; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    nplay(this.innerHTML);
		animate(this.innerHTML);
  });

}
addEventListener("keypress", function(event) {
  nplay(event.key);
	animate(event.key);
});

function nplay(clickbut) {
  switch (clickbut) {
    case "w":
      var audio = new Audio("audio/1.wav");
      audio.play();
      break;
    case "a":
      var audio = new Audio("audio/2.wav");
      audio.play();
      break;
    case "s":
      var audio = new Audio("audio/3.wav");
      audio.play();
      break;
    case "d":
      var audio = new Audio("audio/4.wav");
      audio.play();
      break;
    case "j":
      var audio = new Audio("audio/5.wav");
      audio.play();
      break;
    case "k":
      var audio = new Audio("audio/6.wav");
      audio.play();
      break;
    case "l":
    var audio = new Audio("audio/7.wav");
    audio.play();
    break;
    default:
      alert("press right key");
      break;
  }
}
function animate(key)
{  var act=document.querySelector(".btn"+key);
	act.classList.add("shadow");
	setTimeout(function(){
	act.classList.remove("shadow");},500);
}
