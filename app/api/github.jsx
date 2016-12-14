var axios = require('axios');

const API_URL = 'https://api.github.com/users/';
const CLIENT_ID = '5e4c2359b46d017b918c';
const CLIENT_SECRET = 'eb77e69953b79fffdff801c5b123225ce241774e';

module.exports = {
  getUserData: function (username) {
    var requestUrl = `${API_URL}${username}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;

    return axios.get(requestUrl).then(function (response) {
      return response.data;

    }, function (response) {
      console.log('error');
    });
  },
  getUserRepos: function (username) {
    var requestUrl = `${API_URL}${username}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;

    return axios.get(requestUrl).then(function (response) {
      return response.data;

    }, function (response) {
      console.log('error');
    });
  }
}
