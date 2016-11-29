import {combineReducers} from 'redux';

const fromList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK': {
      console.log("SHOOWME",action, state);
      return [action.data.id, ...state]
    }

    default:
      return state;
  }

}

const byList = (state = {}, action) => {
 	switch (action.type) {
    case 'RECEIVE_TASKS': {
      return action.data.reduce((result, task) => {
          return Object.assign(
            result,
            {
              [task.task_list_id]: fromList(result[task.task_list_id], {type:"ADD_TASK", data:task})
            }
          ), state
        }
      )
    }

    default:
      return state;
  }
}


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

export default combineReducers({allIds, byId, byList, isFetching});
