<template>
  <page-main />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageMain from "@/components/PageMain/PageMain.vue";
import "@/styles/style.scss";

export default defineComponent({
  name: "App",
  components: {
    PageMain,
  },
});
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--gradient-red);
}
</style>
