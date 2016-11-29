import {combineReducers} from 'redux';

const byId = (state = {}, action) => {
 	switch (action.type) {
    case 'RECEIVE_TASK_LISTS': {
      return action.data.reduce((result, taskList) =>
        Object.assign(result, { [taskList.id]: taskList }), {}
      )
    }

    default:
      return state;
  }
}

const allIds = (state = [], action) => {
 	switch (action.type) {
    case 'RECEIVE_TASK_LISTS': {
      return action.data.map(taskList => taskList.id)
    }
    default:
      return state;
  }
}

const getAllTaskList = (state) => {
  state.allIds.map(id => state.byId[id])
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

export default combineReducers({allIds, byId, isFetching});
