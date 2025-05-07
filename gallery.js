function myFunction(imgs) {
  // Get the expanded image
  const expandImg = document.getElementById("expandedImg");
  // Get the image text
  const imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}
/* TEST */
const hamburger = document.querySelector(".burger-btn");
const navUL = document.querySelector(".nav-list");
const bars = document.querySelectorAll(".bar");

hamburger.addEventListener("click", () => {
navUL.classList.toggle("show");

bars.forEach((Element) => {
  Element.classList.toggle("active");
});
});
navUL.addEventListener("click", () => {
navUL.classList.remove("show");

bars.forEach((Element) => {
  Element.classList.remove("active");
});
});