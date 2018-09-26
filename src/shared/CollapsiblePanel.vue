<template>
  <div>
    <div class="header">
      <span v-if="open" @click="open = !open">&#x25B2; Collapse</span>
      <span v-if="!open" @click="open = !open">&#x25BC; Expand</span>
    </div>
    <slot v-if="open"></slot>
  </div>
</template>

<script>
export default {
  name: 'CollapsiblePanel',
  data() {
    return {
      open: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  background: #bbb;
  padding: 3px;
  cursor: pointer;
}
</style>
