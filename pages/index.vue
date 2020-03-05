<template lang="pug">
.wrap
  main-header
  main.main#top
    top-section(
      heading="NEW HOME IS WHERE YOUR STORY BEGINS"
      subheading="Let us move you to your new beginning")
    #services
      services-section
    about-section
    contacts-section
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'
import TopSection from '@/components/TopSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ContactsSection from '@/components/ContactsSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'

export default {
  transition: 'intro',
  components: {
    MainHeader,
    TopSection,
    AboutSection,
    ContactsSection,
    ServicesSection
  },
  head () {
    return {
      bodyAttrs: {
        class: 'main-page'
      }
    }
  }
}
</script>

<style lang="scss">
</style>
