<template lang="pug">
  .wrapper
    app-header
    nuxt
    app-footer
    modal
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import Modal from '@/components/Modal.vue'

export default {
  components: {
    AppHeader,
    AppFooter,
    Modal
  }
}
</script>

<style lang="scss"></style>
