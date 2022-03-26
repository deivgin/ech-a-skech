const app = (() => {
  const board = document.querySelector(".board");
  const grid = 16 * 16;
  let isPaint = false;

  const enablePaint = (e) => {
    isPaint = true;
    if (e.target !== board) {
      paint(e);
    }
  };
  const disablePaint = () => {
    isPaint = false;
  };

  const paint = (e) => {
    isPaint && e.target.classList.add("board__square--hover");
  };

  const fillGrid = () => {
    for (let i = 0; i < grid; i++) {
      const square = document.createElement("div");
      square.id = i;
      square.classList.add("board__square");
      square.addEventListener("mouseover", paint);

      board.appendChild(square);
    }
  };

  const resetGrid = () => {
    for (let i = 0; i < grid; i++) {
      const square = document.getElementById(`${i}`);
      square.remove("mouseenter", paint);
    }
    board.removeEventListener("mousedown", enablePaint);
    board.removeEventListener("mouseup", disablePaint);
    board.innerHTML = "";
    init();
  };

  const init = () => {
    board.addEventListener("mousedown", enablePaint);
    fillGrid();
    board.addEventListener("mouseup", disablePaint);
  };

  return {
    init,
    resetGrid,
  };
})();

app.init();
document.getElementById("resetBtn").addEventListener("click", app.resetGrid);
