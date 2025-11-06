"use client";

import { useState } from "react";
import {
  QueryClientProvider,
  QueryClient,
  QueryCache,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function Providers({ children }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: { queries: { staleTime: 3 * 60 * 1000 } },
        queryCache: new QueryCache({
          onError: (error, query) => {
            if (query.meta.source === "todos") {
              alert(`Something went wrong in TodoList: ${error.message}`);
            }
          },
        }),
      }),
  );
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </QueryClientProvider>
  );
}
