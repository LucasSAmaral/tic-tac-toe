export const isAllTheSameValue = (array: Turn[]) => {
    return array.every((v) => v === array[0]);
  };

const setPositionHandler = (TicTacToeProps: TicTacToeSquareProps) => {
    TicTacToeProps.possiblePositions.map((possiblePosition) =>
      TicTacToeProps.dispatch({
        type: possiblePosition,
        payload: TicTacToeProps.turn,
      })
    );
  };

  export const clickHandler = ({
    choosenCharacter,
    setChoosenCharacter,
    TicTacToeProps,
  }: ClickHandlerObjectParam) => {
    if (choosenCharacter === "") {
      if (TicTacToeProps.turn === "X") {
        setChoosenCharacter("X");
        TicTacToeProps.setTurn("O");
      } else {
        setChoosenCharacter("O");
        TicTacToeProps.setTurn("X");
      }
      setPositionHandler(TicTacToeProps);
    }
  };