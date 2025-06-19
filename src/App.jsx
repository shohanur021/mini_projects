import Home from "./Components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Age_calculator from "./Components/Age_calculator/Age_calculator";
import NotFound from "./Components/NotFound/NotFound";

function App() {

    const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/ff",
      element: <Age_calculator />,
    },
    {
      path: "*",
      element: <NotFound />,
    }
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App;