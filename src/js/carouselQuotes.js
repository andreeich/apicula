import EmblaCarousel from "embla-carousel";
import { addPrevNextBtnsClickHandlers } from "./EmblaCarouselArrowButtons";
import { addDotBtnsAndClickHandlers } from "./EmblaCarouselDotButton";

const OPTIONS = {};

const emblaNode = document.querySelector(".carousel--quotes");
const viewportNode = emblaNode.querySelector(".carousel__viewport");
// const prevBtnNode = emblaNode.querySelector(".carousel__button--prev");
// const nextBtnNode = emblaNode.querySelector(".carousel__button--next");
const dotsNode = emblaNode.querySelector(".carousel__dots");

const emblaApi = EmblaCarousel(viewportNode, OPTIONS);

// const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
//   emblaApi,
//   prevBtnNode,
//   nextBtnNode
// );

const removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(
  emblaApi,
  dotsNode
);

// emblaApi.on("destroy", removePrevNextBtnsClickHandlers);
emblaApi.on("destroy", removeDotBtnsAndClickHandlers);
