const React = require('react');
const PropType = require('prop-types');

// functional stateless component
function LanguagesView(props) {
  var languages = ['All', 'Python', 'Java', 'JavaScript', 'Elm', 'C#', 'Ruby'];

  return (
    <ul className='languages'>
      {languages.map((lang) => {
        return (
          <li
            className={lang == props.selectedLanguage ? "red" : ""}
            onClick={props.onSelect.bind(null, lang)}
            key={lang}>
            {lang}
          </li>
        )
      })}
    </ul>
  )
}

LanguagesView.propType = {
  selectedLanguage: PropType.string.isRequired,
  onSelect: PropType.func.isRequired,
}

module.exports = LanguagesView;
