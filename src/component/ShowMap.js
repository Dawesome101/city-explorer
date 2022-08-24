import React from "react";
import Card from 'react-bootstrap/Card';
import '../css/ShowMap.css'

class ShowMap extends React.Component{

  render() {
    return(
      <div>
        <Card border='info'>
          <div className='card-img-cnt'>
            <Card.Img className='card-img' cvariant="top" src={this.props.cityMap} />
          </div>
          <Card.Body className='card-body'>
            <Card.Title className='card-title'>{this.props.displayName}</Card.Title>
            <Card.Text className='card-test'>
            Lat: {this.props.cityLat} Lon: {this.props.cityLong}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ShowMap;