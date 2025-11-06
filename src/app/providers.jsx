"use client";

import QueryProvider from "@/providers/QueryProvider";

export default function Providers({ children }) {
  return <QueryProvider>{children}</QueryProvider>;
}
