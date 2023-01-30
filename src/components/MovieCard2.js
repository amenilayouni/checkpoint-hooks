import { Rating } from "@mui/material";
import React from "react";
import { Card } from "react-bootstrap";

const MovieCard2 = ({dataMovie})=> {
    return(
        <div>
        <Card style={{width:'18rem'}}  >
      <Card.Img style={{width:'15rem'}} variant="top" src={dataMovie.posterUrl} />
      <Card.Body>
        <Card.Title >{dataMovie.title}</Card.Title>
        <Card.Text > {dataMovie.description}</Card.Text>
        
      </Card.Body>
      <Rating name="read-only" value={dataMovie.rating} readOnly max = {8} />

    </Card>
    </div>
    )
   
}
export default MovieCard2