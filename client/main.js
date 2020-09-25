import './assets/scss/main.scss'
import axios from 'axios'
import imageResults from './components/image-results'
import webResults from './components/web-results'
import pagination from './components/pagination'

const RESULTS_PER_PAGE = 12

const getSearchUrl = (searchString, page = 1, searchType = 'SEARCH_TYPE_UNDEFINED') =>
  `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CX}&q=${encodeURI(
    searchString
  )}&searchType=${searchType}&start=${(page - 1) * RESULTS_PER_PAGE + 1}`

const searchInit = () => {
  let totalResults = 0
  let searchString = ''
  let page = 1

  const searchRequest = () => {
    const webUrl = getSearchUrl(searchString, page)
    const imageUrl = getSearchUrl(searchString, page, 'IMAGE')
    Promise.all([axios(webUrl), axios(imageUrl)]).then(
      ([{ data: webResponse }, { data: imageResponse }]) => {
        webResults(webResponse.items)
        imageResults(imageResponse.items)

        totalResults = Math.max(
          +webResponse.searchInformation.totalResults,
          +imageResponse.searchInformation.totalResults
        )
        pagination({
          totalResults,
          page,
          resultsPerPage: RESULTS_PER_PAGE,
          goToPage: (pageClicked) => {
            page = pageClicked
            searchRequest()
          }
        })
      }
    )
  }
  return (searchRequestString) => {
    searchString = searchRequestString
    searchRequest()
  }
}

;(function init() {
  const searchFunc = searchInit()
  document.getElementById('search-button').addEventListener('click', () => {
    searchFunc(document.getElementById('search-input').value)
  })
})()
