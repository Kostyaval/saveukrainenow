import { getStaticAssets, getPage } from '~/utils/content'

export default ({ app }, inject) => {
  inject('getStaticAssets', getStaticAssets)
  inject('getPageLocale', getPage)
}
