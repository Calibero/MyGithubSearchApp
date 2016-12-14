var React = require('react');
var Repo = require('./Repo.jsx')

var ReposList = React.createClass({
  getRepoListItem: function (repos) {
    return repos.map(repo => {
      return <Repo repo={repo} key={repo.id} />
    })
  },
  render: function () {
    var repos = this.props.userRepos;

    if(repos.length > 0){
      return (
        <div>
          <div className="panel panel-default">
            <div className="panel-heading">User Repositories</div>
              <ul className="list-group">
                {this.getRepoListItem(repos)}
              </ul>
            </div>
          </div>
      )
    }else{
      return (
        <div>
          <div className="panel panel-default">
            <div className="panel-heading">User Repositories</div>
              <ul className="list-group">
                <li className="list-group-item">No repositories</li>
              </ul>
            </div>
          </div>
      )
    }

  }
});

module.exports = ReposList;
