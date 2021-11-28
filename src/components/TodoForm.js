import React, { useState } from "react";
import {v4 as uuid} from "uuid";
import { Button, Form,  } from "react-bootstrap";

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
        
        <Form className="row row-cols-lg-auto g-3 justify-content-center" onSubmit={handleSubmit}>
            <Form.Group className="col-12 ">
                <Form.Control
                    name="task"
                    type="text"
                    value={todo.task}
                    onChange={handleTaskInputChange}
                />
            </Form.Group>
            <div className="col-12">
                <Button variant="primary" type="submit">Submit</Button>
            </div>
        </Form>
          
    )
}

export default TodoForm;