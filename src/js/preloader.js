import anime from 'animejs';
// import bph from './bph';

const setupPreloader = () => {
  const preloaderContainer = document.createElement('div');
  const preloader = document.createElement('span');
  preloaderContainer.className = 'fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-base-100';
  preloader.className = 'loading loading-spinner loading-lg';
  preloaderContainer.append(preloader);

  document.body.appendChild(preloaderContainer);
  const preloaderAnimation = () => anime({
    targets: preloaderContainer,
    opacity: 0,
    duration: 400,
    // delay: 10000,
    easing: 'cubicBezier(.17,.67,.83,.67)',
    complete() {
      preloaderContainer.remove();
    },
  });

  document.addEventListener('DOMContentLoaded', preloaderAnimation);
};

export default setupPreloader;
