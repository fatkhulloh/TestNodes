import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

const API = "http://localhost:3001/api/tasks"

export default function TaskList() {
  const [tasks, setTasks] = useState([])
  const navigate = useNavigate()

  const loadData = async () => {
    const res = await axios.get(API)
    setTasks(res.data)
  }

  useEffect(() => {
    loadData()
  }, [])

  // HANDLE DELETE DI LIST
  const handleDelete = async (id) => {
    const ok = window.confirm("Yakin ingin menghapus task ini?")
    if (!ok) return

    try {
      await axios.delete(`${API}/${id}`)
      setTasks(tasks.filter(t => t.id !== id))
    } catch (err) {
      alert("Gagal menghapus data")
    }
  }

  return (
    <div className="container">
      <div className="header">
        <h2>Task List</h2>

        {/* ➕ TAMBAH DATA */}
        <Link to="/create" className="btn btn-add">
          + Tambah Data
        </Link>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Aksi</th>
          </tr>
        </thead>

        <tbody>
          {tasks.length === 0 && (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                Tidak ada data
              </td>
            </tr>
          )}

          {tasks.map(t => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td>{t.title}</td>
              <td>{t.description}</td>

              {/* STATUS BADGE */}
              <td>
                <span className={`badge ${t.status}`}>
                  {t.status}
                </span>
              </td>

              <td>{t.due_date}</td>

              {/* AKSI */}
              <td className="actions">
                <button
                  className="btn btn-edit"
                  onClick={() => navigate(`/edit/${t.id}`)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-delete"
                  onClick={() => handleDelete(t.id)}
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
