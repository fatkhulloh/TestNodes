import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

const API = "http://localhost:3001/api/tasks"

function TaskEdit() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "pending",
    due_date: "",
  })

  // 🔹 AMBIL DATA DARI DATABASE
  useEffect(() => {
    axios.get(`${API}/${id}`)
      .then(res => {
        const data = res.data

        setForm({
          title: data.title,
          description: data.description,
          status: data.status,
          // WAJIB format YYYY-MM-DD
          due_date: data.due_date?.substring(0, 10)
        })

        setLoading(false)
      })
      .catch(() => {
        alert("Gagal mengambil data")
        navigate("/")
      })
  }, [id, navigate])

  // 🔹 SUBMIT UPDATE KE DATABASE
  const submit = async (e) => {
    e.preventDefault()

    try {
      await axios.put(`${API}/${id}`, form)
      navigate("/")
    } catch (err) {
      alert("Gagal update data")
    }
  }

  if (loading) return <div className="container">Loading...</div>

  return (
    <div className="container">
      <div className="form-card">
        <h2>Edit Task #{id}</h2>

        <form onSubmit={submit}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              value={form.title}
              onChange={e =>
                setForm({ ...form, title: e.target.value })
              }
              required
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              value={form.description}
              onChange={e =>
                setForm({ ...form, description: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label>Status</label>
            <select
              value={form.status}
              onChange={e =>
                setForm({ ...form, status: e.target.value })
              }
            >
              <option value="pending">Pending</option>
              <option value="in_progress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </div>

          <div className="form-group">
            <label>Due Date</label>
            <input
              type="date"
              value={form.due_date}
              onChange={e =>
                setForm({ ...form, due_date: e.target.value })
              }
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-edit">
              Update
            </button>

            <button
              type="button"
              className="btn btn-delete "
              onClick={() => navigate("/")}
            >
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TaskEdit
