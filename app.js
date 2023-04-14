"use strict";
// ELEMENTS
const frame = document.querySelector(".frame");
const prevBtn = document.querySelector(".prev-Btn");
const nextBtn = document.querySelector(".next-Btn");
const navLinks = document.querySelector(".nav-links");
const header = document.querySelector("header");
const slider = document.querySelector(".slider");
// slider
let currentSlide = 0;
const lastSlide = 2;

function transformFrame(slide) {
  frame.style.transform = `translateX(-${100 * slide}vw)`;
}

prevBtn.addEventListener("click", () => {
  if (currentSlide === 0) {
    currentSlide = lastSlide;
    transformFrame(lastSlide);
  } else {
    currentSlide--;
    transformFrame(currentSlide);
  }
});
nextBtn.addEventListener("click", () => {
  if (currentSlide === lastSlide) {
    currentSlide = 0;
    transformFrame(currentSlide);
  } else {
    currentSlide++;
    transformFrame(currentSlide);
  }
});

// SMOOTH SCROLING//

navLinks.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("nav-item")) {
    const id = e.target.getAttribute("href");

    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

//STICKY NAVBER

const navHeight = header.getBoundingClientRect().height;

function stickyNavber(entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    header.classList.add("navFixed");
    slider.classList.add(`pt-[${navHeight}px]`);
  } else {
    header.classList.remove("navFixed");
    slider.classList.remove(`pt-[${navHeight}px]`);
  }
}
const sliderObserver = new IntersectionObserver(stickyNavber, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

sliderObserver.observe(slider);

// const navHeight = header.getBoundingClientRect().height;

// function stickyNavber(entries){
//   const [entry] = entries;
//   if(!entry.inIntersecting){
//     header.classList.add(("navFixed"))
//     slider.classList.add(`pt-[${navHeight}px]`)
//   }else{
//     header.classList.remove('navFixed')
//     slider.classList.remove(`pt-[${navHeight}px]`)
//   }

// }

// const sliderObserver = new IntersectionObserver(stickyNavber,{
//   root:null,
//   threshold:0,
//   rootMargin:`-${navHeight}px`
// })

// sliderObserver.observe(slider)