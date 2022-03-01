<template>
  <div>
    <homepage-hero-banner
      :logo="$getStaticAssets(heroBanner.logo)"
      :site-name="heroBanner.siteName"
      :banner-image-desktop="$getStaticAssets(heroBanner.heroImageDesktop)"
      :banner-image-mobile="$getStaticAssets(heroBanner.heroImageMobile)"
      :title='heroBanner.title'
      :description='heroBanner.description'
    />
  </div>
</template>

<script>
import { getPage } from '../utils/content'
export default {
  name: 'IndexPage',
  async asyncData({ $content }) {
    const common = getPage(await $content('common').fetch())
    return {
      heroBanner: common.herobanner,
    }
  },
}
</script>
