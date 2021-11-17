<template>
  <div class="page-main">
    <base-button white @click="showModal">Налоговый вычет</base-button>
    <tax-deduction-modal
      v-if="isModalOpened"
      @close="closeModal"
    ></tax-deduction-modal>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import BaseButton from "@/components/BaseButton";
import TaxDeductionModal from "./components/TaxDeductionModal/TaxDeductionModal";

export default defineComponent({
  name: "PageMain",
  components: { TaxDeductionModal, BaseButton },
  setup() {
    const isModalOpened = ref(false);
    const showModal = () => {
      isModalOpened.value = true;
    };
    const closeModal = () => {
      isModalOpened.value = false;
    };
    return { isModalOpened, showModal, closeModal };
  },
});
</script>
<style lang="scss" scoped>
.page-main {
}
</style>
