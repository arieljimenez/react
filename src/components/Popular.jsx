const React = require('react');
const PropType = require('prop-types');

const api = require('../utils/api');

class Popular extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: 'All',
      repos: null,
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(lang) {
    this.setState(() => {
      return {
        selectedLanguage: lang,
        repos: null,
      }
    });

    api.fetchPopularRepos(lang)
      .then((repos) => {
        this.setState(() => {
          return {
            repos: repos,
          }
        })
      });
  }

  render() {
    const languages = ['All', 'Python', 'Java', 'JavaScript', 'Elm', 'CSharp', 'Ruby', '', 'Elixir'];

    return (
      <div>
        <LanguagesView
          languages={languages}
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage} />
        {!this.state.repos
          ? <p>LOADING</p>
          : <RepoGrid repos={this.state.repos} />}
      </div>
    )
  }
}

// HELPER FUNCTIONS
function LanguagesView(props) {
  return (
    <ul className='languages'>
      {props.languages.map((lang) => {
        return (
          <li
            className={lang == props.selectedLanguage ? "active" : ""}
            onClick={props.onSelect.bind(null, lang)}
            key={lang}>
            {lang}
          </li>
        )
      })}
    </ul>
  )
}

function RepoGrid(props) {
  return (
    <ul className='popular-list'>
      {props.repos.map((repo, index) => {
        return (
          <li key={repo.name} className="popular-item" >
            <div className="popular-rank">
              # {index + 1}
            </div>
            <ul className="space-list-items">
              <li>
                <img
                  className="avatar"
                  src={repo.owner.avatar_url}
                  alt={'Avatar for ' + repo.owner.login} />
              </li>
              <li>
                <a href={repo.html_url} target="blank">{repo.name}</a>
              </li>
              <li>{repo.owner.login}</li>
              <li>{repo.stargazers_count} stars</li>
            </ul>
          </li>
        )
      })}
    </ul>
  )
}

LanguagesView.propType = {
  languages: PropType.array.isRequired,
  selectedLanguage: PropType.string.isRequired,
  onSelect: PropType.func.isRequired,
}

RepoGrid.propType = {
  repos: PropType.array.isRequired,
}

module.exports = Popular;
