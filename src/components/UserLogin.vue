<template>
  <div>
    <h2>登录</h2>
    <form @submit.prevent="login">
      <label>Email:</label>
      <input type="email" v-model="email" required>
      <br>
      <label>Password:</label>
      <input type="password" v-model="password" required>
      <br>
      <button type="submit">登录</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://127.0.0.1:31415/api/v1/user/login', {
          email: this.email,
          password: this.password
        })
        console.log(response.data)
        // handle successful login here
        alert("登录成功");
        
      } catch (error) {
        console.error(error)
        // handle login error here
      }
    }
  }
}
</script>
