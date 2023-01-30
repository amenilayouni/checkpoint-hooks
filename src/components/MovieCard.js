import React from "react";
import { Row,Col,Card } from "react-bootstrap";
import {Rating} from "@mui/material"

const MovieCard = ({dataMovie}) => {
    return(
        <div>
            <Row style={{width:'18rem', height:' 370px', display: 'grid', gridTemplateColumns:'auto auto audo'}}>
      {dataMovie.map((movie) => (
        <Col>
          <Card  style={{width:'18rem', height:' 370px'}}>
            <Card.Img  variant="top" src={movie.posterUrl} />
            <Card.Body>
              <Card.Title>movie.title</Card.Title>
              <Card.Text>
               {movie.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
        </div>
    )
}
export default MovieCard