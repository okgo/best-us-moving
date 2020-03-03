<template lang="pug">
main.main
  top-section(
    heading="Warehousing"
    subheading="Let us move you to your new beginning")
  article.text-article
    .container
      .text
        p <b>Best US moving Inc</b> offers first month free storage option in case if a customer needs more time to find a new home or just going for a vacation.
        p In case if a shipment needs to be stored for more than one month a charge per month is usually based on the volume of a shipment.
        p All the items are being checked according to the inventory pages and unique tag numbers on all of the items during the offloading from the truck after the pick up and we doublecheck them  before shipping out from the storage to the destination address.
        p Our professional warehouse personnel,24 hour video surveillance cameras, climate control throughout the facility, security alarm and competitive rates make our storage the best option between the origin and destination points.
      .image
        img(src="/img/warehousing-1.jpg" alt="Interstate moves")
  section.c-services-section
    .container
      ul.services-list
        li(v-for="service in services")
          .services-list__item(:class="service.link")
            h5 {{ service.title }}
            p {{ service.text }}
            .link
              nuxt-link(:to="`/${service.link}`")
                |Read More
                svg(width="24" height="9" viewBox="0 0 24 9" fill="none" xmlns="http://www.w3.org/2000/svg")
                  path(d="M24 4.5L18.9474 0V3.375H0V5.625H18.9474V9L24 4.5Z" fill="white")
</template>

<script>
import TopSection from '@/components/TopSection.vue'

export default {
  components: {
    TopSection
  },
  data () {
    return {
      services: [
        {
          title: 'Interstate moves',
          text: "Best US moving INC is an interstate moving company and long distance moves are its primary occupation. That's why all of our crews are specially trained to handle, wrap and transfer your belongings without any issues...",
          link: 'interstate-moves'
        },
        {
          title: 'Commercial moves',
          text: "Commercial  relocations take special place in the activity of our company as they require highly professional workers, proper equipment and a lot of communication between a customer and a sales representative to ensure our client's stress-free move and maintain all of the office equipment and furniture in the original condition...",
          link: 'commercial-moves'
        }
      ]
    }
  },
  head () {
    return {
      bodyAttrs: {
        class: 'warehousing-page'
      }
    }
  }
}
</script>

<style></style>
