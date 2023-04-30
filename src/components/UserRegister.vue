<template>
    <div>
        <h2>注册</h2>
        <form @submit.prevent="register">
            <label>Email:</label>
            <input type="email" v-model="email" required>
            <br>
            <label>Password:</label>
            <input type="password" v-model="password" required>
            <br>
            <label>Nickname:</label>
            <input type="text" v-model="nickname" required>
            <br>
            <button type="submit">注册</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            email: '',
            password: '',
            nickname: ''
        }
    },
    methods: {
        async register() {
            try {
                const response = await axios.post('http://127.0.0.1:31415/api/v1/user/register', {
                    email: this.email,
                    password: this.password,
                    nickname: this.nickname
                })
                console.log(response.data)
                // handle successful registration here
            } catch (error) {
                console.error(error)
                // handle registration error here
            }
        }
    }
}
</script>
