import { useState } from 'react'

import '../style.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import TaskList from './pages/TaskList'
import TaskCreate from './pages/TaskCreate'
// import TaskDelete from './pages/TaskDelete'
import TaskEdit from './pages/TaskEdit'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/create" element={<TaskCreate />} />
        <Route path="/edit/:id" element={<TaskEdit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
