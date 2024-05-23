import EmblaCarousel from "embla-carousel";
import { addDotBtnsAndClickHandlers } from "./emblaCarouselDotButton";

const OPTIONS = {};

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
  const targetScrollProgress = emblaApi.scrollProgress();
  console.log("targetScrollProgress :>> ", targetScrollProgress);
  console.log(
    "emblaSubApi.scrollSnapList() :>> ",
    emblaSubApi.scrollSnapList()
  );
  const pureIndex =
    targetScrollProgress * (emblaSubApi.scrollSnapList().length - 1);
  const index = Math.round(pureIndex);
  console.log(pureIndex, index);
  emblaSubApi.scrollTo(index);
};

emblaApi
  .on("scroll", syncEmblaScroll)
  .on("destroy", removeDotBtnsAndClickHandlers);
