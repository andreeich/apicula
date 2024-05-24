const grid = document.querySelector("[data-reverse-grid]");

if (grid) {
  const gridItems = grid.querySelectorAll("& > *");

  const bound = parseInt(grid.getAttribute("data-reverse-grid"));
  gridItems.forEach((item, key) => {
    const col = Math.floor(key / bound) + 1;
    const row = (Math.floor(key / bound) + 1) * bound - key;
    item.style.gridCol = col;
    item.style.gridRow = row;
  });
}
