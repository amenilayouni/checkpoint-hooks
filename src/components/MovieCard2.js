import { Rating } from "@mui/material";
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

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
      <Link to={`/details/${dataMovie.id}`}>show more details</Link>

    </Card>
    </div>
    )
   
}
export default MovieCard2