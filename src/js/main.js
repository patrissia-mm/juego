window.addEventListener("load", () => {
  const playerOne = "X";
  const playerTwo = "0";
  let turn = playerOne;
  const GAME = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  const BOXES = document.querySelectorAll(".box");

  const isFull = () => {
    const CP_BOXES = [...GAME].flat(Infinity);
    const isTotal = CP_BOXES.every((box) => box !== null);
    return isTotal;
  };

  const checkGame = () => {
    const isWinnerRowOne = [GAME[0][0], GAME[0][1], GAME[0][2]].every(
      (item) => item === GAME[0][0] && item !== null
    );
    const isWinnerRowTwo = [GAME[1][0], GAME[1][1], GAME[1][2]].every(
      (item) => item === GAME[1][1] && item !== null
    );
    const isWinnerRowThree = [GAME[2][0], GAME[2][1], GAME[2][2]].every(
      (item) => item === GAME[2][2] && item !== null
    );

    const isWinnerColOne = [GAME[0][0], GAME[1][0], GAME[2][0]].every(
      (item) => item === GAME[0][0] && item !== null
    );
    const isWinnerColTwo = [GAME[0][1], GAME[1][1], GAME[2][1]].every(
      (item) => item === GAME[1][1] && item !== null
    );
    const isWinnerColThree = [GAME[0][2], GAME[1][2], GAME[2][2]].every(
      (item) => item === GAME[2][2] && item !== null
    );

    const isWinnerDiagOne = [GAME[0][0], GAME[1][1], GAME[2][2]].every(
      (item) => item === GAME[1][1] && item !== null
    );
    const isWinnerDiagTwo = [GAME[0][2], GAME[1][1], GAME[2][0]].every(
      (item) => item === GAME[1][1] && item !== null
    );

    if (isWinnerRowOne || isWinnerColOne) {
      alert(`Player ${GAME[0][0]} wins!`);
      window.location.reload();
      return;
    }

    if (
      isWinnerRowTwo ||
      isWinnerColTwo ||
      isWinnerDiagOne ||
      isWinnerDiagTwo
    ) {
      alert(`Player ${GAME[1][1]} wins!`);
      window.location.reload();
      return;
    }

    if (isWinnerColThree || isWinnerRowThree) {
      alert(`Player ${GAME[2][2]} wins!`);
      window.location.reload();
      return;
    }
  };

  BOXES.forEach((box) => {
    box.addEventListener("click", () => {
      const row = box.getAttribute("data-row");
      const col = box.getAttribute("data-col");
      GAME[row][col] = turn === playerOne ? "X" : "0";
      box.innerHTML = turn;
      turn = turn === playerOne ? playerTwo : playerOne;
      checkGame();
      if (isFull()) {
        checkGame();
      }
    });
  });
});
