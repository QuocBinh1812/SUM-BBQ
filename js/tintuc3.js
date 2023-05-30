// Get the modal
var modal2 = document.getElementById("myModal2");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img2 = document.getElementById("myImg2");
var imgtwo = document.getElementById("myImgTwo");
var modalImg2 = document.getElementById("img01-2");
var captionText2 = document.getElementById("caption2");
img2.onclick = function () {
  modal2.style.display = "block";
  modalImg2.src = this.src;
  captionText2.innerHTML = this.alt;
}
imgtwo.onclick = function () {
  modal2.style.display = "block";
  modalImg2.src = this.src;
  captionText2.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal2.style.display = "none";
}