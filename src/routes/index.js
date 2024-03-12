import { createBrowserRouter } from "react-router-dom";
import reportWebVitals from "../reportWebVitals";

import { App } from "../App";
import { MainPage } from "../pages/main-page";
import { ResultsPage } from "../pages/results-page";
import { ProductsPage } from "../pages/products-page";
import { CategoryPage } from "../pages/category-page";
import { ProductPage } from "../pages/product-page";
import { AboutUsPage } from "../pages/about-us-page";
import { ContactPage } from "../pages/contact-page";
import { MessageSentPage } from "../pages/message-sent-page";

export const indexRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <MainPage />,
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
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/message-sent",
        element: <MessageSentPage />,
      },
    ],
  },
]);

reportWebVitals();
