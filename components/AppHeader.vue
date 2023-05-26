<template lang="pug">
header.c-app-header
  .c-app-header__top
    .container
      .contacts-row
        .contacts-row__contacts
          contacts.c-contacts--row
        .contacts-row__socials
          socials
      .logo-row
        nuxt-link.logo(to="/")
        a.button(
          href="#"
          @click.prevent="show") Get a quote now
  .c-app-header__bottom
    .container
      ul.menu
        li(v-for="link in links")
          nuxt-link(:to="`/${link.link}`") {{ link.text }}
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
    return {
      links: [
        {
          text: 'Home',
          link: ''
        },
        {
          text: 'services',
          link: '#services'
        },
        {
          text: 'about',
          link: '#about'
        },
        {
          text: 'Contacts',
          link: '#contacts'
        }
      ]
    }
  },
  methods: {
    show () {
      this.$modal.show('hello-world')
    }
  }
}
</script>

<style lang="scss"></style>
