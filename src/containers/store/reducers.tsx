import * as actionTypes from './actions';

const initialState = {
  posts: []
};

const reducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  if (action.type === actionTypes.FETCH_POSTS) {
    return {
      ...state,
      posts: action.payload
    };
  }
  return state;
};

export default reducer;
