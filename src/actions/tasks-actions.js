import React from 'react';
import axios from 'axios';
import token from '../../config.js';

export function fetchTasks() {
  return dispatch => {
    dispatch(requestTasks())

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

export const REQUEST_TASKS = 'REQUEST_TASKS'
const requestTasks = data => {
  return {
    type: 'REQUEST_TASKS'
  }
}

export const RECEIVE_TASKS = 'RECEIVE_TASKS'
const receiveTasks = data => {
  return {
    type: 'RECEIVE_TASKS',
    data
  }
}
