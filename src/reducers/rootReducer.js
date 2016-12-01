import { combineReducers } from 'redux';

import taskLists from './taskList';
import tasks from './task';

export default combineReducers({ taskLists, tasks });
