import { useState } from "react";
import styled, { css } from "styled-components";
import { Turn } from "../tic-tac-toe.container";

type TicTacToeOptionProps = {
  turn: Turn;
  setTurn: React.Dispatch<React.SetStateAction<Turn>>;
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

type ClickHandlerObjectParam = {
  choosenCharacter: Turn | "";
  setChoosenCharacter: React.Dispatch<React.SetStateAction<Turn | "">>;
  setAllTheSame: React.Dispatch<React.SetStateAction<boolean>>;
  TicTacToeProps: TicTacToeOptionProps;
};

const isAllTheSameValue = (array: Turn[]) => {
  return array.every((v) => v === array[0]);
};

const gameSetHandler = (
  TicTacToeProps: TicTacToeOptionProps,
  setAllTheSame: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (TicTacToeProps.setFirstRow && TicTacToeProps.firstRow) {
    if (TicTacToeProps.firstRow.length < 2) {
      TicTacToeProps.setFirstRow([
        ...TicTacToeProps.firstRow,
        TicTacToeProps.turn,
      ]);
    } else {
      if (isAllTheSameValue(TicTacToeProps.firstRow)) {
        setAllTheSame(true);
      }
    }
  }

  if (TicTacToeProps.setSecondRow && TicTacToeProps.secondRow) {
    if (TicTacToeProps.secondRow.length < 3) {
      TicTacToeProps.setSecondRow([
        ...TicTacToeProps.secondRow,
        TicTacToeProps.turn,
      ]);
    } else {
      if (isAllTheSameValue(TicTacToeProps.secondRow)) {
        setAllTheSame(true);
      }
    }
  }

  if (TicTacToeProps.setThirdRow && TicTacToeProps.thirdRow) {
    if (TicTacToeProps.thirdRow.length < 3) {
      TicTacToeProps.setThirdRow([
        ...TicTacToeProps.thirdRow,
        TicTacToeProps.turn,
      ]);
    } else {
      if (isAllTheSameValue(TicTacToeProps.thirdRow)) {
        setAllTheSame(true);
      }
    }
  }

  if (TicTacToeProps.setFirstColumn && TicTacToeProps.firstColumn) {
    if (TicTacToeProps.firstColumn.length < 3) {
      TicTacToeProps.setFirstColumn([
        ...TicTacToeProps.firstColumn,
        TicTacToeProps.turn,
      ]);
    } else {
      if (isAllTheSameValue(TicTacToeProps.firstColumn)) {
        setAllTheSame(true);
      }
    }
  }

  if (TicTacToeProps.setSecondColumn && TicTacToeProps.secondColumn) {
    if (TicTacToeProps.secondColumn.length < 3) {
      TicTacToeProps.setSecondColumn([
        ...TicTacToeProps.secondColumn,
        TicTacToeProps.turn,
      ]);
    } else {
      if (isAllTheSameValue(TicTacToeProps.secondColumn)) {
        setAllTheSame(true);
      }
    }
  }

  if (TicTacToeProps.setThirdColumn && TicTacToeProps.thirdColumn) {
    if (TicTacToeProps.thirdColumn.length < 3) {
      TicTacToeProps.setThirdColumn([
        ...TicTacToeProps.thirdColumn,
        TicTacToeProps.turn,
      ]);
    } else {
      if (isAllTheSameValue(TicTacToeProps.thirdColumn)) {
        setAllTheSame(true);
      }
    }
  }

  if (TicTacToeProps.setFirstDiagonal && TicTacToeProps.firstDiagonal) {
    if (TicTacToeProps.firstDiagonal.length < 3) {
      TicTacToeProps.setFirstDiagonal([
        ...TicTacToeProps.firstDiagonal,
        TicTacToeProps.turn,
      ]);
    } else {
      if (isAllTheSameValue(TicTacToeProps.firstDiagonal)) {
        setAllTheSame(true);
      }
    }
  }

  if (TicTacToeProps.setSecondDiagonal && TicTacToeProps.secondDiagonal) {
    if (TicTacToeProps.secondDiagonal.length < 3) {
      TicTacToeProps.setSecondDiagonal([
        ...TicTacToeProps.secondDiagonal,
        TicTacToeProps.turn,
      ]);
    } else {
      if (isAllTheSameValue(TicTacToeProps.secondDiagonal)) {
        setAllTheSame(true);
      }
    }
  }
};

const clickHandler = ({
  choosenCharacter,
  setChoosenCharacter,
  TicTacToeProps,
  setAllTheSame,
}: ClickHandlerObjectParam) => {
  if (choosenCharacter === "") {
    if (TicTacToeProps.turn === "X") {
      setChoosenCharacter("X");
      TicTacToeProps.setTurn("O");
    } else {
      setChoosenCharacter("O");
      TicTacToeProps.setTurn("X");
    }
    gameSetHandler(TicTacToeProps, setAllTheSame);
  }
};

const TicTacToeOption: React.FC<TicTacToeOptionProps> = ({
  ...TicTacToeProps
}) => {
  const [choosenCharacter, setChoosenCharacter] = useState<Turn | "">("");
  const [allTheSame, setAllTheSame] = useState(false);
  const clickHandlerParams = {
    choosenCharacter,
    setChoosenCharacter,
    TicTacToeProps,
    setAllTheSame,
  };
  return (
    <TicTacToeOptionWrapper
      allTheSame={allTheSame}
      onClick={() => clickHandler(clickHandlerParams)}
    >
      <h2>{choosenCharacter}</h2>
    </TicTacToeOptionWrapper>
  );
};

const TicTacToeOptionWrapper = styled.div<{ allTheSame: boolean }>`
  cursor: pointer;
  border: 1px solid black;
  display: flex;
  align-items: center;
  height: 166px;

  ${({ allTheSame }) =>
    allTheSame
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

export default TicTacToeOption;
