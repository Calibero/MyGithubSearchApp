var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('./components/Main.jsx');

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);
