import {combineReducers} from 'redux';


const byId = (state = {}, action) => {
 	switch (action.type) {
    case 'RECEIVE_TASKS': {
      return action.data.reduce((result, task) =>
        Object.assign(result, { [task.id]: task }), {}
      )
    }

    default:
      return state;
  }
}

const allIds = (state = [], action) => {
 	switch (action.type) {
    case 'RECEIVE_TASKS': {
      return action.data.map(task => task.id)
    }
    default:
      return state;
  }
}

const isFetching = (state = false, action) => {
 	switch (action.type) {
    case 'REQUEST_TASKS': {
      return true;
    }
    case 'RECEIVE_TASKS': {
      return false;
    }

    default: return state;
  }
}

export default combineReducers({allIds, byId,  isFetching});
