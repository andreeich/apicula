import EmblaCarousel from "embla-carousel";
import { setupProgressBar } from "./emblaCarouselProgressBar";

const OPTIONS = { align: "start" };

const emblaNode = document.querySelector(".carousel--tabs");
const viewportNode = emblaNode.querySelector(".carousel__viewport");
const progressNode = emblaNode.querySelector(".carousel__progress__bar");

const emblaApi = EmblaCarousel(viewportNode, OPTIONS);

const { applyProgress, removeProgress } = setupProgressBar(
  emblaApi,
  progressNode
);

emblaApi
  .on("init", applyProgress)
  .on("reInit", applyProgress)
  .on("scroll", applyProgress)
  .on("slideFocus", applyProgress)
  .on("destroy", removeProgress);
