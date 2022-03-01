<template>
  <div class="hero-banner">
    <div class="container">
      <header class="header">
        <div class="logo">
          <div>
            <img :src="logo" alt="Save Ukraine Now logo" class="logo__image" />
            <span class="logo__title">{{ siteName }}</span>
          </div>
          <div class="logo__subtitle heading-4">русский корабль – иди нахуй</div>
        </div>
      </header>
      <div class="hero-banner__wrapper">
        <div class="hero-banner__cta">
          <div class="hero-banner__cta-wrapper">
            <h1 class="heading-1">{{ title }}</h1>
            <p class="hero-banner__cta-description description">
              {{ description }}
            </p>
            <button type="button" class="hero-banner__cta-button button">
              {{ buttonText }}
            </button>
          </div>
        </div>
        <div class="hero-banner__image">
          <picture>
            <default-nuxt-source
              media="(max-width: 768px)"
              width="327"
              :src="bannerImageMobile"
            />
            <nuxt-img height='600px' :src="bannerImageDesktop" />
          </picture>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroBanner',
  props: {
    logo: {
      type: String,
      default: '',
    },
    siteName: {
      type: String,
      default: '',
    },
    bannerImageDesktop: {
      type: String,
      default: '',
    },
    bannerImageMobile: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    buttonText: {
      type: String,
      default: 'Make Donate',
    },
  },
}
</script>

<style scoped lang="sass">
.hero-banner
  position: relative
  min-height: 777px
  height: 100vh
  padding: 55px 0 80px
  background: var(--gray-light) url('/images/gerb.svg') calc(100% + 30px) center no-repeat
  background-size: auto 130%
  .container
    height: 100%
  &__wrapper
    position: absolute
    +absolute-xy-centered
    width: calc(100% - var(--containerPadding) - var(--containerPadding))
    padding-top: 40px
    display: flex
    flex-wrap: nowrap
    align-items: center
  &__cta
    flex: 50% 0 0
  &__cta-wrapper
    max-width: 416px
    margin: 0 auto
  &__cta-description
    padding-top: 45px
  &__cta-button
    margin-top: 50px
  &__image
    flex: 50% 0 0
.header
  width: calc(100% - var(--containerPadding) - var(--containerPadding))
  max-width: var(--container)
  position: absolute
.logo
  display: flex
  justify-content: space-between
  align-items: center
  &__image
    width: 40px
    height: 40px
  &__title
    padding-left: 7px
    font-size: 16px
    font-weight: 700
@media (max-width: $md)
  .hero-banner
    padding: 30px 0 60px
    &__wrapper
      position: static
      +reset-centered
      padding-top: 70px
      flex-direction: column-reverse
    &__cta
      flex: auto 0 0
    &__cta-description
      padding-top: 20px
    &__image
      padding-bottom: 20px
      flex: auto 0 0
  .logo
    align-items: flex-start
    flex-direction: column
    &__subtitle
      padding-left: 50px
      line-height: 1

</style>
