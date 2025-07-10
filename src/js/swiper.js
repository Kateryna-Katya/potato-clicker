import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const swiperConfigs = [
  {
    selector: '.features-swiper',
    slideClass: 'features-swiper-slide',
    wrapperClass: 'features-swiper-wrapper',
  },
  {
    selector: '.reviews-swiper',
    slideClass: 'reviews-swiper-slide',
    wrapperClass: 'reviews-swiper-wrapper',
  },
  {
    selector: '.characters-swiper',
    slideClass: 'characters-swiper-slide',
    wrapperClass: 'characters-swiper-wrapper',
  },
  {
    selector: '.spud-swiper',
    slideClass: 'spud-swiper-slide',
    wrapperClass: 'spud-swiper-wrapper',
    navigation: {
      nextEl: '.spud-nav .custom-next',
      prevEl: '.spud-nav .custom-prev',
    },
  },
];

const swiperInstances = {};

function initSwipers() {
  const screenWidth = window.innerWidth;

  swiperConfigs.forEach(config => {
    const container = document.querySelector(config.selector);
    if (!container) return;

    const id = config.selector;

    // Destroy existing swiper
    if (swiperInstances[id]) {
      swiperInstances[id].destroy(true, true);
      delete swiperInstances[id];
    }

    // === SHIP SWIPER ===
    if (config.selector === '.features-swiper') {
      if (screenWidth < 1439) {
        const swiper = new Swiper(container, {
          slidesPerView: 1.6,
          spaceBetween: 20,
          loop: true,
          slideClass: config.slideClass,
          wrapperClass: config.wrapperClass,
          direction: 'horizontal',
        });
        swiperInstances[id] = swiper;
      }
    }

    // === REVIEWS SWIPER ===
    else if (config.selector === '.reviews-swiper') {
      if (screenWidth < 1439) {
        const swiper = new Swiper(container, {
          slidesPerView: 1.1,
          spaceBetween: 20,
          loop: true,
          slideClass: config.slideClass,
          wrapperClass: config.wrapperClass,
          direction: 'horizontal',
        });
        swiperInstances[id] = swiper;
      }
    }
      
          // === characters SWIPER ===
    else if (config.selector === '.characters-swiper') {
      if (screenWidth < 1439) {
        const swiper = new Swiper(container, {
          slidesPerView: 1,
          spaceBetween: 20,
          loop: true,
          slideClass: config.slideClass,
          wrapperClass: config.wrapperClass,
          direction: 'horizontal',
        });
        swiperInstances[id] = swiper;
      }
    }

    // === GALLERY SWIPER ===
    else if (config.selector === '.spud-swiper') {
        const swiper = new Swiper(container, {
            modules: [Navigation],
            loop: true, 
            slideClass: config.slideClass,
            wrapperClass: config.wrapperClass,
            direction: 'horizontal',
            navigation: config.navigation,
            observer: true,
            observeParents: true,
        
            breakpoints: {
             374: {
                slidesPerView: 1.1,
                spaceBetween: 20,
              },
              1440: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            },
          });
        
          swiperInstances[id] = swiper;
        }
  });
}

// Init on page load
document.addEventListener('DOMContentLoaded', initSwipers);

// Re-init on resize (with debounce)
window.addEventListener('resize', () => {
  clearTimeout(window._swiperResizeTimeout);
  window._swiperResizeTimeout = setTimeout(initSwipers, 300);
});