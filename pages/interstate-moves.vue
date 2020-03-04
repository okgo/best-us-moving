<template lang="pug">
main.main
  top-section(
    heading="Interstate moves"
    subheading="Let us move you to your new beginning")
  article.text-article
    .container
      .text
        p
          <b>Best US moving INC</b> is an interstate moving company and long distance moves are its primary occupation. That's why all of our crews are specially trained to handle, wrap and transfer your belongings without any issues. To protect the items we use padded quilts, paper quilts, wrapping paper, shrink wrap, plastic covers of different kind and heavy duty corrugated boxes which do not collapse during the stacking or handling. During your move we recommend to let our professional crew members to pack your items into our heavy duty boxes or in case if you would like to do it yourself, please, make sure you get boxes of the same quality that can survive the transfers. At the pick up boxes and wrapped furniture are being labeled, documented, loaded and stacked into a moving truck.
        p If a customer needs storage, in that case his/her items are transferred to the warehouse facility otherwise everything is usually offloaded into a tractor trailer in case if the pick up was made by a box truck. After that there are two more transfers from the warehouse to a tractor trailer and to the destination place.
        p All this is stressful to furniture that's why our movers make sure all wooden furniture is properly wrapped with minimum two or in some cases three layers of quilted pads. For fragile or antique items we make custom made crates and boxes to ensure a perfect fit. At the time of booking a move with our sales representative, you will be given a delivery window which varies depending on the distance and we will deliver within the agreed dates.
      .image
        img(src="/img/interstate-moves-1.jpg" alt="Interstate moves")
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
  transition: 'intro',
  components: {
    TopSection
  },
  data () {
    return {
      services: [
        {
          title: 'Commercial moves',
          text: "Commercial  relocations take special place in the activity of our company as they require highly professional workers, proper equipment and a lot of communication between a customer and a sales representative to ensure our client's stress-free move and maintain all of the office equipment and furniture in the original condition...",
          link: 'commercial-moves'
        },
        {
          title: 'Warehousing',
          text: 'Best US moving Inc offers first month free storage option in case if a customer needs more time to find a new home or just going for a vacation. In case if a shipment needs to be stored for more than one month a charge per month is usually based on the volume of a shipment...',
          link: 'warehousing'
        }
      ]
    }
  },
  head () {
    return {
      bodyAttrs: {
        class: 'interstate-moves-page'
      }
    }
  }
}
</script>

<style></style>
