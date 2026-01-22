import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const API = 'http://localhost:3001/api/tasks'

export default function TaskDelete() {
  const { id } = useParams()
  const nav = useNavigate()
  
  const hapus = () => {
    const key = "1234567"
    axios.delete(`${API}/${id}`, {
      headers: {
        "x-api-key": key
      }
    }).then(() => nav('/'))
  }

  return (
    <div className="container">
      <h3>Yakin ingin menghapus task ini?</h3>
      <button className="btn btn-delete" onClick={hapus}>Ya, Hapus</button>
      <button className="btn btn-cancel" onClick={() => nav('/')}>Batal</button>
    </div>
  )
}
