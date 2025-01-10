import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Layout from "./Layout";
import Github, { GithubInfoLoader } from "./components/Github";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/Home", element: <Home /> },
            { path: "/About", element: <About /> },
            { path: "/Contact", element: <Contact /> },
            { path: "/Github", element: <Github />, loader: GithubInfoLoader },
            { path: "*", element: <NotFound /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
