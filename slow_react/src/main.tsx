import React from 'react'
import ReactDOM from 'react-dom/client'
import ErrorPage from './error_page'

import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom'

import Header from './components/Header.js'
import Home from './components/Home.js'
import Blog from './components/Blog.js'
import Projects from './components/Projects.js'
import Games from './components/Games.js'
import Cartman from './components/Cartman.js'

import './main.css'

const router = createBrowserRouter([
    {
        element: <Header />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/blog',
                element: <Blog />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/projects',
                element: <Projects />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/games',
                element: <Games />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/cartman',
                element: <Cartman />,
                errorElement: <ErrorPage />,
            },
        ]
    },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
