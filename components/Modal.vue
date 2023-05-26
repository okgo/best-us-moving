<template lang="pug">
modal(
  name="hello-world"
  transition="nice-modal-fade"
  :delay="100"
  height="auto"
  :adaptive="true"
  :scrollable="true")
  .c-modal
    a.c-modal__close(
      href="#"
      @click.prevent="$modal.hide('hello-world')") &#10005;
    quote-form
</template>

<script>
import QuoteForm from '@/components/QuoteForm'

export default {
  components: {
    QuoteForm
  }
}
</script>

<style lang="scss"></style>
