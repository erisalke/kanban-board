import {combineReducers} from 'redux';

const listDependency = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK': {
      return [...state, action.data.id]
    }

    default: return state;
  }
}

const byList = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TASK': {
      return {
        ...state,
        [action.data.task_list_id]:
          listDependency(state[action.data.task_list_id], action),
      }
    }

    default:
      return state;
  }
}

const byId = (state = [], action) => {
 	switch (action.type) {
    case 'ADD_TASK': {
      return [...state, action.data.id];
    }

    default:
      return state;
  }
}

const all = (state = {}, action) => {
 	switch (action.type) {
    case 'ADD_TASK': {
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
    case 'REQUEST_TASKS': {
      return true;
    }
    case 'RECEIVE_TASKS': {
      return false;
    }

    default: return state;
  }
}

export default combineReducers({all, byId, byList, isFetching});

//
// const task = (state = { items: {} }, action) => {
//  	switch (action.type) {
//     case REQUEST_TASKS: {
//       return Object.assign(
//         {},
//         state,
//         {
//           isFetching: true,
//         }
//       );
//     }
//
//     case RECEIVE_TASKS: {
//       const newItems =
//         action.data.reduce( (res, task) => {
//           if (!res.hasOwnProperty(task.task_list_id)){
//             res[task.task_list_id] = [];
//           }
//           res[task.task_list_id]= [task, ...res[task.task_list_id]]
//           return res;
//         }, state.items)
//
//       return Object.assign({},
//         state,
//         {
//           items: newItems,
//           isFetching: false,
//         }
//       );
//     }
//
//  		default:
//  			return state;
//  	}
// };
//
// export default task;
