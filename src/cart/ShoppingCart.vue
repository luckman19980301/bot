<template>
  <div>
    <h1>Cart</h1>
    <table>
      <thead>
        <tr>
          <th class="robot-title">
            Robot
          </th>
          <th class="cost">
            Cost
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(robot, index) in cart" :key="index">
          <td class="robot-title">
            {{ robot.head.title }}
          </td>
          <td class="cost">
            {{ robot.cost | currency('£') }}
          </td>
        </tr>
      </tbody>
    </table>
    <h2 class="sale-items">You saved money on these robots:</h2>
    <table>
      <thead>
        <tr>
          <th class="robot-title">
            Robot
          </th>
          <th class="cost">
            Cost
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(robot, index) in cartSaleItems" :key="index">
          <td class="robot-title">
            {{ robot.head.title }}
          </td>
          <td class="cost">
            {{ robot.cost | currency('£') }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import currencyFilter from '../shared/currency-filter';

export default {
  name: 'Cart',
  filters: {
    currency: currencyFilter,
  },
  computed: {
    cart() {
      return this.$store.state.robots.cart;
    },
    cartSaleItems() {
      return this.$store.getters['robots/cartSaleItems'];
    },
  },
};
</script>

<style lang="scss" scoped>
h1, h2 {
  text-align: left;
}
td, th {
  padding: 5px;
}
.robot-title {
  text-align: left;
  padding-right: 200px;
}
.cost {
  text-align: right;
}
.sale-items {
  margin-top: 50px;
  font-size: 18px;
  color: red;
}
</style>
