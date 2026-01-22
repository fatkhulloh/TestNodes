import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

function TaskEdit() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    title: "",
    date: "",
    status: "pending",
  })

  useEffect(() => {
    // simulasi fetch dari backend
    const dataFromDb = {
      title: "Task A",
      date: "2026-01-15", // HARUS format ini
      status: "in_progress",
    }

    setForm(dataFromDb)
  }, [id])

  const submit = (e) => {
    e.preventDefault()
    // kirim form ke backend
    navigate("/")
  }

  return (
    <form onSubmit={submit}>
      <h2>Edit Data #{id}</h2>

      <input
        type="text"
        value={form.title}
        onChange={e => setForm({ ...form, title: e.target.value })}
      />

      <input
        type="date"
        value={form.date}
        onChange={e => setForm({ ...form, date: e.target.value })}
      />

      <select
        value={form.status}
        onChange={e => setForm({ ...form, status: e.target.value })}
      >
        <option value="pending">Pending</option>
        <option value="in_progress">In Progress</option>
        <option value="done">Done</option>
      </select>

      <button>Update</button>
    </form>
  )
}

export default TaskEdit
