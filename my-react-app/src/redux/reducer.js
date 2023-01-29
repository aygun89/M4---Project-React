const initialState = {
  count: 0,
  movies: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MOVIES":
      //   console.log(state.movies);
      return { ...state, movies: action.payload };

    default:
      return state;
  }
};
export default reducer;
