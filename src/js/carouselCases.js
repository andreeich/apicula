import EmblaCarousel from "embla-carousel";
import { addPrevNextBtnsClickHandlers } from "./emblaCarouselArrowButtons";
import { setupProgressBar } from "./emblaCarouselProgressBar";
import { updateSelectedSnapDisplay } from "./emblaCarouselSelectedSnapDisplay";

const OPTIONS = { align: "start" };

const emblaNode = document.querySelector(".carousel--cases");
const viewportNode = emblaNode.querySelector(".carousel__viewport");
const prevBtnNode = emblaNode.querySelector(".carousel__button--prev");
const nextBtnNode = emblaNode.querySelector(".carousel__button--next");
const progressNode = emblaNode.querySelector(".carousel__progress__bar");
const snapDisplaySelectedNode = emblaNode.querySelector(
  ".carousel__selected-snap-display--selected"
);
const snapDisplayCountNode = emblaNode.querySelector(
  ".carousel__selected-snap-display--count"
);

const emblaApi = EmblaCarousel(viewportNode, OPTIONS);

const { applyProgress, removeProgress } = setupProgressBar(
  emblaApi,
  progressNode
);
const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
  emblaApi,
  prevBtnNode,
  nextBtnNode
);
updateSelectedSnapDisplay(
  emblaApi,
  snapDisplaySelectedNode,
  snapDisplayCountNode
);

emblaApi
  .on("init", applyProgress)
  .on("reInit", applyProgress)
  .on("scroll", applyProgress)
  .on("slideFocus", applyProgress)
  .on("destroy", removeProgress)
  .on("destroy", removePrevNextBtnsClickHandlers);
