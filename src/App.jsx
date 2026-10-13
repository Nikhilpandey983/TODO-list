import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RiTodoFill } from "react-icons/ri";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [todos, setTodos] = useState([])
  const [activityLog, setActivityLog] = useState([])
  const [editingId, setEditingId] = useState(null)
  const [showFinished, setShowFinished] = useState(false)

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos")
    const savedActivity = localStorage.getItem("activityLog")

    if (savedTodos) setTodos(JSON.parse(savedTodos))
    if (savedActivity) setActivityLog(JSON.parse(savedActivity))
  }, [])

  const saveTodos = (nextTodos) => {
    localStorage.setItem("todos", JSON.stringify(nextTodos))
    setTodos(nextTodos)
  }

  const recordAction = (action, task, date) => {
    const nextActivity = [
      { id: uuidv4(), action, task, date, timestamp: new Date().toISOString() },
      ...activityLog,
    ]
    localStorage.setItem("activityLog", JSON.stringify(nextActivity))
    setActivityLog(nextActivity)
  }

  const resetForm = () => {
    setTodo("")
    setDueDate("")
    setEditingId(null)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const task = todo.trim()

    if (task.length <= 3 || !dueDate) return

    if (editingId) {
      const existingTodo = todos.find((item) => item.id === editingId)
      if (!existingTodo) return

      const nextTodos = todos.map((item) =>
        item.id === editingId ? { ...item, todo: task, dueDate } : item
      )
      saveTodos(nextTodos)
      recordAction("Updated", task, dueDate)
    } else {
      const newTodo = { id: uuidv4(), todo: task, dueDate, isCompleted: false }
      saveTodos([...todos, newTodo])
      recordAction("Added", task, dueDate)
    }

    resetForm()
  }

  const handleEdit = (item) => {
    setTodo(item.todo)
    setDueDate(item.dueDate || "")
    setEditingId(item.id)
  }

  const handleDelete = (item) => {
    saveTodos(todos.filter((todoItem) => todoItem.id !== item.id))
    recordAction("Deleted", item.todo, item.dueDate || "")
    if (editingId === item.id) resetForm()
  }

  const handleCheckbox = (item) => {
    const isCompleted = !item.isCompleted
    const nextTodos = todos.map((todoItem) =>
      todoItem.id === item.id ? { ...todoItem, isCompleted } : todoItem
    )
    saveTodos(nextTodos)
    recordAction(isCompleted ? "Completed" : "Reopened", item.todo, item.dueDate || "")
  }

  return (
    <>
      <Navbar />
      <main className="mx-3 md:container md:mx-auto my-5 rounded-xl bg-violet-300 p-5 min-h-[80vh] w-3/4 md:w-1/2">
        <h1 className='text-3xl font-bold text-center'>iTask - Manage Your Todos at One place...</h1>
        <form onSubmit={handleSubmit} className="addtodo my-5 flex flex-col gap-2">
          <h2 className='flex items-center gap-2 text-2xl font-bold'><RiTodoFill /> {editingId ? "Edit a Todo" : "Add a Todo"}</h2>
          <label className="font-semibold" htmlFor="todo">Todo</label>
          <input
            id="todo"
            className='w-full rounded-lg px-5 py-2'
            onChange={(event) => setTodo(event.target.value)}
            value={todo}
            type="text"
            required
            minLength={4}
          />
          <label className="font-semibold" htmlFor="dueDate">Date</label>
          <input
            id="dueDate"
            className='w-full rounded-lg px-5 py-2'
            onChange={(event) => setDueDate(event.target.value)}
            value={dueDate}
            type="date"
            required
          />
          <div className="flex gap-2">
            <button
              type="submit"
              disabled={todo.trim().length <= 3 || !dueDate}
              className='bg-violet-800 hover:bg-violet-950 disabled:bg-violet-700 px-5 py-2 text-sm font-bold text-white rounded-md'
            >
              {editingId ? "Update" : "Save"}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                className='bg-gray-600 hover:bg-gray-700 px-5 py-2 text-sm font-bold text-white rounded-md'
              >
                Cancel
              </button>
            )}
          </div>
        </form>
        <input
          className='my-4'
          id='showFinished'
          onChange={() => setShowFinished(!showFinished)}
          type="checkbox"
          checked={showFinished}
        />
        <label className='mx-2' htmlFor="showFinished">Show Finished</label>
        <hr className='h-1 m-1 p-1/2 bg-black' />
        <h2 className='text-lg font-bold'>Your Todos</h2>
        <div className="todos">
          {todos.length === 0 && <p className='text-gray-900'>No todos yet.</p>}
          {todos.map((item) => (
            (showFinished || !item.isCompleted) && (
              <div key={item.id} className="todo flex justify-between items-center bg-violet-200 p-3 rounded-md my-2">
                <div className='flex gap-2 w-full items-center'>
                  <input
                    aria-label={`Mark ${item.todo} as ${item.isCompleted ? "incomplete" : "complete"}`}
                    onChange={() => handleCheckbox(item)}
                    type="checkbox"
                    checked={item.isCompleted}
                  />
                  <div className={item.isCompleted ? "line-through" : ""}>
                    <p>{item.todo}</p>
                    {item.dueDate && <p className="text-sm">Date: {item.dueDate}</p>}
                  </div>
                </div>
                <div className="buttons flex h-full">
                  <button
                    type="button"
                    aria-label={`Edit ${item.todo}`}
                    onClick={() => handleEdit(item)}
                    className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'
                  >
                    <FaEdit />
                  </button>
                  <button
                    type="button"
                    aria-label={`Delete ${item.todo}`}
                    onClick={() => handleDelete(item)}
                    className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
            )
          ))}
        </div>
        <hr className='h-1 m-1 p-1/2 bg-black' />
        <section aria-labelledby="activity-heading" className="mt-5">
          <h2 id="activity-heading" className='text-lg font-bold'>Activity History</h2>
          {activityLog.length === 0 ? (
            <p className='text-gray-900'>No activity recorded yet.</p>
          ) : (
            <ol className="mt-2 space-y-2">
              {activityLog.map((entry) => (
                <li key={entry.id} className="rounded-md bg-violet-200 p-3">
                  <p><span className="font-semibold">{entry.action}:</span> {entry.task}</p>
                  <p className="text-sm">
                    {entry.date && `Todo date: ${entry.date} · `}
                    {new Date(entry.timestamp).toLocaleString()}
                  </p>
                </li>
              ))}
            </ol>
          )}
        </section>
      </main>
    </>
  )
}

export default App
