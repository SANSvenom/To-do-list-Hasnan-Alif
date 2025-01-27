// Ambil elemen DOM
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// Tambah task baru
addBtn.addEventListener("click", () => {
  const taskText = todoInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.className = "todo-item";
  li.innerHTML = `
    <span>${taskText}</span>
    <div>
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    </div>
  `;

  // Hapus task
  li.querySelector(".delete-btn").addEventListener("click", () => {
    todoList.removeChild(li);
  });

  // Edit task
  li.querySelector(".edit-btn").addEventListener("click", () => {
    const newText = prompt("Edit your task:", taskText);
    if (newText !== null && newText.trim() !== "") {
      li.querySelector("span").textContent = newText.trim();
    }
  });

  todoList.appendChild(li);
  todoInput.value = "";
});

// Tambah task dengan tombol Enter
todoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }
});
