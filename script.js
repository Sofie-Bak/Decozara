document.addEventListener("DOMContentLoaded", function () {
    /* here i crreate my array of images for my js to use */
    const images = [
        "img/bathtubandwindow.jpg",
        "img/statues.jpg",
        "img/sofaandwindow.jpg"
    ];

  /* if its 0 it makes sense since we want to add or remove */
  let currentIndex = 0;

  /* here we pick the first image and add it as the current index so that it has something to go off of? */
  const sliderImage = document.querySelector(".header-img");
  sliderImage.src = images[currentIndex];
  /* when you CLICK the .prev remove one from ?images.length of all images?? */
  /* images.length (length) is built in which gets the length of an array which we added in the start. % makes sure that if we are on last picture that we start on nr 0 again (makes sure we start over when we hit the last)*/
  document.querySelector(".prev").addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    sliderImage.src = images[currentIndex];
  });
  /* when you click the .next ADD one, here we dont add lengths because you can add infinitely where as you cant go into - in js. And we add the % for js to keep track of our array length?*/
  document.querySelector(".next").addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % images.length;
    sliderImage.src = images[currentIndex];
  });

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


/* =========SCROLL========= */
// Get the button
const scrollToTopBtn = document.getElementById("scrollToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
scrollToTopBtn.addEventListener("click", function() {
    // Smooth scrolling behavior
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

});

/* CONTACT SECTION */

  