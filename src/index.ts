/* eslint-disable @typescript-eslint/no-unused-vars */
import './styles.css';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Swiper, { Autoplay, Grid, Navigation, Pagination } from 'swiper';
gsap.registerPlugin(ScrollTrigger);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const listingSlider = new Swiper('.listing-slider', {
  slidesPerView: 3.5,
  spaceBetween: 30,
  grabCursor: true,
  loop: true,
  navigation: {
    nextEl: '[data-listing-slider="next"]',
    prevEl: '[data-listing-slider="prev"]',
  },
  modules: [Navigation, Pagination],
});

const servicesLinks = document.querySelectorAll('.services_link-inner');

// get all .services_title elements and wrap the first word in a span with a class of span-red
const servicesTitle = document.querySelectorAll('.services_title');
servicesTitle.forEach((el) => {
  const words = el.innerHTML.split(' ');
  words[0] = `<span class="span-red">${words[0]}</span>`;
  el.innerHTML = words.join(' ');
});

const heroWords = new Swiper('.hero-words', {
  direction: 'vertical',
  slidesPerView: 1,
  // spaceBetween: 30,
  mousewheel: true,
  speed: 1000,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  modules: [Autoplay],
});

const heroSubWords = new Swiper('.hero-sub-words', {
  direction: 'vertical',
  slidesPerView: 1,
  // spaceBetween: 30,
  mousewheel: true,
  speed: 1000,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  modules: [Autoplay],
});

const team = new Swiper('[data-slider-team]', {
  slidesPerView: 1.3,
  spaceBetween: 20,
  modules: [Navigation, Pagination, Autoplay, Grid],

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.3,
      spaceBetween: 30,
      grid: {
        fill: 'row',
        rows: 1,
      },
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 4,
      grid: {
        fill: 'row',
        rows: 2,
      },
    },
  },
});

gsap.from('.listing-slider .swiper-slide', {
  duration: 0.6,
  autoAlpha: 0,
  stagger: {
    amount: 0.5,
  },
  y: 30,
  filter: 'blur(5px)',
  ease: 'power2.inOut',
  scrollTrigger: {
    trigger: '.listing-slider',
    start: 'top 50%',
    end: 'bottom 50%',
    toggleActions: 'play none none reverse',
  },
});

gsap.from('.services_link-inner', {
  duration: 0.6,
  autoAlpha: 0,
  stagger: 0.1,
  filter: 'blur(5px)',
  rotateX: 90,
  y: 50,
  ease: 'power2.inOut',
  scrollTrigger: {
    trigger: '.services_link-inner',
    start: 'top 70%',
    end: 'bottom 50%',
    toggleActions: 'play none none reverse',
  },
});

gsap.from('.teams-card', {
  duration: 0.6,
  autoAlpha: 0,
  stagger: {
    from: 'random',
    amount: 0.5,
  },
  y: 30,
  filter: 'blur(5px)',
  ease: 'power2.inOut',
  scrollTrigger: {
    trigger: '.swiper-slide.is-teams-slide',
    start: 'top 50%',
    end: 'bottom 50%',
    toggleActions: 'play none none reverse',
  },
});
