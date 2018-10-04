<template>
  <div id="app">
    Root state: {{ rootFoo }}<br>
    Robot state: {{ robotsFoo }}<br>
    Users state: {{ usersFoo }}<br>

    Root getter state: {{ rootGetterFoo }}<br>
    Robot getter state: {{ robotsGetterFoo }}<br>
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <router-link :to="{ name: 'Home' }" class="nav-link" exact>
              <img class="logo" src="./assets/build-a-bot-logo.png">
              Build-a-bot!
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Build' }" class="nav-link" exact>
              Build
            </router-link>
          </li>
          <li class="nav-item cart">
            <router-link :to="{ name: 'Cart' }" class="nav-link" exact>
              Cart
            </router-link>
            <div class="cart__item">
              {{ cart.length }}
            </div>
          </li>
        </ul>
      </nav>
    </header>
    <div class="container">
      <aside class="aside">
        <router-view name="sidebar" />
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapState({
      rootFoo: 'foo',
      robotsFoo: state => state.robots.foo,
      usersFoo: state => state.users.foo,
    }),
    ...mapGetters({
      rootGetterFoo: 'foo',
      robotsGetterFoo: 'robots/foo',
    }),
    cart() {
      return this.$store.state.robots.cart;
    },
  },
};
</script>

<style lang="scss">
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}
</style>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
header {
  background-color: #999;
  width: 1184px;
  margin: 0 auto;
}
.container {
  display: flex;
  margin: 10px auto 0 auto;
  justify-content: center;
}
.aside {
  padding: 30px;
  background-color: #aaa;
  width: 100px;
  min-height: 300px;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.nav-item.cart {
  position: relative;
  margin-left: auto;
  border-right: none;
}
.cart__item {
  position: absolute;
  top: -5px;
  right: -9px;
  font-size: 18px;
  width: 20px;
  text-align: center;
  display: inline-block;
  border-radius: 100px;
  background-color: mediumseagreen;
}
.nav-link {
  text-decoration: none;
  color: inherit;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
main {
  padding: 30px;
  background-color: #fff;
  width: 964px;
  min-height: 300px;
}
.router-link-active {
  color: #fff;
}
</style>
