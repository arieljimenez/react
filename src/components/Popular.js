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

    return (
      <div>
        <TopMenu />
        <LanguagesView
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage} />
      </div>
    )
  }
}

module.exports = Popular
