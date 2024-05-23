import EmblaCarousel from "embla-carousel";
import { addDotBtnsAndClickHandlers } from "./emblaCarouselDotButton";

const OPTIONS = {
  startIndex: 1,
  loop: true,
};

const emblaNode = document.querySelector(".carousel--quotes");
const emblaSubNode = document.querySelector(".carousel--quotes__logos");
const viewportNode = emblaNode.querySelector(".carousel__viewport");
const viewportSubNode = emblaSubNode.querySelector(".carousel__viewport");
const dotsNode = emblaNode.querySelector(".carousel__dots");

const emblaApi = EmblaCarousel(viewportNode, OPTIONS);
const emblaSubApi = EmblaCarousel(viewportSubNode, OPTIONS);

const removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(
  emblaApi,
  dotsNode
);

const syncEmblaScroll = () => {
  emblaSubApi.scrollTo(emblaApi.selectedScrollSnap());
};

emblaApi
  .on("scroll", syncEmblaScroll)
  .on("destroy", removeDotBtnsAndClickHandlers);
