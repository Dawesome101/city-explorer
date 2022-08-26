import React from "react";
import Movie from './Movie.js'

class Movies extends React.Component {

  render(){
    return(
      <Movie poster={this.props.poster} movie={this.props.movie}/>
    )
  }
}

export default Movies;