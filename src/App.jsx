import { createContext,useEffect,useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Home from './assets/pages/home/Home'
import Header from './assets/components/header/Header'
import Footer from './assets/components/footer/Footer'
import Login from './assets/pages/login/Login'
import Register from './assets/pages/register/Register'

export const UserContext = createContext()

function App() {
  const [user,setUser]=useState(null)

  const Layout = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
      ]
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },
  ])

  return (
    <div className='app'>
      <UserContext.Provider value={[user,setUser]}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </div>
  )
}

export default App
