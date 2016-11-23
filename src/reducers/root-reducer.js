import * as types from '../actions/action-types';

const root = (state = {}, action) => {
 	switch (action.type) {
 		case 'RECEIVE_TASKS': {
      return Object.assign({}, state, {tasks: action.data})
    }

    case 'RECEIVE_TASK_LISTS': {
      return Object.assign({}, state, {lists: action.data})
    }

 		default:
 			return state;
 	}
};

export default root;
