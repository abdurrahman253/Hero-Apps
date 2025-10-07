
import AppDetails from "../Pages/AppDetails"
import Apps from "../Pages/Apps"
import Home from "../Pages/Home"
import ErrorPage from "../Pages/ErrorPage"
import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../Layouts/MainLayout"
import Installation from "../Pages/Installation"


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/apps',
        element: <Apps />,
      },
      {
        path: '/installation',
        element: <Installation />,
      },
      {
        path: '/App/:id',
        element: <AppDetails />,
      },
    ],
  },
  
])

export default router