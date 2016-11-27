import { combineReducers } from 'redux';

import taskList from './task-list';
import task from './task';

export default combineReducers({ taskList, task })
