<template lang="pug">
main.main
  top-section(
    heading="NEW HOME IS WHERE YOUR STORY BEGINS"
    subheading="Let us move you to your new beginning")
  services-section
  about-section
  contacts-section
</template>

<script>
import TopSection from '@/components/TopSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ContactsSection from '@/components/ContactsSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'

export default {
  components: {
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

<style></style>
