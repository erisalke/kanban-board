import React from 'react';
import axios from 'axios';
import token from '../../config.js';

export function fetchTaskLists() {
  return function (dispatch) {
    dispatch(requestTaskLists());

    return axios
      .get(`https://redbooth.com/api/3/task_lists?order=id&archived=false&access_token=${token}`)
      .then(
        response => dispatch(receiveTaskLists(response.data))
      )
      .catch(
        error => {
          // just swallow ...for now
          console.error(error);
        }
      );
  };
}

const requestTaskLists = () => {
  return {
    type: REQUEST_TASK_LISTS
  };
};
export const REQUEST_TASK_LISTS = 'REQUEST_TASK_LISTS';

const receiveTaskLists = data => {
  return {
    type: RECEIVE_TASK_LISTS,
    data
  };
};
export const RECEIVE_TASK_LISTS = 'RECEIVE_TASK_LISTS';
