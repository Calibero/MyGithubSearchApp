var React = require('react');
var ReposList = require('./ReposList.jsx');

var Profile = React.createClass({
  render: function () {
    var userData = this.props.userData;
    var userRepos = this.props.userRepos;

    if(userData.login){
      return (
        <div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">{userData.name}</h3>
            </div>
            <div className="panel-body">
              <div className="row">
                <div className="col-md-4">
                  <img src={userData.avatar_url} alt={userData.name} className="thumbnail" style={{width: "100%"}} />
                </div>
                <div className="col-md-8">
                  <div className="row">
                    <div className="col-md-12">
                      <span className="label label-primary">{userData.public_repos} Repos</span>
                      <span className="label label-success">{userData.public_gists} Public gists</span>
                      <span className="label label-info">{userData.followers} Followers</span>
                      <span className="label label-danger">{userData.following} Following</span>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-12">
                      <ul className="list-group">
                        <li className="list-group-item"><strong>Username:</strong> {userData.login}</li>
                        <li className="list-group-item"><strong>Location:</strong> {userData.location}</li>
                        <li className="list-group-item"><strong>Email:</strong> {userData.email}</li>
                      </ul>
                    </div>
                  </div>
                  <br />
                  <a href={userData.html_url} className="btn btn-info" target="_blank">Visit profile on Github</a>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <ReposList userRepos={userRepos} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }else{
        return (
          <div>
          </div>
        )
    }
  }
})

module.exports = Profile;
