<template lang="pug">
.c-quote-form
  h4 Talk to us
  form(@submit.prevent="submitForm")
    .row
      .col(:class="{ 'error': $v.time.$error }")
        label Moving Date
        date-picker(
          v-model="time"
          value-type="format"
          placeholder="Moving Date"
          :disabled-date="disableDates")
        .validation-texts(v-if="$v.time.$error")
          p(v-if="!$v.time.required") {{ validations.required }}

      .col(:class="{ 'error': $v.size.$error }")
        label Size of your Move
        .custom-select
          select(v-model="size")
            option(disabled value="") ---
            option(value="Moving Boxes Only") Moving Boxes Only
            option(value="Studio") Studio
            option(value="1 Bedroom Apt") 1 Bedroom Apt
            option(value="1 Bedroom House") 1 Bedroom House
            option(value="2 Bedroom Apt") 2 Bedroom Apt
            option(value="2 Bedroom House") 2 Bedroom House
            option(value="3 Bedroom Apt") 3 Bedroom Apt
            option(value="3 Bedroom House") 3 Bedroom House
            option(value="4 Bedroom Apt") 4 Bedroom Apt
            option(value="4 Bedroom House") 4 Bedroom House
            option(value="5 Bedroom Apt") 5 Bedroom Apt
            option(value="5 Bedroom House") 5 Bedroom House
            option(value="6 Bedroom Apt") 6 Bedroom Apt
            option(value="6 Bedroom House") 6 Bedroom House
            option(value="6 or more Bedroom Apt") 6 or more Bedroom Apt
            option(value="6 or more Bedroom House") 6 or more Bedroom House
        .validation-texts(v-if="$v.size.$error")
          p(v-if="!$v.size.required") {{ validations.required }}

    .row
      .col(:class="{ 'error': $v.movingFrom.$error }")
        label Moving From
        input(
          type="text"
          placeholder="Zip Code"
          v-model="movingFrom")
        .validation-texts(v-if="$v.movingFrom.$error")
          p(v-if="!$v.movingFrom.required") {{ validations.required }}
          p(v-if="!$v.movingFrom.numeric") {{ validations.numeric }}

      .col(:class="{ 'error': $v.movingTo.$error }")
        label Moving To
        input(
          type="text"
          placeholder="Zip Code"
          v-model="movingTo")
        .validation-texts(v-if="$v.movingTo.$error")
          p(v-if="!$v.movingTo.required") {{ validations.required }}
          p(v-if="!$v.movingTo.numeric") {{ validations.numeric }}

    .row
      .col(:class="{ 'error': $v.email.$error }")
        label E-mail
        input(
          type="email"
          placeholder="E-mail"
          v-model="email")
        .validation-texts(v-if="$v.email.$error")
          p(v-if="!$v.email.required") {{ validations.required }}
          p(v-if="!$v.email.email") {{ validations.email }}

      .col(:class="{ 'error': $v.phoneNumber.$error }")
        label Phone Number
        input(
          type="tel"
          placeholder="Phone Number"
          v-model="phoneNumber")
        .validation-texts(v-if="$v.phoneNumber.$error")
          p(v-if="!$v.phoneNumber.required") {{ validations.required }}
          p(v-if="!$v.phoneNumber.numeric") {{ validations.numeric }}
    .row
      .col(:class="{ 'error': $v.firstName.$error }")
        label First Name
        input(
          type="text"
          placeholder="First Name"
          v-model="firstName")
        .validation-texts(v-if="$v.firstName.$error")
          p(v-if="!$v.firstName.required") {{ validations.required }}
          p(v-if="!$v.firstName.minLength") {{ validations.min }}
      .col(:class="{ 'error': $v.lastName.$error }")
        label Last Name
        input(
          type="text"
          placeholder="Last Name"
          v-model="lastName")
        .validation-texts(v-if="$v.lastName.$error")
          p(v-if="!$v.lastName.required") {{ validations.required }}
          p(v-if="!$v.lastName.minLength") {{ validations.min }}
    .row
      button.button(type="submit") Send
</template>

<script>
import DatePicker from 'vue2-datepicker'
import { email, minLength, required, numeric } from 'vuelidate/lib/validators'

export default {
  components: {
    DatePicker
  },
  data () {
    return {
      time: null,
      size: '',
      movingFrom: null,
      movingTo: null,
      email: null,
      phoneNumber: null,
      firstName: null,
      lastName: null,
      endpoint: 'https://formspree.io/f/mjvddyad',
      validations: {
        required: 'Field is required',
        numeric: 'Must be a number',
        min: 'At least 2 characters',
        email: 'Please enter a valid email address'
      }
    }
  },
  methods: {
    disableDates (date) {
      const yesterday = new Date()
      yesterday.setDate(yesterday.getDate() - 1)

      return date <= yesterday
    },
    submitForm () {
      console.log(this.$v)
      this.$v.$touch()
      if (this.$v.$invalid) { return this.$toast.error('Please fill form with correct data') }
      const data = {
        date: this.time,
        size: this.size,
        moving_from: this.movingFrom,
        moving_to: this.movingTo,
        email: this.email,
        phone_number: this.phoneNumber,
        first_name: this.firstName,
        last_name: this.lastName
      }

      console.log(123, data)

      // try {
      //   await this.$axios.post(this.endpoint, data)
      //   this.$toast.success('We are working on your request and will get in touch as soon as possible.')

      //   this.time = null
      //   this.size = ''
      //   this.movingFrom = null
      //   this.movingTo = null
      //   this.email = null
      //   this.phoneNumber = null
      //   this.firstName = null
      //   this.lastName = null
      // } catch (e) {
      //   this.$toast.error('Oops, something went wrong. Please try again or contact our team.')

      //   console.error(e)
      // }
    }
  },
  validations: {
    time: {
      required
    },
    size: {
      required
    },
    movingFrom: {
      required,
      numeric
    },
    movingTo: {
      required,
      numeric
    },
    firstName: {
      required,
      minLength: minLength(2)
    },
    lastName: {
      required,
      minLength: minLength(2)
    },
    email: {
      required,
      email
    },
    phoneNumber: {
      required,
      numeric
    }
  }
}
</script>

<style lang="scss">
</style>
