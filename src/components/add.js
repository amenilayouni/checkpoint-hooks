import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import { Rating } from "@mui/material";
import MovieCard from "./MovieCard";
const Add = (AddMovies) => {
    const [show, setShow] = useState(false);
    const [newMovie, setNewMovie] = useState({
        title:'',
        description:'',
        posterUrl:'',
        rating:0,
    })
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const handlechange =(e)=> {
        setNewMovie({... newMovie, [e.target.name]: e.target.value})
    } 
    const handelSave = () =>{
        AddMovies=(newMovie)
    }
    


    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Add a movie
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>add movie</Modal.Title>
                </Modal.Header>
                <Modal.Body> <Form>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Title</Form.Label>
                        <Form.Control onChange={handlechange} name="title" type="text" placeholder="Enter title" />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>description</Form.Label>
                        <Form.Control onChange={handlechange}  name="description" type="text" placeholder="Enter description" />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Poster Url img</Form.Label>
                        <Form.Control onChange={handlechange}  name="posterUrl" type="text" placeholder="Enter poster url" />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>rating</Form.Label>
                        <Form.Control name= "rating" type="text" placeholder="rating" />

                    </Form.Group>
                    <Rating
                        name="simple-controlled"
                        value={newMovie.rating}
                        max={10}
                        // onChange={(event, newValue) => {
                        //     setValue(newValue);
                        // }}
                    />
                </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handelSave}>
                        Add Movies
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}
export default Add