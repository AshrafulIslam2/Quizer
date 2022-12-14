import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blogs from "./Components/Blogs/Blogs";
import Home from "./Components/Home/Home";
import QuizPerCatagory from "./Components/QuizEachCatagory/QuizPerCatagory";
import Statistics from "./Components/Statistics/Statistics";
import Main from "./Layouts/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: async () =>
            fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Home></Home>,
        },
        { path: "/blogs", element: <Blogs></Blogs> },
        {
          path: "/statistics",
          loader: async () =>
            fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Statistics></Statistics>,
        },
        {
          path: "home/:quizID",
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.quizID}`
            );
          },
          element: <QuizPerCatagory></QuizPerCatagory>,
        },
      ],
    },
    {
      path: "*",
      element: (
        <div className="text-8xl text-center font-extrabold text-red-600 mt-52">
          Erorr 404
        </div>
      ),
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
