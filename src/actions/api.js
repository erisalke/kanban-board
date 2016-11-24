import React from 'react';
import axios from 'axios';
import token from '../../config.js';
// { type: 'FETCH_POSTS_REQUEST' }
// { type: 'FETCH_POSTS_FAILURE', error: 'Oops' }
// { type: 'FETCH_POSTS_SUCCESS', response: { ... } }

export function fetchTasks() {
  return dispatch => {
    // dispatch(requestTasks())
    return axios
      .get(`https://redbooth.com/api/3/tasks?order=id&status=new&access_token=${token}`)
      .then(
        response => {
          dispatch(receiveTasks(response.data))
        }
      )
      .catch(
        error => {
          // just swallow ...for now
          console.error(error);
        }
      );
  }
}

const receiveTasks = data => {
  return {
    type: 'RECEIVE_TASKS',
    data
  }
}

export function fetchTaskLists() {
  return function (dispatch) {
    return axios
      .get(`https://redbooth.com/api/3/task_lists?order=id&archived=false&access_token=${token}`)
      .then(
        response => dispatch(receiveTaskLists(response.data)),
      )
      .catch(
        error => {
          // just swallow ...for now
          console.error(error);
        }
      );
  }
}

const receiveTaskLists = data => {
  return {
    type: 'RECEIVE_TASK_LISTS',
    data
  }
}
