type Turn = "X" | "O";

type PossiblePosition =
  | "firstRow"
  | "secondRow"
  | "thirdRow"
  | "firstColumn"
  | "secondColumn"
  | "thirdColumn"
  | "firstDiagonal"
  | "secondDiagonal";

type TicTacToeSquareProps = {
  turn: Turn;
  setTurn: React.Dispatch<React.SetStateAction<Turn>>;
  dispatch: React.Dispatch<ActionType>;
  possiblePositions: PossiblePosition[];
  allTheSameCharacter: PossiblePosition | "";
};

type StateProps = { [key in PossiblePosition]: Turn[] | [] };

type InitialStateProps = { [key in PossiblePosition]: [] };

type ActionType = { type: PossiblePosition; payload: Turn };

type ClickHandlerObjectParam = {
  choosenCharacter: Turn | "";
  setChoosenCharacter: React.Dispatch<React.SetStateAction<Turn | "">>;
  TicTacToeProps: TicTacToeSquareProps;
};

type SquareProps = {
  turn: Turn;
  setTurn: React.Dispatch<React.SetStateAction<Turn>>;
  dispatch: React.Dispatch<ActionType>;
  allTheSameCharacter: "" | PossiblePosition;
};
