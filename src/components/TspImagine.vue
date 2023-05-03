<template>
    <div>
        <h2>算法可视化</h2>
        <form @submit.prevent="tsp">
            <label>gas/greedy/dijkstra</label>
            <input type="name" v-model="name" required />
            <br />
            <label>坐标</label>
            <input type="cpsStr" v-model="cpsStr" required />
            <br />
            <button type="submit">生成</button>
        </form>
    </div>

    <img src="http://localhost:31415/img/gas.png" alt="gas.png">
    <img src="http://localhost:31415/img/greedy.png" alt="greedy.png">
    <img src="http://localhost:31415/img/dijkstra.png" alt="dijkstra.png">
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            name: "",
            cpsStr: "",
        };
    },
    methods: {
        async register() {
            try {
                let cpsArray = this.cpsStr.split(" ")
                let params = new URLSearchParams();
                for (let key in cpsArray)
                    params.append("cp", cpsArray[key]);

                let headersList = {
                    Accept: "*/*",
                };

                let reqOptions = {
                    url: "http://127.0.0.1:31415/api/v1/img/" + this.name,
                    method: "GET",
                    headers: headersList,
                    params: params,
                };

                let response = await axios.request(reqOptions);
                console.log(response.data);

                // handle successful registration here
            } catch (error) {
                console.error(error);
                // handle registration error here
            }
        },
    },
};
</script>

<style scoped>
</style>
