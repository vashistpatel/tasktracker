//we are not use class based components, but only 
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
        id:1,
        text:'Doctors appointment',
        day:'Feb 5th at 2:30pm',
        reminder:'true',
    },
    {
        id:2,
        text:'Meeting at school',
        day:'Feb 6th at 2:30pm',
        reminder:'true',
    },
    {
        id:3,
        text:'Food shopping',
        day:'Feb 5th at 2:30pm',
        reminder:'flase',
    }
])

// Add task
const addTask = (task) => {
  // console.log(task)
  const id = Math.floor(Math.random()*10000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle reminder
const toggleReminder = (id) => {
  // console.log(id)
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
}

  return (
    // this is JSX a bit different
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask}/>) : ('No Tasks to show')}
    </div>
    
  );
}

export default App;
