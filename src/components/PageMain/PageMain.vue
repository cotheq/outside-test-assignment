<template>
  <div class="page-main">
    <base-button>Налоговый вычет</base-button>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import BaseButton from "@/components/BaseButton/BaseButton";

export default defineComponent({
  name: "PageMain",
  components: { BaseButton },
});
</script>
<style lang="scss" scoped>
.page-main {
}
</style>
