<template lang="pug">
ul.c-contacts
  li
    a(href="tel:83 38 BEST US")
      phone-ico
      |83 38 BEST US
  li
    a(href="tel:833 238 7887")
      phone-ico
      |833 238 7887
  li
    a(href="mailto:alldirectionsleads@gmail.com")
      letter-ico
      |alldirectionsleads@gmail.com
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
