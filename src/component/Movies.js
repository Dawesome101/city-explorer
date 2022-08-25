import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class Movies extends React.Component {

  render(){
    return(
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.movie.poster} />
        <Card.Body>
          <Card.Title>{this.props.movie.title}</Card.Title>
          <Card.Text>
            {this.props.movie.overview}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item className='lgi' style={{width: '18rem'}}>Release Date: {this.props.movie.release_date}</ListGroup.Item>
          <ListGroup.Item className='lgi' style={{width: '18rem'}}>Popularity: {this.props.movie.popularity}</ListGroup.Item>
          <ListGroup.Item className='lgi' style={{width: '18rem'}}>Vote Count: {this.props.movie.vote_count} Vote Average: {this.props.movie.vote_average}</ListGroup.Item>
        </ListGroup>
      </Card>
    )
  }
}

export default Movies;