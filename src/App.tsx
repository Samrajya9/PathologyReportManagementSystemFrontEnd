import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router";
import { routes } from "./routes";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 30 * 1000,
    },
  },
});
const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Toaster position="top-right" reverseOrder={false} />
        <Suspense fallback={<div>Loading route...</div>}>
          <RouterProvider router={router} />
        </Suspense>
      </QueryClientProvider>
    </>
  );
}

export default App;
