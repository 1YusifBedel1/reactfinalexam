import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainContext from './context/context'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import axios from 'axios'
import ROUTES from './routes/route'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

function App() {
  const [data, setData] = useState([])
  const router=createBrowserRouter(ROUTES)
  useEffect(()=>{
    axios.get("http://localhost:5000/products").then(res=>{
      console.log(res.data)
      setData([...res.data])
    })
  },[])
  const contextData={
    data,setData
  }

  return (
    <>
    <MainContext.Provider value={contextData}>
      <RouterProvider router={router} />
    </MainContext.Provider>
    </>
  )
}

export default App
