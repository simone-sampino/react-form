import { useState } from 'react'

function App() {
  const articles = [
    'Smartphone',
    'Headphones',
    'Tablet',
    'TV',
    'PS5',
  ]

  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState(articles)

  function handleSubmit (e) {
    e.preventDefault()
    console.log(newTask);

    setTasks([...tasks, newTask])
  }

  return (
    <>

      <div className="container mt-5">
        <ul className='list-group'>
          {tasks.map((task, index) => {
            return (
              <li key={index} className='list-group-item d-flex justify-content-between'>{task}
                <div className='d-flex gap-3'>
                  <button className='btn btn-primary'><i className="bi bi-pencil-fill"></i></button>
                  <button className='btn btn-danger'><i className='bi bi-trash3-fill'></i></button>
                </div>
              </li>
            )
          })}
        </ul>
        
        <form onSubmit={handleSubmit}>
          <div className="d-flex gap-3 mt-4">
            <input className='form-control' placeholder='insert new task' type="text" value={newTask} onChange={event => setNewTask(event.target.value)} />
            <button type='submit' className='btn btn-success'>
              <i className='bi bi-floppy-fill'></i> Save
            </button>
          </div>
        </form>
      </div>

    </>
  )
}

export default App