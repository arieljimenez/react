const React = require('react');
const ReactRouter = require('react-router-dom');

const Route = ReactRouter.Route;
const Router = ReactRouter.BrowserRouter;
const Switch = ReactRouter.Switch;

const Nav = require('./Nav');
const Home = require('./Home');
const Battle = require('./Battle');
const Popular = require('./Popular');
const Result = require('./Result');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/battle' component={Battle} />
            <Route path='/battle/results' component={Result} />
            <Route path='/popular' component={Popular} />
            <Route render={() => {
              return <p><b>404</b>- thing not found m8</p>
            }} />
          </Switch>
        </div>
      </Router>
    )
  }
}

module.exports = App;
