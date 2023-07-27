<template lang="pug">
section.c-contacts-section#contacts
  .container
    h2 contact <span>US</span>
    ul
      li
        span.ico.ico--clock
        .text
          h6 Working Hours
          p MON - SAT: <b>9AM - 8PM</b>
          p SUN: CLOSED
      li
        span.ico.ico--phone
        .text
          h6 Call Us
          //- p
          //-   a(href="tel:83 38 BEST US") 83 38 BEST US
          //- p
          //-   a(href="tel:8338237887") 833 823 7887
          p
            a(href="tel:+18143511131") +18143511131
      li
        span.ico.ico--pin
        .text
          h6 Main Office
          p
            b 1076 B Park RD, Brandon PA 19510
    socials
</template>

<script>
import Socials from '@/components/Socials.vue'

export default {
  components: {
    Socials
  }
}
</script>

<style lang="scss"></style>
