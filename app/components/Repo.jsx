var React = require('react');

var Repo = React.createClass({
  render: function () {
    var repo = this.props.repo;
    return (
      <li className="list-group-item">
        <a href={repo.html_url} target="_blank">
          {repo.name}
        </a> : {repo.description}
      </li>
    )
  }
})

module.exports = Repo;
