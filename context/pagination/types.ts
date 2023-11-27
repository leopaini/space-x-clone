import { Launch } from "@/types";
import { Action } from "./actions";

export type Dispatch = (action: Action) => void;
export type State = {
  loading: boolean;
  pagination: {
    limit: number;
    offset: number;
    pageSize: number;
    currentPage: number;
  };
};
export type PaginationProviderProps = { children: React.ReactNode };
