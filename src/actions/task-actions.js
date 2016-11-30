import React from 'react';
import axios from 'axios';
import token from '../../config.js';

export function fetchTasks(listId) {
  return dispatch => {
    dispatch(requestTasks());

    let url = `https://redbooth.com/api/3/tasks?order=id&access_token=${token}`;
    if (listId) {
      url += `&task_list_id=${listId}`;
    }
    return axios
      .get(url)
      .then(
        response => dispatch(receiveTasks(response.data))
      )
      .catch(
        error => {
          // just swallow ...for now
          console.error(error);
        }
      );
  };
}

export function changeStatus(id, status) {
  // status: new, open, hold, resolved or rejected.
  return dispatch => {
    return axios
      .put(`https://redbooth.com/api/3/tasks/${id}?status=${status}&access_token=${token}`)
      .then( response => dispatch(receiveTasks([response.data])) )
      .catch(
        error => {
          // just swallow ...for now
          console.error(error);
        }
      );
  };
}

const requestTasks = () => {
  return {
    type: REQUEST_TASKS,
  };
};
export const REQUEST_TASKS = 'REQUEST_TASKS';

const receiveTasks = (data) => {
  return {
    type: RECEIVE_TASKS,
    data
  };
};
export const RECEIVE_TASKS = 'RECEIVE_TASKS';
