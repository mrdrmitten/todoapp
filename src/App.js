import React, { useEffect, useState } from 'react';
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList"
import Container from "react-bootstrap/Container";


const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storageTodos) {
           setTodos(storageTodos); 
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    function addTodo(todo) {
        setTodos([todo, ...todos]);
    }

    function toggleComplete(id) {
        setTodos(
            todos.map(todo => {
               if (todo.id === id) {
                   return {
                       ...todo,
                       completed: !todo.completed
                    };
               } 
               return todo;
            })
        );
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return (
            <Container>
                    <h1 className='mb-5 mt-5 text-center'>React Todo List</h1>
                    <p className='text-muted text-center'>Please enter your Todos Below</p>
                    <TodoForm addTodo={addTodo} />
                    <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
                
            </Container>
        );
    }

export default App;
