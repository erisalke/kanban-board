import * as types from '../actions/action-types';

const tasks = (state = [], action) => {
 	switch (action.type) {
 		case 'RECEIVE_TASKS': {
      return [...action.data];
    }

 		default:
 			return state;
 	}
};

export default tasks;
