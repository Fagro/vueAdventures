<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label for="">Username</label>
          <input type="text" class="form-control" v-model="user.username">
        </div>
        <div class="form-group">
          <label for="">Email</label>
          <input type="text" class="form-control" v-model="user.email">
        </div>
        <button class="btn btn-primary" @click="submitUser">Submit</button>
        <hr>
        <button class="btn primary" @click="fetchData">get data</button>
        <ul>
          <li class="list-group-item" v-for="item in users">
            {{item.username - item.email}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        email: ''
      },
      users: []
    }
  },
  methods: {
    submitUser() {
      console.log('user submitted', this.user);
      this.$http
        .post('https://vuejs-http-e03ed.firebaseio.com/data.json', this.user)
        .then(response => {
          console.log('the response ', response)
        }, error => {
          console.log('the error', error)
        })
    },
    fetchData() {
      this.$http.get('https://vuejs-http-e03ed.firebaseio.com/data.json')
        .then(response => {
          return response.json()
        })
        .then(data => {
          const resultArray = []
          for (let key in data) {
            resultArray.push(data[key])
          }
          this.users = resultArray
        })
    }
  }
}
</script>

<style>

</style>
