import React, {useState} from 'react';

function ToDoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(event){
        setNewTask(event.target.value)
    }

    function addTask(){
        if(newTask.trim() !== ''){
            setTasks(t => [...t, newTask]);
            setNewTask('');
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_,i) => i !== index);
        setTasks(updatedTasks);

    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(
        <div className="to-do-list">
            <h1>To Do List</h1>
            
            <div className='input-field'>
                <input type="text" placeholder='Enter a task' value={newTask} onChange={handleInputChange} />
                <button onClick={addTask}>Add Task</button>
            </div>
        
            <ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <div className="task">
                            <span className='text'>{task}</span>
                            <div className="buttons">
                                <button 
                                className='task-button'
                                onClick={() => deleteTask(index)}
                                >❌</button>
                                <button 
                                className='task-button'
                                onClick={() => moveTaskUp(index)}
                                >👆</button>
                                <button 
                                className='task-button'
                                onClick={() => moveTaskDown(index)}
                                >👇</button>
                            </div>
                        </div>
                        <hr />
                    </li>
                )}
            </ol>
        </div>
    )
}

export default ToDoList;