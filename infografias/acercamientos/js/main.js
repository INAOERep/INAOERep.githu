var modal1 = document.getElementById("myModal1");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById("ia1");
var modalImg1 = document.getElementById("img1");
img1.onclick = function(){
  modal1.style.display = "block";
  modalImg1.src = this.src;
}
// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];
// When the user clicks on <span> (x), close the modal
span1.onclick = function() { 
  modal1.style.display = "none";
}

var modal2 = document.getElementById("myModal2");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img2 = document.getElementById("ia2");
var modalImg2 = document.getElementById("img2");
img2.onclick = function(){
  modal2.style.display = "block";
  modalImg2.src = this.src;
}
// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];
// When the user clicks on <span> (x), close the modal
span2.onclick = function() { 
  modal2.style.display = "none";
}
