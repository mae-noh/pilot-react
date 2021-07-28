<template>
  <div class="d-flex justify-content-center">
    <b-form v-if="show">
      <b-form-group
          class="mb-2"
          id="input-group-id"
          label="id"
          label-for="id"
      >
        <b-form-input
            id="id"
            v-model="user.id"
            type="text"
            required
        ></b-form-input>
      </b-form-group>
      <b-form-group
          class="mb-2"
          id="input-group-account"
          label="account"
          label-for="account"
      >
        <b-form-input
            id="account"
            v-model="user.account"
            type="text"
            required
        ></b-form-input>
      </b-form-group>
      <b-form-group class="mb-3" id="input-group-name" label="name" label-for="name">
        <b-form-input
            id="name"
            type="text"
            v-model="user.name"
            required
        ></b-form-input>
      </b-form-group>
      <b-form-group class="mb-3" id="input-group-level" label="level" label-for="level">
        <b-form-input
            id="level"
            type="text"
            v-model="user.level"
            required
        ></b-form-input>
      </b-form-group>
    </b-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import User from '../models/User';
import UserService from "@/services/userService";

@Component
export default class UserInfo extends Vue {

  user = new User(0,'devbadakexam','냥발바닥',10);
  show = true;

  mounted(){
    try{ const res = UserService.getUserInfo()
        .then((result) => {
          console.log('getUserInfo : ', result)
          this.user = result
        })
    }catch (error){
      console.log(error)
    }
  }

}

</script>