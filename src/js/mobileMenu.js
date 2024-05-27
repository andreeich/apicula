import anime from 'animejs';
import { throttle } from 'throttle-debounce';

export const config = {
  toggle: undefined,
  menu: undefined,
  duration: 500,
  animHide: () => {
    anime({
      targets: config.menu,
      translateY: ['0px', '-110%'],
      duration: config.duration,
      complete() {
        config.menu.style.visibility = "hidden";

        document
          .querySelector("html")
          .classList.remove("max-sm:overflow-hidden");
        document
          .querySelector("body")
          .classList.remove("max-sm:overflow-hidden");
        document.querySelector("html").classList.remove("max-sm:h-screen");
        document.querySelector("body").classList.remove("max-sm:h-screen");
      },
    });
    // change button icon to bars-3
    config.toggle.checked = true;
  },
  animShow: () => {
    anime({
      targets: config.menu,
      translateY: ['-110%', '0px'],
      duration: config.duration,
      begin() {
        config.menu.style.visibility = "visible";

        document.querySelector("html").classList.add("max-sm:overflow-hidden");
        document.querySelector("body").classList.add("max-sm:overflow-hidden");
        document.querySelector("html").classList.add("max-sm:h-screen");
        document.querySelector("body").classList.add("max-sm:h-screen");
      },
    });
    // change button icon to x-mark
    config.toggle.checked = false;
  },
};

// ? TOGGLE BUTTON selector
const setupMobileMenu = () => {
  const toggle = document.querySelector(".navbar .navbar-toggle");
  const menu = document.querySelector(".navbar .navbar-menu");

  if (!toggle || !menu) return;

  toggle.checked = true;

  config.toggle = toggle;
  config.menu = menu;

  const setOpen = () => {
    if (config.toggle.checked) {
      // hide mobile menu
      config.animHide();
    } else {
      // show mobile menu
      config.animShow();
    }
  };
  const setOpenThrottle = throttle(config.duration, () => {
    setOpen();
  });
  toggle.addEventListener("click", setOpenThrottle);
};

// setupMobileMenu();

export default setupMobileMenu;
