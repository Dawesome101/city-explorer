import React from "react";
import Card from 'react-bootstrap/Card';
import '../css/ShowMap.css'

class ShowMap extends React.Component{

  render() {
    return(
      <div>
        <Card>
          <div className='card-img-cnt'>
            <Card.Img className='card-img' cvariant="top" src={this.props.cityMap} />
          </div>
          <Card.Body className='card-body'>
            <Card.Title className='card-title'>{this.props.displayName}</Card.Title>
            <h2>Lat:{this.props.cityLat} Lon:{this.props.cityLong}</h2>
            <Card.Text className='card-test'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      
    );
  }
}

export default ShowMap;