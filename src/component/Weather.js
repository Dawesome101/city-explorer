import React from "react";
import WeatherDay from './WeatherDay.js'
import Collapse from 'react-bootstrap/Collapse';
import '../css/Weather.css'

class Weather extends React.Component{

  render(){
    return(
      <div className='collapse-cnt'>
        <Collapse className='collapse' in={this.props.showWeather}>
          <div id="collapse-forcast">
            <h2>{this.props.forcast.data[0].city} Three Day Forcast:</h2>
            {
              this.props.forcast.data.map((v, i) => {
                return <WeatherDay key={i} weatherString={` ${v.valid_date}: Low of ${v.low_temp} and a high of ${v.high_temp} with ${v.description}`}/>
              })
            }
          </div>
        </Collapse>
      </div>
      
    );
  }
}

export default Weather