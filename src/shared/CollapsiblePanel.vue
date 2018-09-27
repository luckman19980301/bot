<template>
  <div>
    <div class="collapsible-header">
      <span v-if="open" class="collapsible-header__toggle" @click="open = !open">
        &#x25B2; Collapse
      </span>
      <span v-if="!open" class="collapsible-header__toggle" @click="open = !open">
        &#x25BC; Expand
      </span>
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
.collapsible-header {
  background: #bbb;
  padding: 3px;
  cursor: pointer;
  &__toggle {
    display: block;
  }
}
</style>
