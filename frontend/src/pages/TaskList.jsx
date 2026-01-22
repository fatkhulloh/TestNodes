import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const API = 'http://localhost:3001/api/tasks'

export default function TaskList() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    axios.get(API).then(res => setTasks(res.data))
  }, [])

  return (
    <div className="container">
      <div className="header">
        <h2>Task List</h2>
        <Link to="/create" className="btn btn-add">+ Tambah1</Link>
      </div>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Due</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(t => (
            <tr key={t.id}>
              <td>{t.title}</td>
              <td>
                <span className={`status ${t.status}`}>{t.status}</span>
              </td>
              <td>{t.due_date}</td>
              <td>
                <Link to={`/edit/${t.id}`} className="btn btn-edit">Edit</Link>
                <Link to={`/delete/${t.id}`} className="btn btn-delete">Hapus</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
