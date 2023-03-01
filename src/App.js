import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./pages/Root"
import HomePage from "./pages/Home"
import ErrorPage from "./pages/Error"
import ProjectsPage from "./pages/Projects"
import BlogPage from "./pages/Blog"
import TutorialsPage from "./pages/Tutorials"
import { Amplify, Storage } from "aws-amplify"
import awsconfig from "./aws-exports.js"
Amplify.configure(awsconfig)

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "blog",
        element: <BlogPage />,
      },
      {
        path: "tutorials",
        element: <TutorialsPage />,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
