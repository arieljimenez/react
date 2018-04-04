var React = require('react');

class LanguagesView extends React.Component {
  render() {
    var father = this.props.father;

    return (
      <ul className='languages'>
        {this.props.languages.map((lang) => {
          return (
            <li
              className={lang == father.state.selectedLanguage ? "red" : ""}
              onClick={father.updateLanguage.bind(null, lang)}
              key={lang}>
              {lang}
            </li>
          )
        })}
      </ul>
    )
  }
}

module.exports = LanguagesView;
