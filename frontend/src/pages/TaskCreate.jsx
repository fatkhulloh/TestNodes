import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const API = 'http://localhost:3001/api/tasks'

export default function TaskCreate() {
  const nav = useNavigate()
  const submit = e => {
    e.preventDefault()
    const key = "1234567"
    const f = e.target

    axios.post(API, {
      title: f.title.value,
      description: f.description.value,
      status: f.status.value,
      due_date: f.due_date.value
    },  {
      headers: {
        "x-api-key": key
      }
    }).then(() => nav('/'))
  }

  return (
    <div className="container">
      <h2>Tambah Task</h2>
      <form onSubmit={submit}>
        <input name="title" placeholder="Title" required />
        <textarea name="description" placeholder="Description" />
        <select name="status">
          <option value="pending">Pending</option>
          <option value="in_progress">In Progress</option>
          <option value="done">Done</option>
        </select>
        <input type="date" name="due_date" required />
        <button className="btn btn-add">Simpan</button>
      </form>
    </div>
  )
}
