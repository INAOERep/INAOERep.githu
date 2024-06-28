var modal1 = document.getElementById("myModal1");
// Get the image and insert it inside the modal - use its "alt" text as a caption
const markers = document.querySelectorAll("image");
var modalImg1 = document.getElementById("img1");

markers.forEach(marker => marker.addEventListener("click",setModal));

function setModal(){
  modalImg1.src = `./img/${this.dataset.src}`;
  modal1.style.display = "block";
}
// Get the <span> element that closes the modal
var span1 = document.querySelector(".close1");
// When the user clicks on <span> (x), close the modal
span1.onclick = function() { 
  modal1.style.display = "none";
  modalImg1.src = "";
}