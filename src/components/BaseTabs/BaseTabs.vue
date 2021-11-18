<template>
  <div class="base-tabs">
    <div
      v-for="(tab, i) in tabs"
      :key="i"
      class="base-tabs__item"
      :class="activeTabIndex === i ? '__active' : ''"
      @click="onClick(i)"
    >
      {{ tab }}
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "BaseTabs",
  props: {
    tabs: { type: Array as () => string[], required: true },
    activeTabIndex: { type: Number, default: -1 },
  },
  setup(props, { emit }) {
    const onClick = (index: number) => emit("selectTab", index);
    return { onClick };
  },
});
</script>
<style lang="scss" scoped>
.base-tabs {
  display: flex;
  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px 12px;
    border-radius: 50px;
    height: 36px;
    background: var(--color-gray-900);
    cursor: pointer;
    margin-right: 8px;
    color: var(--color-gray-dark);
    &:last-child {
      margin-right: 0;
    }
    &.__active {
      background: var(--gradient-red);
      color: var(--color-white);
    }
  }
}
</style>
