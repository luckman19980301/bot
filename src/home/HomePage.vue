<template>
  <div class="home">
    <div>
      <img class="robot" src="../assets/robot-home.png" aria-hidden="true">
    </div>
    <div class="get-started">
      <router-link to="/build">Get Started!</router-link> Build your first robot!
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String,
  },
  created() {
    console.log(process.env.VUE_APP_MSG);
  },
};
</script>

<style lang="scss" scoped>
.home {
  text-align: center;
}
.robot {
  height: 300px;
}
</style>
