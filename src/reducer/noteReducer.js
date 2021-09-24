import { types } from "../types";

export const noteReducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD:
      return [...state, action.payload];
    case types.DELETE:
      return state.filter((note) => note.id !== action.payload);
    case types.DELETE_ALL:
      return [];
    case types.UPDATE:
      return state.map((note) =>
        note.id === action.payload.id ? action.payload : note
      );
    default:
      return state;
  }
};
