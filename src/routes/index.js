import { createBrowserRouter } from "react-router-dom";
import reportWebVitals from "../reportWebVitals";

import { Main } from "../pages/main-page";
import { BodyComp } from "../components/body-comp";
import { ResultsPage } from "../pages/results-page";
import { ProductsPage } from "../pages/products-page";
import { CategoryPage } from "../pages/category-page";
import { ProductPage } from "../pages/product-page";

export const indexRouter = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <BodyComp />,
      },
      {
        path: "/search/:query",
        element: <ResultsPage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/category/:cat",
        element: <CategoryPage />,
      },
      {
        path: "/product/:name",
        element: <ProductPage />,
      },
    ],
  },
]);

reportWebVitals();
