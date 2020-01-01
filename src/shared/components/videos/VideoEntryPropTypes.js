import { arrayOf, bool, number, oneOf, oneOfType, shape, string } from 'prop-types'

export default {
  id: string.isRequired,
  type: oneOf(['video', 'vod', 'series']).isRequired,
  title: string.isRequired,
  tag: string.isRequired,
  altTitle: oneOfType([bool, string]),
  description: arrayOf(string).isRequired,
  trt: oneOfType([number, string]).isRequired,
  year: number.isRequired,
  videoId: string,
  imdb: string,
  content: arrayOf(oneOfType([
    shape({
      id: string.isRequired,
      title: string.isRequired,
      url: string.isRequired
    }),
    shape({
      id: string.isRequired,
      title: string.isRequired,
      tag: string.isRequired
    })
  ]))
}