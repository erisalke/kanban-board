import * as types from '../actions/action-types';

const taskLists = (state = [], action) => {
 	switch (action.type) {

    case 'RECEIVE_TASK_LISTS': {
      return [...action.data];
    }

 		default:
 			return state;
 	}
};

export default taskLists;
