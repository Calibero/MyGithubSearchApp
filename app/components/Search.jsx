var React = require('react');

var Search = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var username = this.refs.username.value;
    this.refs.username.value = '';
    this.props.onSearch(username);
  },
  render: function () {
    return (
      <div className="row">
        <form onSubmit={this.onFormSubmit} className="col-md-4 col-md-offset-4">
          <div className="col-md-8">
            <input type="text" ref="username" className="form-control " />
          </div>
          <button className="col-md-4 btn btn-primary">Find User</button>
        </form>
      </div>
    )
  }
})

module.exports = Search;
