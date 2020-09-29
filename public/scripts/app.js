console.log('App.js is running!');

// JSX - Javascript XML
var template = /*#__PURE__*/React.createElement("p", null, "Something new")
//var template = <p>This is JSX from App.js</p>;
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);