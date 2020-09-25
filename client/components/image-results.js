import imageTemplate from './image.pug'

const IMAGE_SELECTOR = '.image-results-container'

export default (items) => {
  const images = items
    .map((it) => {
      return imageTemplate({
        src: it.link,
        alt: it.title
      })
    })
    .join('')

  document.querySelector(IMAGE_SELECTOR).innerHTML = images
}
