"use client";

import { PAGE_SIZE } from "@/constants";
import { paginationReducer } from "./reducers";
import React, { createContext } from "react";
import { Dispatch, PaginationProviderProps, State } from "./types";

const PaginationStateContext = createContext<State | undefined>(undefined);
const PaginationDispatchContext = createContext<Dispatch | undefined>(
  undefined
);

const initialValue: State = {
  loading: false,
  pagination: {
    offset: 0,
    limit: PAGE_SIZE,
    currentPage: 0,
    pageSize: PAGE_SIZE
  }
};

function PaginationProvider({ children }: PaginationProviderProps) {
  const [state, dispatch] = React.useReducer(paginationReducer, initialValue);
  return (
    <PaginationDispatchContext.Provider value={dispatch}>
      <PaginationStateContext.Provider value={state}>
        {children}
      </PaginationStateContext.Provider>
    </PaginationDispatchContext.Provider>
  );
}

function usePaginationState() {
  const context = React.useContext(PaginationStateContext);
  if (context === undefined) {
    throw new Error(
      "usePaginationState must be used within a PaginationProvider"
    );
  }
  return context;
}

function usePaginationDispatch() {
  const context = React.useContext(PaginationDispatchContext);
  if (context === undefined) {
    throw new Error(
      "usePaginationDispatch must be used within a PaginationProvider"
    );
  }
  return context;
}

function usePaginationContext(): [State, Dispatch] {
  return [usePaginationState(), usePaginationDispatch()];
}

export {
  PaginationProvider,
  usePaginationState,
  usePaginationDispatch,
  usePaginationContext
};
