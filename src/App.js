import React from "react";
import axios from 'axios';
import ShowMap from './component/ShowMap.js'
import './css/App.css'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      city: '',
      cityData: [],

      displayName: 'Seattle',
      cityLat: 0,
      cityLong: 0,
      displayMap: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=47.6038321,-122.3300624&size=600x600&zoom=14`,

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

    if(this.state.city === ''){
      this.setState({city: 'Seattle'});
    }

    let myURL = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`

    let cityData = await axios.get(myURL);

    let cityMap = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${cityData.data[0].lat},${cityData.data[0].lon}&size=600x600&zoom=14&markers=size:small|color:red|${cityData.data[0].lat},${cityData.data[0].lon}`

    this.setState({
      displayName: cityData.data[0].display_name,
      cityLat: cityData.data[0].lat,
      cityLong: cityData.data[0].lon,
      displayMap: cityMap
    })
  };


  render(){
    return (
      <div className="app">
        <form onSubmit={this.getCityData}>
          <label>Choose a City:
            <input type="text" onInput={this.handleInput} />
          </label>
          <button type="submit">Explore!</button>
        </form>
        <ShowMap displayName={this.state.displayName} cityLat={this.state.cityLat} cityLong={this.state.cityLong} cityMap={this.state.displayMap}/>
      </div>
    );
  }
}

export default App;
