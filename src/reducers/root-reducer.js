import { combineReducers } from 'redux';

import taskLists from './task-lists';
import tasks from './tasks';

export default combineReducers({ taskLists, tasks })
