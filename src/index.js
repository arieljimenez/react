var React = require('react');
var ReactDOM = require('react-dom');

require('./index.css');
class Name extends React.Component {
    render() {
        return (
            <h1> Name : {this.props.name} </h1>
        )
    }
} class Family extends React.Component {
    render() {
        console.log(this.props.family)
        return (
            <div>
                <h1> Family: </h1>
                <ul>
                    {this.props.family.map(function (member) {
                        return <li>{member}</li>
                    })}
                </ul>
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        var name = "Ariel Jiménez";
        var family = ["Francisca Gonzalez", "Alucard Jimenez"];
        return (
            <div>
                <Name name={name} />
                <Family family={family} />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
