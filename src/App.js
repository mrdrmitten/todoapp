import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './components/useDarkMode';
import { GlobalStyles } from './components/globalStyles';
import { lightTheme, darkTheme } from './components/Themes';
import Toggle from './components/Toggler';
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList"
import Container from "react-bootstrap/Container";


const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {
    const [todos, setTodos] = useState([]);
    const [theme, themeToggler, mountedComponent] = useDarkMode();

    const themeMode = theme === 'light' ? lightTheme : darkTheme;

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
    if(!mountedComponent) return <div/>
    return (
            <ThemeProvider theme={themeMode}>
                <Container>
                    <GlobalStyles />
                        <Toggle theme={theme} toggleTheme={themeToggler} />
                        <h1 className='mb-2 mt-5 text-center'>React Todo List</h1>
                        <TodoForm addTodo={addTodo} />
                        <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />  
                </Container>
            </ThemeProvider>
        );
    }

export default App;
