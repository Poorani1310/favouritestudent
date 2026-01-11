import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContextProvider from './ContextProvider'
import StudentList from './components/StudentList'
import FvrtStud from './components/FvrtStud'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <div className='bg-gray-300 text-center pt-6 pb-6'>
          <h1 className='text-3xl font-medium'>ZAYB University</h1>
          <p className='mt-2'>1310, Dalhonega street, Atlanta, United States - 100001</p>
        </div>
      <ContextProvider>
        <Routes>
          <Route path='/' element={<StudentList/>} />
          <Route path='/fvrtstudlist' element={<FvrtStud/>} />          
        </Routes>
        </ContextProvider>
      </BrowserRouter>
      
    </>
  )
}

export default App
