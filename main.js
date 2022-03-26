const app = (() => {
  const board = document.querySelector(".board");
  const grid = 16 * 16;
  let isPaint = false;

  const enablePaint = (e) => {
    isPaint = true;
    if (e.target !== board) {
      paint(e);
    }
    console.log(isPaint);
  };
  const disablePaint = () => {
    isPaint = false;
    console.log(isPaint);
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
  };

  const init = () => {
    board.addEventListener("mousedown", enablePaint);
    fillGrid();
    board.addEventListener("mouseup", disablePaint);
  };

  return {
    init,
  };
})();

app.init();
