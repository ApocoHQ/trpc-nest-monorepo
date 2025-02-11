import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

import "./App.css";
import { trpc } from "./trpc";
import { httpBatchLink } from "@trpc/client";
import { Root } from "./Root";

function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "/trpc",
          headers: () => {
            return { Authorization: "Bearer Foobar" };
          },
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Root />
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App;
