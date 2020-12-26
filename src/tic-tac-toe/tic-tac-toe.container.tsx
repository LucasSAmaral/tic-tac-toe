import { useState, useReducer, useEffect } from "react";
import styled from "styled-components";
import TicTacToeSquare from "./components/tic-tac-toe-square.component";

export type Turn = "X" | "O";

export type TicTacToeSquareProps = {
  turn: Turn;
  setTurn: React.Dispatch<React.SetStateAction<Turn>>;
  possiblePositions: PossiblePosition[];
  allTheSameCharacter: PossiblePosition | "";
  firstRow?: [] | Turn[];
  setFirstRow?: React.Dispatch<React.SetStateAction<[] | Turn[]>>;
  secondRow?: [] | Turn[];
  setSecondRow?: React.Dispatch<React.SetStateAction<[] | Turn[]>>;
  thirdRow?: [] | Turn[];
  setThirdRow?: React.Dispatch<React.SetStateAction<[] | Turn[]>>;
  firstColumn?: [] | Turn[];
  setFirstColumn?: React.Dispatch<React.SetStateAction<[] | Turn[]>>;
  secondColumn?: [] | Turn[];
  setSecondColumn?: React.Dispatch<React.SetStateAction<[] | Turn[]>>;
  thirdColumn?: [] | Turn[];
  setThirdColumn?: React.Dispatch<React.SetStateAction<[] | Turn[]>>;
  firstDiagonal?: [] | Turn[];
  setFirstDiagonal?: React.Dispatch<React.SetStateAction<[] | Turn[]>>;
  secondDiagonal?: [] | Turn[];
  setSecondDiagonal?: React.Dispatch<React.SetStateAction<[] | Turn[]>>;
};

export type PossiblePosition =
  | "firstRow"
  | "secondRow"
  | "thirdRow"
  | "firstColumn"
  | "secondColumn"
  | "thirdColumn"
  | "firstDiagonal"
  | "secondDiagonal";

const isAllTheSameValue = (array: Turn[]) => {
  return array.every((v) => v === array[0]);
};

type StateProps = { [key in PossiblePosition]: Turn[] | [] };

type InitialStateProps = { [key in PossiblePosition]: [] };

const initialState: InitialStateProps = {
  firstRow: [],
  secondRow: [],
  thirdRow: [],
  firstColumn: [],
  secondColumn: [],
  thirdColumn: [],
  firstDiagonal: [],
  secondDiagonal: [],
};

type ActionType = { type: PossiblePosition; payload: Turn };

const reducer = (state: StateProps, action: ActionType): StateProps => {
  switch (action.type) {
    case "firstRow":
      return { ...state, firstRow: [...state.firstRow, action.payload] };
    case "secondRow":
      return { ...state, secondRow: [...state.secondRow, action.payload] };
    case "thirdRow":
      return { ...state, thirdRow: [...state.thirdRow, action.payload] };
    case "firstColumn":
      return { ...state, firstColumn: [...state.firstColumn, action.payload] };
    case "secondColumn":
      return {
        ...state,
        secondColumn: [...state.secondColumn, action.payload],
      };
    case "thirdColumn":
      return { ...state, thirdColumn: [...state.thirdColumn, action.payload] };
    case "firstDiagonal":
      return {
        ...state,
        firstDiagonal: [...state.firstDiagonal, action.payload],
      };
    case "secondDiagonal":
      return {
        ...state,
        secondDiagonal: [...state.secondDiagonal, action.payload],
      };
    default:
      return { ...state };
  }
};

const TicTacToe: React.FC = () => {
  const [turn, setTurn] = useState<Turn>("X");
  const [firstRow, setFirstRow] = useState<Turn[] | []>([]);
  const [secondRow, setSecondRow] = useState<Turn[] | []>([]);
  const [thirdRow, setThirdRow] = useState<Turn[] | []>([]);
  const [firstColumn, setFirstColumn] = useState<Turn[] | []>([]);
  const [secondColumn, setSecondColumn] = useState<Turn[] | []>([]);
  const [thirdColumn, setThirdColumn] = useState<Turn[] | []>([]);
  const [firstDiagonal, setFirstDiagonal] = useState<Turn[] | []>([]);
  const [secondDiagonal, setSecondDiagonal] = useState<Turn[] | []>([]);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [allTheSameCharacter, setAllTheSameCharacter] = useState<
    PossiblePosition | ""
  >("");

  useEffect(() => {
    if (firstRow.length === 3) {
      if (isAllTheSameValue(firstRow)) {
        setAllTheSameCharacter("firstRow");
      }
    }
  }, [firstRow]);

  useEffect(() => {
    if (secondRow.length === 3) {
      if (isAllTheSameValue(secondRow)) {
        setAllTheSameCharacter("secondRow");
      }
    }
  }, [secondRow]);

  useEffect(() => {
    if (thirdRow.length === 3) {
      if (isAllTheSameValue(thirdRow)) {
        setAllTheSameCharacter("thirdRow");
      }
    }
  }, [thirdRow]);

  useEffect(() => {
    if (firstColumn.length === 3) {
      if (isAllTheSameValue(firstColumn)) {
        setAllTheSameCharacter("firstColumn");
      }
    }
  }, [firstColumn]);

  useEffect(() => {
    if (secondColumn.length === 3) {
      if (isAllTheSameValue(secondColumn)) {
        setAllTheSameCharacter("secondColumn");
      }
    }
  }, [secondColumn]);

  useEffect(() => {
    if (thirdColumn.length === 3) {
      if (isAllTheSameValue(thirdColumn)) {
        setAllTheSameCharacter("thirdColumn");
      }
    }
  }, [thirdColumn]);

  useEffect(() => {
    if (firstDiagonal.length === 3) {
      if (isAllTheSameValue(firstDiagonal)) {
        setAllTheSameCharacter("firstDiagonal");
      }
    }
  }, [firstDiagonal]);

  useEffect(() => {
    if (secondDiagonal.length === 3) {
      if (isAllTheSameValue(secondDiagonal)) {
        setAllTheSameCharacter("secondDiagonal");
      }
    }
  }, [secondDiagonal]);

  const mandatoryProps = {
    turn,
    setTurn,
    allTheSameCharacter,
  };

  const firstRowProps = {
    firstRow,
    setFirstRow,
  };

  const secondRowProps = {
    secondRow,
    setSecondRow,
  };

  const thirdRowProps = {
    thirdRow,
    setThirdRow,
  };

  const firstColumnProps = {
    firstColumn,
    setFirstColumn,
  };

  const secondColumnProps = {
    secondColumn,
    setSecondColumn,
  };

  const thirdColumnProps = {
    thirdColumn,
    setThirdColumn,
  };

  const firstDiagonalProps = {
    firstDiagonal,
    setFirstDiagonal,
  };

  const secondDiagonalProps = {
    secondDiagonal,
    setSecondDiagonal,
  };

  const ticTacToeSquaresProps: TicTacToeSquareProps[] = [
    {
      possiblePositions: ["firstRow", "firstColumn", "firstDiagonal"],
      ...mandatoryProps,
      ...firstRowProps,
      ...firstColumnProps,
      ...firstDiagonalProps,
    },
    {
      possiblePositions: ["firstRow", "secondColumn"],
      ...mandatoryProps,
      ...firstRowProps,
      ...secondColumnProps,
    },
    {
      possiblePositions: ["firstRow", "thirdColumn", "secondDiagonal"],
      ...mandatoryProps,
      ...firstRowProps,
      ...thirdColumnProps,
      ...secondDiagonalProps,
    },
    {
      possiblePositions: ["secondRow", "firstColumn"],
      ...mandatoryProps,
      ...secondRowProps,
      ...firstColumnProps,
    },
    {
      possiblePositions: [
        "secondRow",
        "secondColumn",
        "firstDiagonal",
        "secondDiagonal",
      ],
      ...mandatoryProps,
      ...secondRowProps,
      ...secondColumnProps,
      ...firstDiagonalProps,
      ...secondDiagonalProps,
    },
    {
      possiblePositions: ["secondRow", "thirdColumn"],
      ...mandatoryProps,
      ...secondRowProps,
      ...thirdColumnProps,
    },
    {
      possiblePositions: ["thirdRow", "firstColumn", "secondDiagonal"],
      ...mandatoryProps,
      ...thirdRowProps,
      ...firstColumnProps,
      ...secondDiagonalProps,
    },
    {
      possiblePositions: ["thirdRow", "secondColumn"],
      ...mandatoryProps,
      ...thirdRowProps,
      ...secondColumnProps,
    },
    {
      possiblePositions: ["thirdRow", "thirdColumn", "firstDiagonal"],
      ...mandatoryProps,
      ...thirdRowProps,
      ...thirdColumnProps,
      ...firstDiagonalProps,
    },
  ];

  return (
    <TicTacToeWrapper>
      <TicTacToeArea>
        {ticTacToeSquaresProps.map((ticTacToeSquareProps, index) => (
          <TicTacToeSquare key={index} {...ticTacToeSquareProps} />
        ))}
      </TicTacToeArea>
    </TicTacToeWrapper>
  );
};

const TicTacToeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const TicTacToeArea = styled.div`
  max-width: 500px;
  min-height: 500px;
  width: 100%;
  border: 1px solid black;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  box-sizing: border-box;
`;

export default TicTacToe;
