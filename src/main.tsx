import React, { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

export function Main() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
  ]);

  return (
      <RouterProvider router={router} />
  );
}
