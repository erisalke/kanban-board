import {combineReducers} from 'redux';

const task  = (state = initState(), action) => {
  switch (action.type) {
    case 'RECEIVE_TASKS': {
      let result = Object.assign({}, state);
      action.data.forEach(data => {
        result.allIds = allIds(result.allIds, { type: "ADD_TASK", data })
        result.byId = byId(result.byId, { type: "ADD_TASK", data })
        result.byList = byList(result.byList, { type: "ADD_TASK", data })
        result.isFetching = isFetching(result.isFetching, action)
      })
      return result
    }

    default:
      return state;
  }
}

const allIds = (state = [], action) => {
 	switch (action.type) {
    case 'ADD_TASK': {
      return [...new Set([...state, action.data.id])]
    }
    default:
      return state;
  }
}

const byId = (state = {}, action) => {
 	switch (action.type) {
    case 'ADD_TASK': {
      return {...state, [action.data.id]: action.data}
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

const byList = (state = {}, action) => {
 	switch (action.type) {
    case 'ADD_TASK': {
      const listId = action.data.task_list_id;
      return {...state, [listId]: addToList(state[listId], action)}
    }

    default:
      return state;
  }
}

const addToList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK': {
      return [... new Set([...state, action.data.id])]
    }

    default:
      return state;
  }
}

const initState = () => {
  let result = {};
  result.allIds = allIds(undefined, {type:'any'});
  result.byId = byId(undefined, {type:'any'});
  result.byList = byList(undefined, {type:'any'});
  result.isFetching = isFetching(undefined, {type:'any'});
  return result;
}

export default task;
