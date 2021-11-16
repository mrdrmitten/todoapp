import React, { useState } from "react";
import {v4 as uuid} from "uuid";

function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });
    
    function handleTaskInputChange(event) {
        setTodo({ ...todo, task: event.target.value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuid() });
            // reset task input
            setTodo({ ...todo, task: "" });
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="task"
                type="text"
                value={todo.task}
                onChange={handleTaskInputChange}
            />
            <button type="submit">submit</button>
        </form>
    )
}

export default TodoForm;