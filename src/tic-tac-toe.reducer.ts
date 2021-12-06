export const initialState: InitialStateProps = {
  firstRow: [],
  secondRow: [],
  thirdRow: [],
  firstColumn: [],
  secondColumn: [],
  thirdColumn: [],
  firstDiagonal: [],
  secondDiagonal: [],
};

export const reducer = (state: StateProps, action: ActionType): StateProps => {
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
