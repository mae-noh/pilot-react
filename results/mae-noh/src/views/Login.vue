<template>
<div>
  <div class="d-flex justify-content-center">
  <b-form @submit.stop.prevent="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
            class="mb-2"
            id="input-group-account"
            label="account"
            label-for="account"
        >
          <b-form-input
              id="account"
              v-model="form.account"
              type="account"
              placeholder="Enter Account"
              required
          ></b-form-input>
        </b-form-group>
        <b-form-group class="mb-3" id="input-group-password" label="password" label-for="password">
          <b-form-input
              id="password"
              v-model="form.password"
              placeholder="Enter Password"
              required
          ></b-form-input>
        </b-form-group>
        <div class="d-flex justify-content-center">
          <b-button class="me-1" type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </div>
  </b-form>
  </div>
</div>
</template>

<script lang="ts">

import {Component, Vue} from 'vue-property-decorator'

@Component
export default class Login extends Vue{

  form: { account: string, password: string } = {account: 'devbadak', password: '1234'};
  show = true;

  onSubmit = (event : any) => {
    event.preventDefault()
    console.log(JSON.stringify(this.form))
  };

  onReset(event : any): void {
    event.preventDefault()
    // Reset our form values
    this.form.account = ''
    this.form.password = ''
    // Trick to reset/clear native browser form validation state
    this.show = false
    this.$nextTick(() => {
      this.show = true
    })
  };

}
</script>