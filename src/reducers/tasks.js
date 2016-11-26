import {
  REQUEST_TASKS, RECEIVE_TASKS
} from '../actions/tasks-actions';

const tasks = (state = { items: {} }, action) => {
 	switch (action.type) {
    case REQUEST_TASKS: {
      return Object.assign(
        {},
        state,
        {
          isFetching: true,
        }
      );
    }

    case RECEIVE_TASKS: {
      const newItems =
        action.data.reduce( (res, task) => {
          if (!res.hasOwnProperty(task.task_list_id)){
            res[task.task_list_id] = [];
          }
          res[task.task_list_id]= [task, ...res[task.task_list_id]]
          return res;
        }, state.items)

      return Object.assign({},
        state,
        {
          items: newItems,
          isFetching: false,
        }
      );
    }

 		default:
 			return state;
 	}
};

export default tasks;
