"use strict";

const prev = document.getElementById('prev');
const next = document.getElementById('next');
const slides = document.querySelectorAll('.session__slider__sliders__slide');
let currentIndex = 0;
const lastIndex = 5;
const firstIndex = 0;

const goPrev = () => {
    if(currentIndex > firstIndex) {
        slides[currentIndex].classList.remove('session__slider__sliders__slide--expand');
        currentIndex--;
        slides[currentIndex].classList.add('session__slider__sliders__slide--expand');
        next.classList.remove('session__slider__nav__btn--disable');
        if(currentIndex <= firstIndex) {
            prev.classList.add('session__slider__nav__btn--disable');
        }
    }
};

const goNext = () => {
    if(currentIndex < lastIndex) {
        slides[currentIndex].classList.remove('session__slider__sliders__slide--expand');
        currentIndex++;
        slides[currentIndex].classList.add('session__slider__sliders__slide--expand');
        prev.classList.remove('session__slider__nav__btn--disable');
        if(currentIndex >= lastIndex) {
            next.classList.add('session__slider__nav__btn--disable');
        }
    }
};

const expandThis = (index) => {
    currentIndex = index;
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('session__slider__sliders__slide--expand');
    }
    slides[currentIndex].classList.add('session__slider__sliders__slide--expand');
    if(currentIndex > firstIndex) {
        prev.classList.remove('session__slider__nav__btn--disable');
    } else {
        prev.classList.add('session__slider__nav__btn--disable');
    }
    if(currentIndex < lastIndex) {
        next.classList.remove('session__slider__nav__btn--disable');
    } else {
        next.classList.add('session__slider__nav__btn--disable');
    }
};

prev.addEventListener("click", goPrev);
next.addEventListener("click", goNext);

for(let i = 0; i < slides.length; i++) {
    slides[i].addEventListener("click", () => expandThis(i));
}