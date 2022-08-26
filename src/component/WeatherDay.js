import React from "react";
import Alert from 'react-bootstrap/Alert';

class WeatherDay extends React.Component{

  render(){
    return(
      <div>
      {[
        'info',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          {this.props.weatherString}
        </Alert>
      ))}
    </div>
    )
  }
}

export default WeatherDay;