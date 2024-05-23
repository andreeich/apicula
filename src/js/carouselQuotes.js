import EmblaCarousel from "embla-carousel";
import { addDotBtnsAndClickHandlers } from "./emblaCarouselDotButton";
import Autoplay from "embla-carousel-autoplay";

const OPTIONS = {
  startIndex: 1,
  loop: true,
};

const emblaNode = document.querySelector(".carousel--quotes");
const emblaSubNode = document.querySelector(".carousel--quotes__logos");
const viewportNode = emblaNode.querySelector(".carousel__viewport");
const viewportSubNode = emblaSubNode.querySelector(".carousel__viewport");
const slidesSubNode = emblaSubNode.querySelectorAll(".carousel__slide");
const dotsNode = emblaNode.querySelector(".carousel__dots");

const emblaApi = EmblaCarousel(viewportNode, OPTIONS, [Autoplay()]);
const emblaSubApi = EmblaCarousel(viewportSubNode, OPTIONS);

const removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(
  emblaApi,
  dotsNode
);

const syncEmblaScroll = () => {
  emblaSubApi.scrollTo(emblaApi.selectedScrollSnap());
};
const syncEmblaSubScroll = () => {
  emblaApi.scrollTo(emblaSubApi.selectedScrollSnap());
};
const toggleActiveClass = () => {
  const index = emblaSubApi.selectedScrollSnap();
  slidesSubNode.forEach((slide) => slide.removeAttribute("data-active"));
  slidesSubNode[index].setAttribute("data-active", "");
};

toggleActiveClass();

emblaApi
  .on("scroll", syncEmblaScroll)
  .on("scroll", toggleActiveClass)
  .on("destroy", removeDotBtnsAndClickHandlers);

emblaSubApi
.on("scroll", syncEmblaSubScroll)
// .on("scroll", toggleActiveClass);