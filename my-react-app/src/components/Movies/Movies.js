import React, { Component } from "react";
import MovieItem from "../MovieItem/MovieItem";
import "./Movies.css";
import { connect } from "react-redux";

class Movies extends Component {
  render() {
    return (
      <ul className="movies">
        {this.props.movies.map((movie) => (
          <li className="movies__item" key={movie.imdbID}>
            <MovieItem {...movie} />
          </li>
        ))}
      </ul>
    );
  }
}

export const mapStateToProps = (store) => {
  return { movies: store.movies };
};
export default connect(mapStateToProps, null)(Movies);
