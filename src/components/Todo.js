import React from "react";
import { Row, Col, Button, ListGroup, Form } from "react-bootstrap";

function Todo({ todo, toggleComplete, removeTodo }) {
    function handleCheckboxClick() {
        toggleComplete(todo.id);
    }

    function handleRemoveClick() {
        removeTodo(todo.id);
    }

    return (
        <div className="row mb-3 mt-3">
            <div>
                <Form>
                    <Row className="align-items-center">
                        <Col xs="auto" className="my-1">
                            <Form.Check onClick={handleCheckboxClick} />
                        </Col>
                        <Col xs="auto" className="my-1">
                            <ListGroup variant="flush">
                                <ListGroup.Item style={{ textDecoration: todo.completed ? "line-through" : null}}>{todo.task}</ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col xs="auto" className="my-1">
                            <Button className='btn btn-danger' size="sm" onClick={handleRemoveClick}>X</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    )
}

export default Todo;