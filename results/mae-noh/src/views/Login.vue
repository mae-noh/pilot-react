<template>
<div>
  <div class="d-flex justify-content-center">
  <b-form @submit.stop.prevent="Login(account, password)" @reset="onReset" v-if="show">
        <b-form-group
            class="mb-2"
            id="input-group-account"
            label="account"
            label-for="account"
        >
          <b-form-input
              id="account"
              v-model="account"
              type="account"
              placeholder="Enter Account"
              required
          ></b-form-input>
        </b-form-group>
        <b-form-group class="mb-3" id="input-group-password" label="password" label-for="password">
          <b-form-input
              id="password"
              v-model="password"
              placeholder="Enter Password"
              required
          ></b-form-input>
        </b-form-group>
        <div class="d-flex justify-content-center">
          <b-button class="me-1" type="submit" variant="primary">Login</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </div>
  </b-form>
  </div>
</div>
</template>

<script lang="ts">

import {Component, Vue} from 'vue-property-decorator'
import axios from "axios"

@Component
export default class Login extends Vue{

  account  = 'devbadak';
  password  = '1234';
  show = true;

  Login = (account : string, password : string) => {
    console.log("account: " + account + " password: " + password);
    // POST
    axios.post('http://localhost:5000/auth/login', JSON.stringify({"account": account, "password": password}),
        { headers: { 'Content-Type': 'application/json' } })
        .then(function(response) {
          if (response.status == 200) {
            console.log(response);
          }
        })
        .catch((error) => {
          console.log(error);
        });
  };

  onReset(event : any): void {
    event.preventDefault()
    // Reset our form values
    this.account = '';
    this.password = '';
    // Trick to reset/clear native browser form validation state
    this.show = false;
    this.$nextTick(() => {
      this.show = true;
    })
  };

}
</script>