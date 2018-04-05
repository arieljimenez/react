const Axios = require('axios')

module.exports = {
  fetchPopularRepos: (lang) => {
    var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:' + lang + '&sort=stars&order=desc&type=Repositories');

    return Axios.get(encodedURI)
      .then((response) => {
        return response.data.items;
      });
  }
}
