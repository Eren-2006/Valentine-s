function showSurprise() {
  const msg = document.getElementById("hiddenMessage");
  msg.style.display = "block";
}
function openImg(img) {
  document.getElementById("popup").style.display = "flex";
  document.getElementById("popupImg").src = img.src;
}

function closeImg() {
  document.getElementById("popup").style.display = "none";
}