export const updateSelectedSnapDisplay = (
  emblaApi,
  snapDisplaySelected,
  snapDisplayCount
) => {
  const updateSnapDisplay = (emblaApi) => {
    const selectedSnap = emblaApi.selectedScrollSnap();
    const snapCount = emblaApi.scrollSnapList().length;
    snapDisplaySelected.innerHTML =
      selectedSnap < 10 ? `0${selectedSnap + 1}` : `${selectedSnap + 1}`;
    snapDisplayCount.innerHTML =
      snapCount < 10 ? `0${snapCount}` : `${snapCount}`;
  };

  emblaApi.on("select", updateSnapDisplay).on("reInit", updateSnapDisplay);

  updateSnapDisplay(emblaApi);
};
