const axios = require('axios')
const ID = '49d56faf5ea8d730802f';
const SEC = 'ba3843681c81c9f3cdb03f6d4e55415f13215ba7';
const PARAMS = '?client_id=' + ID + '&client_secret=' + SEC;


function getProfile(username) {
  return axios.get('http://api.github.com/users/' + username + PARAMS)
    .then(function (user) {
      return user.data;
    });
}

function getRepos(username) {
  return axios.get('http://api.github.com/users/' + username + '/repos' + PARAMS + '&per_page=100');
}

function getStartCount(repos) {
  return repos.data.reduce(function (count, repo) {
    return count + repo.stargazers_count;
  }, 0);
}

function calculateScore(profile, repos) {
  var followers = profile.followers;
  var totalStars = getStartCount(repos);

  return (followers * 3) + totalStars;
}

function handleError(error) {
  console.warn(error);
  return null;
}

function getUserData(player) {
  // a promise for promises <3
  return axios.all([
    getProfile(player),
    getRepos(player)
  ]).then(function (data) {
    var profile = data[0];
    var repos = data[1];

    return {
      profile: profile,
      score: calculateScore(profile, repos),
    }
  });
}

function sortPlayers(players) {
  return players.sort(function (a, b) {
    return b.score - a.score;
  });
}

module.exports = {
  battle: (players) => {
    return axios.all(players.map(getUserData))
      .then(sortPlayers)
      .catch(handleError)
  },

  fetchPopularRepos: (lang) => {
    var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:' + lang + '&sort=stars&order=desc&type=Repositories');
    return axios.get(encodedURI)
      .then((response) => {
        return response.data.items;
      });
  }
}
