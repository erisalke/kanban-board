import React from 'react';
import axios from 'axios';
import token from '../../config.js';

export function executeApiCall() {
  axios
    .get(`https://redbooth.com/api/3/tasks?order=id&status=new&access_token=${token}`)
    .then(function (response) {
      console.log(response);
    });
}
