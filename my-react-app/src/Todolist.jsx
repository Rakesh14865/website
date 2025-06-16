import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState(
    ['Learn React', 'Practice JavaScript']
  );
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks((prevState) => [...prevState, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (indexToDelete) => {
    setTasks((prevState) => prevState.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div id="todoListContainer">
      <h1 id="todoListHeader">My Todo List</h1>
      <ul id="todoList">
        {tasks.map((task, index) => (
          <li key={index}>
            {task} 
            <button onClick={() => deleteTask(index)} style={{ marginLeft: '10px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <input
        id="taskInput"
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button id="addTaskButton" onClick={addTask}>
        Add Task
      </button>
    </div>
  );
}

export default TodoList;
