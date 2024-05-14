// banner slider

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < slides.length; i++) {
    slides[i].className = slides[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  slides[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}






// slider
var swiper = new Swiper(".mySwiper-section2", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swipers-buttons-nexts",
    prevEl: ".swipers-buttons-prevs",
  },
});





// Slider

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swipers-button-next",
    prevEl: ".swipers-button-prev",
  },
});

// slider
var swiper = new Swiper(".mySwipers", {
  slidesPerView: 6,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swipers-buttons-next",
    prevEl: ".swipers-buttons-prev",
  },
});

// slider

var swiper = new Swiper(".mySwipers-section9", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiperss-buttons-next",
    prevEl: ".swiperss-buttons-prev",
  },
});

