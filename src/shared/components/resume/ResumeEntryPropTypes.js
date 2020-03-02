import { oneOf, number, string } from 'prop-types'

export default {
  type: oneOf(['job', 'skill']).isRequired,
  title: string.isRequired,
  company: string,
  format: string,
  position: string,
  year: number
}
