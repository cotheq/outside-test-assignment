<template>
  <BaseModal class="tax-deduction-modal">
    <div class="tax-deduction-modal__content">
      <h2 class="tax-deduction-modal__caption">Налоговый вычет</h2>
      <div class="tax-deduction-modal__description">
        Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер
        налогового вычета составляет не более 13% от своего официального
        годового дохода.
      </div>
    </div>
  </BaseModal>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import BaseModal from "@/components/BaseModal";
export default defineComponent({
  name: "TaxDeductionModal",
  components: { BaseModal },
});
</script>
<style lang="scss" scoped>
.tax-deduction-modal {
  &__caption {
    margin-bottom: 16px;
  }
  &__description {
    color: var(--color-gray-text);
  }
}
</style>
