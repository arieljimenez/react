const React = require('react');
const TopMenu = require('./TopMenu');
const LanguagesView = require('./LanguagesView');

class Popular extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: 'All'
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lang) {
    this.setState(() => {
      return {
        selectedLanguage: lang
      }
    });
  }

  render() {
    var languages = ['All', 'Python', 'Java', 'JavaScript', 'Elm', 'C#', 'Ruby'];

    return (
      <div>
        <TopMenu />
        <LanguagesView
          state={this.state}
          languages={languages}
          father={this} />
      </div>
    )
  }
}

module.exports = Popular
