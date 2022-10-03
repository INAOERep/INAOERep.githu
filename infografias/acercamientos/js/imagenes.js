var modal1 = document.getElementById("myModal1");

const markers = document.querySelectorAll("image");
var modalImg1 = document.getElementById("img1");

markers.forEach(marker => marker.addEventListener("click",setModal));

function setModal(){
	modalImg1.src = './img/${this.dataset.src}';
	modal1.style.display = "block";
}

var span1 = document.querySelector(".close1");

span1.onclick = function() {
	modal1.style.display = "none";
	modalImg1.src = "";
}