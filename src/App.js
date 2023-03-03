import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./pages/Root"
import HomePage, { loader as resumeLoader } from "./pages/Home"
import ErrorPage from "./pages/Error"
import ProjectsPage from "./pages/Projects"
import BlogPage from "./pages/Blog"
import TutorialsPage from "./pages/Tutorials"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        id: "resume",
        loader: resumeLoader,
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
