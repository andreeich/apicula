export const setupProgressBar = (emblaApi, progressNode) => {
  const applyProgress = () => {
    // const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    const progress = Math.min(
      Math.max(0, Math.min(1, emblaApi.scrollProgress())) +
        (1 / emblaApi.scrollSnapList().length) *
          (1 - Math.min(1, emblaApi.scrollProgress())),
      1
    );
    progressNode.style.transform = `translate3d(${progress * 100}%,0px,0px)`;
  };

  const removeProgress = () => {
    progressNode.removeAttribute("style");
  };

  return {
    applyProgress,
    removeProgress,
  };
};
