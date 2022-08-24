import React from "react";
import axios from 'axios';
import ShowMap from './component/ShowMap.js'
import Error from './component/Error.js'
import Weather from './component/Weather.js'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      city: '',
      cityData: [],
      forcast: [],

      displayName: 'Seattle',
      cityLat: 47.6038321,
      cityLong: -122.3300624,
      displayMap: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=47.6038321,-122.3300624&size=600x600&zoom=14`,

      showWeather: false,

      error: false,
      errorMessage: ''
    }
  };

  handleInput = (e) => {
    e.preventDefault();

    this.setState({city: e.target.value,
    });
  };

  getCityData = async (e) => {
    e.preventDefault();

    try {
      if(this.state.city === ''){
        this.setState({city: 'Seattle'});
      }
  
      let cityURL = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`
      let cityData = await axios.get(cityURL);
      let cityMap = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${cityData.data[0].lat},${cityData.data[0].lon}&size=600x600&zoom=14&markers=size:small|color:red|${cityData.data[0].lat},${cityData.data[0].lon}`
  
      let weatherURL = `${process.env.REACT_APP_SERVER}/weather?city=${this.state.city}`
      let weatherData = await axios.get(weatherURL);
        
      
      if(typeof(weatherData.data) === 'string'){
        this.setState({
          error: true,
          errorMessage: `${weatherData.data}`
        })
        this.handleShowWeather(false);
      } else {
        this.handleShowWeather(true)
      }

      this.setState({
        displayName: cityData.data[0].display_name,
        cityLat: cityData.data[0].lat,
        cityLong: cityData.data[0].lon,
        displayMap: cityMap,
        forcast: weatherData
      })

    } catch(error){
      this.setState({
        error: true,
        errorMessage: `${error.message}`
      })
    };
  };

  handleClose = () => {
    this.setState({error: false});
  };

  handleShowWeather = (openWeather) => {
    this.setState({showWeather: openWeather});
  };

  render(){
    return (
      <div className="app">
        <Error error={this.state.error} errorMessage={this.state.errorMessage} handleClose={this.handleClose}/>
        <div className="form-cnt">
          <Form className='app-form' onSubmit={this.getCityData}>
            <Form.Group className="mb-3" controlId="basicInput">
              <Form.Label className="text-center">Find a City</Form.Label>
              <Form.Control type="text" placeholder="Enter City Name" onInput={this.handleInput}/>
            </Form.Group>
            <Button variant="info" type="submit">
              Explore!
            </Button>
          </Form>
        </div>
        <ShowMap displayName={this.state.displayName} cityLat={this.state.cityLat} cityLong={this.state.cityLong} cityMap={this.state.displayMap}/>
        <div>
          {
            this.state.showWeather ? <Weather forcast={this.state.forcast} showWeather={this.state.showWeather} handleShowWeather={this.handleShowWeather}/> : null
          };
        </div>
      </div>
    );
  }
}

export default App;
