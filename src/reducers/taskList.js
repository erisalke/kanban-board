import {combineReducers} from 'redux';
import * as a from '../actions/taskListActions';

const taskList = (state = initState(), action) => {
  switch (action.type) {
    case a.RECEIVE_TASK_LISTS: {
      let result = Object.assign({}, state);
      action.data.forEach(data => {
        result.allIds = allIds(result.allIds, { type: "ADD_TASK_LIST", data });
        result.byId = byId(result.byId, { type: "ADD_TASK_LIST", data });
      });
      result.isFetching = isFetching(undefined, action);

      return result;
    }

    case a.REQUEST_TASK_LISTS: {
      return Object.assign(
        {},
        state,
        { isFetching: isFetching(undefined, action) }
      );
    }

    default:
      return state;
  }
};

const allIds = (state = [], action) => {
 	switch (action.type) {
    case 'ADD_TASK_LIST': {
      return [...new Set([...state, action.data.id])];
    }
    default:
      return state;
  }
};

const byId = (state = {}, action) => {
 	switch (action.type) {
    case 'ADD_TASK_LIST': {
      return {...state, [action.data.id]: action.data};
    }

    default:
      return state;
  }
};

const isFetching = (state = false, action) => {
 	switch (action.type) {
    case a.REQUEST_TASK_LISTS: {
      return true;
    }
    case a.RECEIVE_TASK_LISTS: {
      return false;
    }

    default: return state;
  }
};

const initState = () => {
  let result = {};
  result.allIds = allIds(undefined, {type:'any'});
  result.byId = byId(undefined, {type:'any'});
  result.isFetching = isFetching(undefined, {type:'any'});
  return result;
};

export default taskList;
