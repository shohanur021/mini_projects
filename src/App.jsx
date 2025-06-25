import Home from "./Components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Age_calculator from "./Components/AgeCalculator/Age_calculator";
import NotFound from "./Components/NotFound/NotFound";
import Word from "./Components/Word/Word";
import Weather from "./Components/Weather/Weather";
import ColorPicker from "./Components/ColorPicker/ColorPicker";

function App() {

    const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/age_calculator",
      element: <Age_calculator />,
    },
    {
      path: "/word_counter",
      element: <Word />,
    },
    {
      path: "/weather_report",
      element: <Weather />,
    },
        {
      path: "/color_picker",
      element: <ColorPicker />,
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