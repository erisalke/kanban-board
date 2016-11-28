import {combineReducers} from 'redux';

const byId = (state = [], action) => {
 	switch (action.type) {
    case 'ADD_TASKLIST': {
      return [...state, action.data.id];
    }

    default:
      return state;
  }
}

const all = (state = {}, action) => {
 	switch (action.type) {
    case 'ADD_TASKLIST': {
      return {
        ...state,
        [action.data.id]: action.data
      }
    }
    default:
      return state;
  }
}

const isFetching = (state = false, action) => {
 	switch (action.type) {
    case 'REQUEST_TASK_LISTS': {
      return true;
    }
    case 'RECEIVE_TASK_LISTS': {
      return false;
    }

    default: return state;
  }
}

export default combineReducers({all, byId, isFetching});
