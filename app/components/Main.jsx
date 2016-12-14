var React = require('react');
var Search = require('./Search.jsx');
var Profile = require('./Profile.jsx');
var github = require('../api/github.jsx');

var Main = React.createClass({
  getInitialState: function () {
    return {
      userData: {},
      userRepos: {}
    }
  },
  handleSearch: function (username) {
    var that = this;
    github.getUserData(username).then(function (userData) {
      that.setState({
        userData: userData
      });
    }, function (errorMessage) {
      alert(errorMessage);
    });
    github.getUserRepos(username).then(function (userRepos) {
      that.setState({
        userRepos: userRepos
      });
    }, function (errorMessage) {
      alert(errorMessage);
    });
  },
  render: function () {
    return (
      <div>
        <Search onSearch={this.handleSearch}/>
        <Profile userData={this.state.userData} userRepos={this.state.userRepos}/>
      </div>
    )
  }
})

module.exports = Main;
