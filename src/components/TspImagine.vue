
<template>
  <div>
    <h2>算法可视化</h2>
    <form @submit.prevent="generateImage">
      <label>算法类型(gas/greedy/dijkstra)</label>
      <input type="text" v-model="algorithm" required />
      <br />
      <label>坐标(格式为"x1,y1 x2,y2 ...")</label>
      <input type="text" v-model="coordinates" required />
      <br />
      <button type="submit">生成</button>
    </form>
    <div v-if="imageUrl">
      <img :src="imageUrl" alt="algorithm visualization" />
      <button @click="refreshImage">刷新</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      algorithm: "",
      coordinates: "",
      imageUrl: "",
    };
  },
  methods: {
    async generateImage() {
      try {
        const params = {
          cp: this.coordinates,
        };
        const options = {
          params,
        };
        const response = await axios.get(
          `http://127.0.0.1:31415/api/v1/img/${this.algorithm}`,
          options
        );
        this.imageUrl = response.data.path;
      } catch (error) {
        console.error(error);
      }
    },
    async refreshImage() {
      try {
        const params = {
          cp: this.coordinates,
        };
        const options = {
          params,
        };
        const response = await axios.get(
          `http://127.0.0.1:31415/api/v1/img/${this.algorithm}`,
          options
        );
        this.imageUrl = response.data.path;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
