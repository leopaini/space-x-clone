import { QueryResponse } from "@/types";
import { GET_LAUNCHES } from "@/query/schema";
import { usePaginationContext } from "@/context/pagination";
import { useSuspenseQuery } from "@apollo/client";
import { useEffect, useRef, useTransition } from "react";

export default function usePagination() {
  const [state, dispatch] = usePaginationContext();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPending, startTransition] = useTransition();
  const { data, error } = useSuspenseQuery<QueryResponse>(GET_LAUNCHES, {
    variables: {
      limit: state.pagination.limit,
      offset: state.pagination.offset
    }
  });

  useEffect(() => {
    if (data && data.launches.length > 0) {
      dispatch({ type: "SET_LOADING", payload: { loading: false } });
    }
    scrollRef?.current?.lastElementChild?.scrollIntoView({
      behavior: "smooth"
    });
  }, [data]);

  const handleLoadMore = () => {
    startTransition(() => {
      dispatch({ type: "NEXT_PAGE" });
    });
  };

  return {
    error,
    data: data,
    scrollRef,
    handleLoadMore,
    loading: isPending
  };
}
