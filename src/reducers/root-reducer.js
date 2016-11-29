import { combineReducers } from 'redux';

import taskLists from './task-list';
import tasks from './task';

export default combineReducers({ taskLists, tasks });
