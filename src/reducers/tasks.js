import * as types from '../actions/action-types';
import {
  REQUEST_TASKS, RECEIVE_TASKS
} from '../actions/tasks-actions';

const tasks = (state = { items: [] }, action) => {
 	switch (action.type) {
    case REQUEST_TASKS: {
      return Object.assign({},
        state,
        {
          isFetching: true,
        }
      );
    }

    case RECEIVE_TASKS: {
      return Object.assign({},
        state,
        {
          items: [...action.data],
          isFetching: false,
        }
      );
    }

 		default:
 			return state;
 	}
};

export default tasks;
