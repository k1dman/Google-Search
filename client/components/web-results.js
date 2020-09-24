import webTemplate from './web.pug'

const WEB_SELECTOR = '.web-results-container'

export default (items) => {
  const webResults = items
    .map((it) => {
      return webTemplate({
        title: it.title,
        link: it.link,
        description: it.htmlSnippet
      })
    })
    .join('')

  document.querySelector(WEB_SELECTOR).innerHTML = webResults
}
