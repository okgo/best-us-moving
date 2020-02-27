<template lang="pug">
footer.c-app-footer
  .c-app-footer__top
    img(src="img/footer-img.png" alt="Best Us Moving")
  .c-app-footer__bottom
    .container
      .col.col--25
        .logo
        socials
      .col.col--25
        h5 Main Services
        ul
          li
            nuxt-link(to="/") Interstate Moves
          li
            nuxt-link(to="/") Commercial Moves
          li
            nuxt-link(to="/") Warehousing
      .col.col--25
        h5 Contacts
        contacts
      .col.col--25
        a.button(href="#") Get a quote now
        p.copyright {{ year }} © BEST US MOVING
</template>

<script>
import Socials from '@/components/Socials.vue'
import Contacts from '@/components/Contacts.vue'

export default {
  components: {
    Socials,
    Contacts
  },
  data () {
    const date = new Date()
    const year = date.getFullYear()
    return { year }
  }
}
</script>

<style lang="scss"></style>
