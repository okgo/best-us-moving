<template lang="pug">
ul.c-contacts
  //- li
  //-   a(href="tel:83 38 BEST US")
  //-     phone-ico
  //-     |83 38 BEST US
  //- li
  //-   a(href="tel:8338237887")
  //-     phone-ico
  //-     |833 823 7887
  li
    a(href="tel:8352053025")
      phone-ico
      |835 205 3025
  li
    a(href="mailto:quote@bestusmovinginc.com")
      letter-ico
      |quote@bestusmovinginc.com
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
