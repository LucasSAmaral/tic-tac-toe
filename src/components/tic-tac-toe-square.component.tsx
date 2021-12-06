import { useState } from "react";
import styled, { css } from "styled-components";
import { clickHandler } from "../handlers/tic-tac-toe.handlers";

const TicTacToeSquare: React.FC<TicTacToeSquareProps> = ({
  ...TicTacToeProps
}) => {
  const [choosenCharacter, setChoosenCharacter] = useState<Turn | "">("");
  const clickHandlerParams = {
    choosenCharacter,
    setChoosenCharacter,
    TicTacToeProps,
  };
  return (
    <TicTacToeOptionWrapper
      allTheSameCharacter={TicTacToeProps.allTheSameCharacter}
      possiblePositions={TicTacToeProps.possiblePositions}
      onClick={() =>
        TicTacToeProps.allTheSameCharacter === "" &&
        clickHandler(clickHandlerParams)
      }
    >
      <h2>{choosenCharacter}</h2>
    </TicTacToeOptionWrapper>
  );
};

const TicTacToeOptionWrapper = styled.div<{
  allTheSameCharacter: PossiblePosition | "";
  possiblePositions: PossiblePosition[];
}>`
  cursor: pointer;
  border: 1px solid black;
  display: flex;
  align-items: center;
  height: 166px;

  ${({ allTheSameCharacter, possiblePositions }) =>
    allTheSameCharacter && possiblePositions.includes(allTheSameCharacter)
      ? css`
          background-color: green;
          color: white;
        `
      : ""}

  h2 {
    text-align: center;
    margin: 0 auto;
    font-size: 70px;
  }
`;

export default TicTacToeSquare;
