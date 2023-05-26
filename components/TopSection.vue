<template lang="pug">
section.c-top-section.green-mask
  h1 {{ heading }}
  quote-form
</template>

<script>
import QuoteForm from '@/components/QuoteForm'
export default {
  components: {
    QuoteForm
  },
  props: {
    heading: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss"></style>
