import { createBrowserRouter } from "react-router-dom";
import App from "./app.tsx";
import MainPage from "./pages/main-page.tsx";
import BookDetails from "./pages/details-page.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "book/:bookId",
        element: <BookDetails />,
        loader: async ({ params }) => {
          console.log(params);
        },
      },
    ],
  },
]);
