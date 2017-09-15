var React = require('react');
var ReactDom = require('react-dom');
require('./index.css');

class App extends React.Component {
  render(){
    return(
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }
}

ReactDom.render(
  <App />,
  document.getElementById('app')
)
