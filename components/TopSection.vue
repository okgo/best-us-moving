<template lang="pug">
section.c-top-section.green-mask
  h1 {{ heading }}
  h4 {{ subheading }}
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      default: ''
    },
    subheading: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss"></style>
