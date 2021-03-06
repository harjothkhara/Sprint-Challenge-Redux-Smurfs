/*
  Be sure to import in all of the action types from `../actions`
*/

import { GET_SMURFS, GET_SMURFS_SUCCESS, GET_SMURFS_FAILURE, ADD_SMURF, ADD_SMURF_SUCCESS, ADD_SMURF_FAILURE } from '../actions';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_SMURFS:
    return {
      ...state,
      fetchingSmurfs: true,
      error: null
    }
    case GET_SMURFS_SUCCESS:
    return {
      ...state,
      smurfs: action.payload,
      fetchingSmurfs: false
    }
    case GET_SMURFS_FAILURE:
    return {
      ...state,
      fetchingSmurfs: false,
      error: action.payload
    }
    case ADD_SMURF:
    return {
      ...state,
      addingSmurf: true,
      error: null
    }
    case ADD_SMURF_SUCCESS:
    return {
      ...state,
      smurfs: action.payload,
      addingSmurf: false
    }
    case ADD_SMURF_FAILURE:
    return {
      ...state,
      addingSmurf: false,
      error: action.payload
    }
    default:
    return state;
  }
};

export default reducer;
