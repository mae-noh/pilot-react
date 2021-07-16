<template>
<div>
  <div class="d-flex justify-content-center">
  <b-form @submit.stop.prevent="Login(auth)" @reset="onReset" v-if="show">
        <b-form-group
            class="mb-2"
            id="input-group-account"
            label="account"
            label-for="account"
        >
          <b-form-input
              id="account"
              v-model="auth.account"
              type="account"
              placeholder="Enter Account"
              required
          ></b-form-input>
        </b-form-group>
        <b-form-group class="mb-3" id="input-group-password" label="password" label-for="password">
          <b-form-input
              id="password"
              v-model="auth.password"
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

import {Component, Vue} from 'vue-property-decorator';
import TokenService from "@/services/storage.service"
import UserService from "@/services/user.service";
import Auth from "../models/Auth";

@Component
export default class Login extends Vue{

  auth = new Auth('devbadak', '1234');
  show = true;

  Login = (auth: Auth) => {
    console.log(auth);
    let result = UserService.login(auth.account, auth.password)
        .then(()=> {
          console.log('accesstoken : ' , TokenService.getToken());
        });
  };

  onReset(event : any): void {
    event.preventDefault()
    // Reset our form values
    this.auth.account = '';
    this.auth.password = '';
    // Trick to reset/clear native browser form validation state
    this.show = false;
    this.$nextTick(() => {
      this.show = true;
    })
  };

}
</script>