let todos = [
  {
    id: 1,
    title: "Belajar Node.js",
    description: "Membuat REST API",
    status: "pending",
    due_date: "2026-02-01"
  },
  {
    id: 2,
    title: "Belajar Vite",
    description: "Setup project frontend",
    status: "done",
    due_date: "2026-02-05"
  }
];

const tableBody = document.getElementById("todoTable");

function renderTable() {
  tableBody.innerHTML = "";
  todos.forEach(todo => {
    tableBody.innerHTML += `
      <tr>
        <td>${todo.id}</td>
        <td>${todo.title}</td>
        <td>${todo.description}</td>
        <td>${todo.status}</td>
        <td>${todo.due_date}</td>
        <td>
          <button class="edit" onclick="editTodo(${todo.id})">Edit</button>
          <button class="delete" onclick="deleteTodo(${todo.id})">Hapus</button>
        </td>
      </tr>
    `;
  });
}

function editTodo(id) {
  const todo = todos.find(t => t.id === id);
  const newTitle = prompt("Edit Title:", todo.title);
  const newDesc = prompt("Edit Description:", todo.description);
  const newStatus = prompt("Edit Status:", todo.status);
  const newDue = prompt("Edit Due Date:", todo.due_date);

  if (newTitle && newDesc && newStatus && newDue) {
    todo.title = newTitle;
    todo.description = newDesc;
    todo.status = newStatus;
    todo.due_date = newDue;
    renderTable();
  }
}

function deleteTodo(id) {
  if (confirm("Yakin ingin menghapus data ini?")) {
    todos = todos.filter(t => t.id !== id);
    renderTable();
  }
}

renderTable();
