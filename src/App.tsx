import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LandingPage } from "./landing/LandingPage";
import AddItem from "./todolist/AddItem";
import { IItem, DataContext } from "./todolist/DataContext";
import Items from "./todolist/Items";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "items",
    element: <Items />,
  },
  {
    path: "/add-item",
    element: <AddItem />,
  },
]);

export function App() {
  const [data, setData] = useState<IItem[]>([]);

  return (
      <DataContext.Provider
        value={{
          data: data,
          onAdd: (value) => setData([...data, value]),
          onRemove: (id) => setData(data.filter((d) => d.id !== id)),
        }}
      >
        <RouterProvider router={router} />
      </DataContext.Provider>
  );
}
