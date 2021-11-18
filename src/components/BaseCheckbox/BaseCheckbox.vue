<template>
  <div
    class="base-checkbox"
    :class="modelValue ? '__checked' : ''"
    @click="onClick"
  >
    <div v-if="modelValue" class="base-checkbox__check">
      <svg
        width="14"
        height="11"
        viewBox="0 0 14 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- prettier-ignore -->
        <path d="M4.45455 8.70149L1.11364 5.25373L0 6.40299L4.45455 11L14 1.14925L12.8864 0L4.45455 8.70149Z" fill="currentColor"/>
      </svg>
    </div>
  </div>
</template>
<style></style>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean, required: true },
  },
  setup(props, { emit }) {
    const onClick = () => {
      console.log("s");
      emit("update:modelValue", !props.modelValue);
    };
    return { onClick };
  },
});
</script>
<style lang="scss">
.base-checkbox {
  width: 20px;
  height: 20px;
  border-radius: 6px;
  background: var(--color-white);
  border: 1px solid var(--color-gray-800);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  &:hover {
    border: 1px solid var(--color-black);
  }
  &.__checked {
    border: none;
  }
  &__check {
    border-radius: 6px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: var(--color-white);
    background: var(--gradient-red);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
