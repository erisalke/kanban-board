import {
  REQUEST_TASK_LISTS, RECEIVE_TASK_LISTS
} from '../actions/task-lists-actions';

const taskLists = (state = { items: [] }, action) => {
 	switch (action.type) {
    case REQUEST_TASK_LISTS: {
      return Object.assign({},
        state,
        {
          isFetching: true,
        }
      );
    }

    case RECEIVE_TASK_LISTS: {
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

export default taskLists;
