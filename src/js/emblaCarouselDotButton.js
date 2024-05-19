export const addDotBtnsAndClickHandlers = (emblaApi, dotsNode) => {
  let dotNodes = [];

  const addDotBtnsWithClickHandlers = () => {
    dotsNode.innerHTML = emblaApi
      .scrollSnapList()
      .map(
        () =>
          '<button class="carousel__dot" type="button" aria-label="Dot"></button>'
      )
      .join("");

    const scrollTo = (index) => {
      emblaApi.scrollTo(index);
    };

    dotNodes = Array.from(dotsNode.querySelectorAll(".carousel__dot"));
    dotNodes.forEach((dotNode, index) => {
      dotNode.addEventListener("click", () => scrollTo(index), false);
    });
  };

  const toggleDotBtnsActive = () => {
    const previous = emblaApi.previousScrollSnap();
    const selected = emblaApi.selectedScrollSnap();
    dotNodes[previous].classList.remove("carousel__dot--selected");
    dotNodes[selected].classList.add("carousel__dot--selected");
  };

  emblaApi
    .on("init", addDotBtnsWithClickHandlers)
    .on("reInit", addDotBtnsWithClickHandlers)
    .on("init", toggleDotBtnsActive)
    .on("reInit", toggleDotBtnsActive)
    .on("select", toggleDotBtnsActive);
  // console.log("dot");
  return () => {
    dotsNode.innerHTML = "";
  };
};
