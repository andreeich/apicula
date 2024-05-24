import EmblaCarousel from "embla-carousel";
import { setupProgressBar } from "./emblaCarouselProgressBarByView";
import { addPrevNextBtnsClickHandlers } from "./emblaCarouselArrowButtons";

const OPTIONS = { align: "start", startIndex: 0, dragFree: false, loop: false };

const emblaNode = document.querySelectorAll(".carousel--cards");

emblaNode.forEach((emblaNode) => {
  const viewportNode = emblaNode.querySelector(".carousel__viewport");
  const prevBtnNode = emblaNode.querySelector(".carousel__button--prev");
  const nextBtnNode = emblaNode.querySelector(".carousel__button--next");
  const progressNode = emblaNode.querySelector(".carousel__progress__bar");

  const emblaApi = EmblaCarousel(viewportNode, OPTIONS);

  const { applyProgress, removeProgress } = setupProgressBar(
    emblaApi,
    progressNode
  );

  if ((prevBtnNode, nextBtnNode)) {
    const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
      emblaApi,
      prevBtnNode,
      nextBtnNode
    );

    emblaApi
      .on("init", applyProgress)
      .on("reInit", applyProgress)
      .on("scroll", applyProgress)
      .on("slideFocus", applyProgress)
      .on("destroy", removeProgress)
      .on("destroy", removePrevNextBtnsClickHandlers);
  } else {
    emblaApi
      .on("init", applyProgress)
      .on("reInit", applyProgress)
      .on("scroll", applyProgress)
      .on("slideFocus", applyProgress)
      .on("destroy", removeProgress);
  }
});
