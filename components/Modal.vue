<template lang="pug">
  modal(
    name="hello-world"
    transition="nice-modal-fade"
    :delay="100"
    height="auto"
    :scrollable="true")
    .c-modal
      a.c-modal__close(
        href="#"
        @click.prevent="$modal.hide('hello-world')") &#10005;
      h4 Talk to us
      form(method="POST" action="https://formspree.io/bestusmovinginc@gmail.com")
        .row
          label Name
          input(type="text" placeholder="Name" required="required")
        .row
          label E-mail
          input(type="email" placeholder="E-mail" required="required")
        .row
          label Message
          textarea(placeholder="Message" required="required")
        .row
          button.button(type="submit") Send
</template>

<script>
export default {

}
</script>

<style lang="scss"></style>
