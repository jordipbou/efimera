const GITHUB_API_URL = 'https://api.github.com'

export const token = '0e995ca5f1e043664543226a4865832bb7477647'

export const listGists = (token) => {
  fetch (GITHUB_API_URL + '/gists', { headers: {
                                      'Authorization': 'token ' + token }})
    .then (response => response.json())
    .then (data => console.log (data))
    .catch (error => console.error (error))
}
