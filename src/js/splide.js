import { Splide } from '@splidejs/splide';

// ? main styles
import '@splidejs/splide/dist/css/splide.min.css';
// import '@splidejs/splide/dist/css/splide-core.min.css';

const splideName = document.querySelectorAll('.splide.splide--name');

splideName.forEach((splide) => {
  new Splide(splide, {
    type: 'loop',
    perPage: 1,
    autoWidth: true,
    // autoHeight: true,
    height: '248px',
    gap: '24px',
    // drag: 'free',
    // pauseOnHover: true,
    pagination: false,
    arrows: true,
    breakpoints: {
      640: { height: '154px', gap: '7px' },
    },
  }).mount();
});
