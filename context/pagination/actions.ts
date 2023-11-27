export type Action =
  | { type: "NEXT_PAGE" }
  | { type: "SET_LOADING"; payload: { loading: boolean } };
