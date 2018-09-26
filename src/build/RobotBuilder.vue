<template>
  <div class="content">
    <div class="preview">
      <collapsible-panel>
        <div class="preview-content">
          <div class="top-row">
            <img :src="selectedRobot.head.src" />
          </div>
          <div class="middle-row">
            <img :src="selectedRobot.leftArm.src" class="rotate-left" />
            <img :src="selectedRobot.torso.src" />
            <img :src="selectedRobot.rightArm.src" class="rotate-right" />
          </div>
          <div class="bottom-row">
            <img :src="selectedRobot.base.src"/>
          </div>
        </div>
      </collapsible-panel>
      <button class="add-to-cart" @click="addToCart">Add to Cart</button>
    </div>
    <div class="top-row">
      <div class="robot-name">
        {{ selectedRobot.head.title }}
        <span v-if="selectedRobot.head.onSale" class="sale">Sale!</span>
      </div>
      <parts-selector
        :class="[saleBorderClass, 'top', 'part']"
        :parts="availableParts.heads"
        position="top"
        @partSelected="part => selectedRobot.head = part"
      />
    </div>
    <div class="middle-row">
      <parts-selector
        :parts="availableParts.arms"
        position="left"
        @partSelected="part => selectedRobot.leftArm = part"
      />
      <parts-selector
        :parts="availableParts.torsos"
        position="center"
        @partSelected="part => selectedRobot.torso = part"
      />
      <parts-selector
        :parts="availableParts.arms"
        position="right"
        @partSelected="part => selectedRobot.rightArm = part"
      />
    </div>
    <div class="bottom-row">
      <parts-selector
        :parts="availableParts.bases"
        position="bottom"
        @partSelected="part => selectedRobot.base = part"
      />
    </div>
    <div v-if="cart.length > 0">
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Robot</th>
            <th class="cost">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(robot, index) in cart" :key="index">
            <td>{{ robot.head.title }}</td>
            <td class="cost">{{ robot.cost }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import createdHookMixin from './created-hook-mixin';
import availableParts from '../data/parts';

import CollapsiblePanel from '../shared/CollapsiblePanel.vue';
import PartsSelector from './PartsSelector.vue';

export default {
  name: 'RobotBuilder',
  components: {
    'collapsible-panel': CollapsiblePanel,
    'parts-selector': PartsSelector,
  },
  data() {
    return {
      availableParts,
      cart: [],
      position: '',
      selectedRobot: {
        head: {},
        leftArm: {},
        torso: {},
        rightArm: {},
        base: {},
      },
    };
  },
  mixins: [createdHookMixin],
  computed: {
    saleBorderClass() {
      return this.selectedRobot.head.onSale ? 'sale-border' : '';
    },
  },
  methods: {
    addToCart() {
      const robot = this.selectedRobot;
      const cost = robot.head.cost +
                   robot.leftArm.cost +
                   robot.torso.cost +
                   robot.rightArm.cost +
                   robot.base.cost;
      this.cart.push(Object.assign({}, robot, { cost }));
    },
  },
};
</script>

<!-- to sort -->
<style lang="scss" scoped>
.part {
  position: relative;
  width: 165px;
  height: 165px;
  border: 3px solid #aaa;
}
.part img {
  width: 165px;
}
.top-row {
  display: flex;
  justify-content: space-around;
}
.middle-row {
  display: flex;
  justify-content: center;
}
.bottom-row {
  display: flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector,
.center .next-selector {
  opacity: 0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
.robot-name {
  position: absolute;
  top: -25px;
  text-align: center;
  width: 100%;
}
.sale {
  color: red;
}
.sale-border {
  border: 3px solid red;
}
.content {
  position: relative;
}
.add-to-cart {
  position: absolute;
  left: 5px;
  width: 210px;
  padding: 3px;
  font-size: 16px;
}
table {
  margin: 0 auto;
}
td, th {
  text-align: left;
  padding: 5px;
  padding-right: 20px;
}
.cost {
  text-align: right;
}
.preview {
  position: absolute;
  top: -20px;
  right: 0;
  width: 210px;
  height: 210px;
  padding: 5px;
}
.preview-content {
  border: 1px solid #999;
}
.preview img {
  width: 50px;
  height: 50px;
}
.rotate-right {
  transform: rotate(90deg);
}
.rotate-left {
  transform: rotate(-90deg);
}
</style>
