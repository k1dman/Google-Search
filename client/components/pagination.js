import paginationTemplate from './pagination.pug'

const PAGINATION_SELECTOR = '.web-results-pagination'
const PAGES_TO_SHOW = 5
export default ({ totalResults, page, resultsPerPage, goToPage }) => {
  const navigate = (e) => {
    if (!e.target.classList.contains('page-number')) {
      return
    }
    goToPage(+e.target.innerText)
  }
  const pageMin = Math.max(1, page - PAGES_TO_SHOW / 2)
  const pageMax = Math.min(totalResults / resultsPerPage, page + PAGES_TO_SHOW / 2)

  const pages = new Array(PAGES_TO_SHOW).fill(0).map((it, index) => {
    if (page === pageMax) {
      return pageMax - PAGES_TO_SHOW + index
    }
    return pageMin + index
  })

  const webResults = paginationTemplate({
    page,
    pages
  })

  document.querySelector(PAGINATION_SELECTOR).removeEventListener('click', navigate)
  document.querySelector(PAGINATION_SELECTOR).innerHTML = webResults
  document.querySelector(PAGINATION_SELECTOR).addEventListener('click', navigate)
}
