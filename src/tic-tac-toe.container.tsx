import { useState, useReducer, useEffect } from "react";
import styled from "styled-components";
import TicTacToeSquare from "./components/tic-tac-toe-square.component";

const positions: PossiblePosition[] = [
  "firstRow",
  "secondRow",
  "thirdRow",
  "firstColumn",
  "secondColumn",
  "thirdColumn",
  "firstDiagonal",
  "secondDiagonal",
];

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

const isAllTheSameValue = (array: Turn[]) => {
  return array.every((v) => v === array[0]);
};

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
  const [state, dispatch] = useReducer(reducer, initialState);
  const [allTheSameCharacter, setAllTheSameCharacter] = useState<
    PossiblePosition | ""
  >("");

  useEffect(() => {
    positions.map((position) => {
      if (state[position].length === 3) {
        if (isAllTheSameValue(state[position])) {
          setAllTheSameCharacter(position);
        }
      }
      return null;
    });
  }, [state]);

  const squareProps = {
    turn,
    setTurn,
    dispatch,
    allTheSameCharacter,
  };

  const ticTacToeSquares: TicTacToeSquareProps[] = [
    {
      possiblePositions: ["firstRow", "firstColumn", "firstDiagonal"],
      ...squareProps,
    },
    {
      possiblePositions: ["firstRow", "secondColumn"],
      ...squareProps,
    },
    {
      possiblePositions: ["firstRow", "thirdColumn", "secondDiagonal"],
      ...squareProps,
    },
    {
      possiblePositions: ["secondRow", "firstColumn"],
      ...squareProps,
    },
    {
      possiblePositions: [
        "secondRow",
        "secondColumn",
        "firstDiagonal",
        "secondDiagonal",
      ],
      ...squareProps,
    },
    {
      possiblePositions: ["secondRow", "thirdColumn"],
      ...squareProps,
    },
    {
      possiblePositions: ["thirdRow", "firstColumn", "secondDiagonal"],
      ...squareProps,
    },
    {
      possiblePositions: ["thirdRow", "secondColumn"],
      ...squareProps,
    },
    {
      possiblePositions: ["thirdRow", "thirdColumn", "firstDiagonal"],
      ...squareProps,
    },
  ];

  return (
    <TicTacToeWrapper>
      <TicTacToeArea>
        {ticTacToeSquares.map((ticTacToeSquare, index) => (
          <TicTacToeSquare key={index} {...ticTacToeSquare} />
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
