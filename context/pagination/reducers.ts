import { State } from "./types";
import { Action } from "./actions";
import { getLimitAndOffset } from "@/utils";

export function paginationReducer(state: State, action: Action) {
  const PAGE_SIZE = state.pagination.pageSize;
  const currentPage = state.pagination.currentPage;

  switch (action.type) {
    case "NEXT_PAGE": {
      const nextPage = currentPage + 1;
      const { limit, offset } = getLimitAndOffset(nextPage, PAGE_SIZE);
      return {
        loading: true,
        pagination: {
          ...state.pagination,
          currentPage: nextPage,
          limit,
          offset
        }
      };
    }

    case "SET_LOADING": {
      const { loading } = action.payload;
      return { ...state, loading };
    }

    default: {
      throw new Error("Unhandled action type");
    }
  }
}
