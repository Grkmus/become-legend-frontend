<template>
  <div class="main container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h1 class="display-4 m-b-2">Login to play</h1>
        <!-- register form-->
        <form @submit.prevent="getFormValues" method="POST" action="/login" id="forms">
          <div class="form-group">
            <label for="username">Username:</label>
            <input class="form-control" type="text" placeholder="name" name="username" />
          </div>
          <div class="form-group">
            <label for="pw">Password:</label>
            <input class="form-control" type="password" name="password" />
          </div>
          <button class="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'login',
  methods: {
    async getFormValues(submitEvent) {
      const formElements = submitEvent.target.elements;
      const player = {
        username: formElements[0].value,
        password: formElements[1].value,
      };
      await axios
        .post('http://localhost:8080/api/login', player)
        .then(async (res) => {
          const { token } = res.data;
          localStorage.setItem('token', token);
          this.$store.dispatch('getUser').then(() => {
            this.$router.push('home');
          });
        })
        .catch((err) => {
          if (err.response.status === 500) alert('wrong username or password');
          else alert(err.message);
          console.log(err);
        });
    },
  },
};
</script>

<style>
.about {
  text-align: left;
}
</style>
