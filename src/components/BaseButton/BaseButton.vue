<template>
  <button
    class="base-button"
    :class="white ? '__white' : ''"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "BaseButton",
  props: {
    white: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
  },
});
</script>
<style lang="scss" scoped>
.base-button {
  outline: none;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  color: var(--color-white);
  background: var(--gradient-red);
  box-shadow: var(--shadow-red);
  &:hover,
  &:active {
    background: var(--color-red);
  }

  &.__white {
    background: none;
    border: 1px solid var(--color-white);
    box-shadow: none;
    &:hover,
    &:active {
      background: var(--color-white);
      color: var(--color-black);
    }
  }

  &:disabled {
    &,
    &:hover,
    &:active {
      border: none;
      background: var(--color-gray-900);
      box-shadow: none;
      color: var(--color-white);
    }
  }
}
</style>
