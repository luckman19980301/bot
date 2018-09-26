<template>
  <div class="content">
    <button class="add-to-cart" @click="addToCart">Add to Cart</button>
    <div class="top-row">
      <div :class="[saleBorderClass, 'top', 'part']">
        <div class="robot-name">
          {{ selectedRobot.head.title }}
          <span v-if="selectedRobot.head.onSale" class="sale">Sale!</span>
        </div>
        <img :src="selectedRobot.head.src" title="head"/>
        <button @click="selectPrevHead" class="prev-selector">&#9668;</button>
        <button @click="selectNextHead" class="next-selector">&#9658;</button>
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <img :src="selectedRobot.leftArm.src" title="left arm"/>
        <button @click="selectPrevLeftArm" class="prev-selector">&#9650;</button>
        <button @click="selectNextLeftArm" class="next-selector">&#9660;</button>
      </div>
      <div class="center part">
        <img :src="selectedRobot.torso.src" title="torso"/>
        <button @click="selectPrevTorso" class="prev-selector">&#9668;</button>
        <button @click="selectNextTorso" class="next-selector">&#9658;</button>
      </div>
      <div class="right part">
        <img :src="selectedRobot.rightArm.src" title="right arm"/>
        <button @click="selectPrevRightArm" class="prev-selector">&#9650;</button>
        <button @click="selectNextRightArm" class="next-selector">&#9660;</button>
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part">
        <img :src="selectedRobot.base.src" title="bases"/>
        <button @click="selectPrevBase" class="prev-selector">&#9650;</button>
        <button @click="selectNextBase" class="next-selector">&#9660;</button>
      </div>
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
import availableParts from '../data/parts';
import createdHookMixin from './created-hook-mixin';

export default {
  name: 'RobotBuilder',
  data() {
    return {
      availableParts,
      cart: [],
      selectedHeadIndex: 0,
      selectedLeftArmIndex: 0,
      selectedTorsoIndex: 0,
      selectedRightArmIndex: 0,
      selectedBaseIndex: 0,
    };
  },
  mixins: [createdHookMixin],
  computed: {
    selectedRobot() {
      return {
        head: availableParts.heads[this.selectedHeadIndex],
        leftArm: availableParts.arms[this.selectedLeftArmIndex],
        torso: availableParts.torsos[this.selectedTorsoIndex],
        rightArm: availableParts.arms[this.selectedRightArmIndex],
        base: availableParts.bases[this.selectedBaseIndex],
      };
    },
    saleBorderClass() {
      return this.selectedRobot.head.onSale ? 'sale-border' : '';
    },
  },
  methods: {
    getPrevValidIndex(index, length) {
      const deprecatedIndex = index - 1;
      return deprecatedIndex < 0 ? length - 1 : deprecatedIndex;
    },
    getNextValidIndex(index, length) {
      const incrementedIndex = index + 1;
      return incrementedIndex > length - 1 ? 0 : incrementedIndex;
    },
    // Prev
    selectPrevHead() {
      this.selectedHeadIndex = this.getPrevValidIndex(
        this.selectedHeadIndex,
        availableParts.heads.length,
      );
    },
    selectPrevLeftArm() {
      this.selectedLeftArmIndex = this.getPrevValidIndex(
        this.selectedLeftArmIndex,
        availableParts.arms.length,
      );
    },
    selectPrevTorso() {
      this.selectedTorsoIndex = this.getPrevValidIndex(
        this.selectedTorsoIndex,
        availableParts.torsos.length,
      );
    },
    selectPrevRightArm() {
      this.selectedRightArmIndex = this.getPrevValidIndex(
        this.selectedRightArmIndex,
        availableParts.arms.length,
      );
    },
    selectPrevBase() {
      this.selectedBaseIndex = this.getPrevValidIndex(
        this.selectedBaseIndex,
        availableParts.bases.length,
      );
    },
    // Next
    selectNextHead() {
      this.selectedHeadIndex = this.getNextValidIndex(
        this.selectedHeadIndex,
        availableParts.heads.length,
      );
    },
    selectNextLeftArm() {
      this.selectedLeftArmIndex = this.getNextValidIndex(
        this.selectedLeftArmIndex,
        availableParts.arms.length,
      );
    },
    selectNextTorso() {
      this.selectedTorsoIndex = this.getNextValidIndex(
        this.selectedTorsoIndex,
        availableParts.torsos.length,
      );
    },
    selectNextRightArm() {
      this.selectedRightArmIndex = this.getNextValidIndex(
        this.selectedRightArmIndex,
        availableParts.arms.length,
      );
    },
    selectNextBase() {
      this.selectedBaseIndex = this.getNextValidIndex(
        this.selectedBaseIndex,
        availableParts.bases.length,
      );
    },
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
  width: 220px;
  right: 30px;
  padding: 3px;
  font-size: 16px;
}
td, th {
  text-align: left;
  padding: 5px;
  padding-right: 20px;
}
.cost {
  text-align: right;
}
</style>
