import { camelize, deepFreeze } from '~/utils/common'
export function getPage(content, locale = 'en') {
  const PAGE_SECTIONS = {}

  content.forEach((el) => {
    const SECTION_NAME = camelize(el.slug)

    PAGE_SECTIONS[SECTION_NAME] = el[locale]
  })

  return deepFreeze(PAGE_SECTIONS)
}
export function getStaticAssets(assets) {
  if (!assets) {
    return ''
  }
  return assets.replace(/^(\/static)|^(static)/, '')
}
