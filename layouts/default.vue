<template lang="pug">
.wrapper
  nuxt
  app-footer
  client-only
    modal
</template>

<script>
import AppFooter from '@/components/AppFooter.vue'
import Modal from '@/components/Modal.vue'

export default {
  components: {
    AppFooter,
    Modal
  }
}
</script>

<style lang="scss"></style>
