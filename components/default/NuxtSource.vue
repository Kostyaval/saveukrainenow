<template>
  <source
    :media="media"
    :srcset="cSizes"
    :sizes="cSizes.sizes"
    :type="webp ? 'image/webp' : ''"
  />
</template>

<script>
export default {
  name: 'NuxtSource',
  props: {
    src: { type: String, default: '' },
    media: { type: String, default: '' },
    sizes: { type: String, default: '' },
    webp: { type: Boolean, default: false },
  },
  computed: {
    cSizes() {
      const modifiers = { quality: 90 }
      if (this.webp) {
        modifiers.format = 'webp'
      }
      return this.$img(this.src, modifiers)
    },
  },
}
</script>

<style scoped></style>
