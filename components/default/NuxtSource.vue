<template>
  <source :media="media" :srcset="cSizes" :sizes="cSizes.sizes" />
</template>

<script>
export default {
  name: 'NuxtSource',
  props: {
    src: { type: String, default: '' },
    media: { type: String, default: '' },
    sizes: { type: String, default: '' },
    width: { type: String, default: '' },
  },
  computed: {
    cSizes() {
      return this.$img(this.src, { width: this.width })
    },
  },
}
</script>

<style scoped></style>
