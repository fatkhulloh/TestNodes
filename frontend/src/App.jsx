import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"

// import List from "./pages/List"
// import Create from "./pages/TaskCreate"
// import Edit from "./pages/TaskEdit"
// import List from './pages/TaskList'
import TaskList from './pages/TaskList'
import TaskCreate from './pages/TaskCreate'
import TaskDelete from './pages/TaskDelete'
import TaskEdit from './pages/TaskEdit'
function App() {
  const [count, setCount] = useState(0)

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
