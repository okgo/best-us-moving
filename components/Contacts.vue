<template lang="pug">
ul.c-contacts
  li
    a(href="tel:773-691-4361")
      phone-ico
      |773-691-4361
  li
    a(href="tel:773-691-4361")
      phone-ico
      |773-691-4361
  li
    a(href="mailto:glen.lane@example.com")
      letter-ico
      |glen.lane@example.com
</template>

<script>
import PhoneIco from '@/components/PhoneIco.vue'
import LetterIco from '@/components/LetterIco.vue'

export default {
  components: {
    PhoneIco,
    LetterIco
  }
}
</script>

<style lang="scss"></style>
