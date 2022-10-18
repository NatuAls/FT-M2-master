import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { removeMovieFavorite } from "../../actions";
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {this.props.movies && this.props.movies.map(e => {
            return <li key={e.id}>
              <Link to={`/movie/${e.id}`}>
                {e.title}
              </Link>
              <button onClick={()=>this.props.removeMovieFavorite(e.id)}>X</button>
            </li>
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    movies: state.moviesFavourites
  }
}

function mapDispatchToProps(dispatch){
  return{
    removeMovieFavorite: movie => dispatch(removeMovieFavorite(movie))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
