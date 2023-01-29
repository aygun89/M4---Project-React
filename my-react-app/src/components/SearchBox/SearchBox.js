import React, { Component } from "react";
import "./SearchBox.css";
import { connect } from "react-redux";
class SearchBox extends Component {
  state = {
    searchLine: "",
  };
  searchLineChangeHandler = (e) => {
    this.setState({ searchLine: e.target.value });
  };
  searchBoxSubmitHandler = (e) => {
    e.preventDefault();
    fetch(`http://www.omdbapi.com/?s=${this.state.searchLine}&apikey=c14c10a9`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.Search);
        this.props.addMovies(data.Search);
      });
  };
  render() {
    const { searchLine } = this.state;

    return (
      <div className="search-box">
        <form
          className="search-box__form"
          onSubmit={this.searchBoxSubmitHandler}
        >
          <label className="search-box__form-label">
            Искать фильм по названию:
            <input
              value={searchLine}
              type="text"
              className="search-box__form-input"
              placeholder="Например, Shawshank Redemption"
              onChange={this.searchLineChangeHandler}
            />
          </label>
          <button
            type="submit"
            className="search-box__form-submit"
            disabled={!searchLine}
          >
            Искать
          </button>
        </form>
      </div>
    );
  }
}
export const mapStateToProps = (store) => {
  //   console.log(store);
};
export const mapDispatchToProps = (dispatch) => {
  return {
    addMovies: (movies) => dispatch({ type: "ADD_MOVIES", payload: movies }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
