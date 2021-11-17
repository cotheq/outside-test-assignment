<template>
  <div class="base-modal">
    <div class="base-modal__content" v-click-outside="close">
      <div class="base-modal__close" @click="close">
        <!-- prettier-ignore -->
        <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="m11.423 9 6.054-6.055A1.712 1.712 0 1 0 15.055.523L9 6.577 2.945.523A1.713 1.713 0 1 0 .523 2.945l6.054 6.054-6.054 6.056a1.713 1.713 0 1 0 2.422 2.422l6.054-6.054 6.056 6.054A1.711 1.711 0 0 0 18 16.272a1.71 1.71 0 0 0-.523-1.217L11.423 9v.002Z"/></svg>
      </div>
      <slot />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "BaseModal",
  directives: {
    clickOutside: {
      beforeMount(el, binding) {
        el.clickOutsideEvent = function (event: any) {
          if (el.offsetParent === event.target) {
            binding.value(event, el);
          }
        };
        document.body.addEventListener("click", el.clickOutsideEvent);
      },
      unmounted(el) {
        document.body.removeEventListener("click", el.clickOutsideEvent);
      },
    },
  },
  setup(props, { emit }) {
    const close = () => {
      emit("close");
    };
    return { close };
  },
});
</script>
<style lang="scss" scoped>
.base-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  &__content {
    padding: 32px;
    border-radius: 30px;
    background: white;
    position: relative;
    width: 100%;
    max-width: 453px;

    @media (max-width: 453px) {
      height: 100%;
      border-radius: 0;
    }
  }
  &__close {
    content: "";
    color: var(--color-red);
    width: 18px;
    height: 18px;
    cursor: pointer;
    position: absolute;
    top: 27px;
    right: 23px;
  }
}
</style>
