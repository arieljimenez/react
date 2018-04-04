var React = require('react');

class TopMenu extends React.Component {
    render() {
        return (
            <nav>
                <span>Battle App</span>
                <span>Home</span>
                <span>Battle</span>
                <span>Popular</span>
            </nav>
        )
    }
}

module.exports = TopMenu;
