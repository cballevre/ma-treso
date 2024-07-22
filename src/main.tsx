import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Home } from "./pages/Home";
import { Plans } from "./pages/plans/Plans";
import { CreatePlan } from "./pages/plans/CreatePlan";

export function Main() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/plans/:id",
      element: <Plans />,
    },
    {
      path: "/plans/new",
      element: <CreatePlan />
    }
  ]);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
