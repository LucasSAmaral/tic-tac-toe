import { useState, useReducer, useEffect } from "react";
import styled from "styled-components";
import TicTacToeSquare from "./components/tic-tac-toe-square.component";
import {
  buildTicTacToeSquares,
  isAllTheSameValue,
} from "./handlers/tic-tac-toe.handlers";
import { initialState, reducer } from "./tic-tac-toe.reducer";

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

  const ticTacToeSquares = buildTicTacToeSquares(squareProps);

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
