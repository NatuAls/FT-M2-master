import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

    componentDidMount(){
        //CON DESTRUCTURING:
        const { match: { params: { id }}} = this.props;
        //SIN DESTRUCTURING:
        //const movieId = this.props.match.params.id;
        this.props.getMovieDetail(id);
    }

    render() {
        return (
            <div className="movie-detail">
                <p>{this.props.movie.Title}</p>
                <img src={this.props.movie.Poster} alt="Poster"></img> 
                <p>{this.props.movie.Year}</p>
                <p>{this.props.movie.Rated}</p>  
                <p>{this.props.movie.Genre}</p> 
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        movie: state.movieDetail
    }
}

function mapDispatchToProps(dispatch){
    return{
        getMovieDetail: id => dispatch(getMovieDetail(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);