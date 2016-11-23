import React from 'react';
import axios from 'axios';
import token from '../../config.js';


export function fetchTasks() {
  return dispatch => {
    return axios
      .get(`https://redbooth.com/api/3/tasks?order=id&status=new&access_token=${token}`)
      .then(
        response => dispatch(receiveTasks(response.data)),
        error => console.log(error)
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
        error => console.log(error)
      );
  }
}

const receiveTaskLists = data => {
  return {
    type: 'RECEIVE_TASK_LISTS',
    data
  }
}
