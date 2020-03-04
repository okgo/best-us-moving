<template lang="pug">
footer.c-app-footer
  .c-app-footer__top
    img(src="img/footer-img.png" alt="Best Us Moving")
  .c-app-footer__bottom
    .container
      .col.col--25
        .logo
        //- socials
      .col.col--25
        h5 Main Services
        ul
          li
            nuxt-link(to="/interstate-moves") Interstate Moves
          li
            nuxt-link(to="/commercial-moves") Commercial Moves
          li
            nuxt-link(to="/warehousing") Warehousing
      .col.col--25
        h5 Contacts
        contacts
      .col.col--25
        a.button(
          href="#"
          @click.prevent="show") Get a quote now
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
  },
  methods: {
    show () {
      this.$modal.show('hello-world')
    }
  }
}
</script>

<style lang="scss"></style>
