<template>
  <BaseModal class="tax-deduction-modal">
    <h2 class="tax-deduction-modal__caption">Налоговый вычет</h2>
    <div class="tax-deduction-modal__description">
      Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер
      налогового вычета составляет не более 13% от своего официального годового
      дохода.
    </div>
    <base-button class="tax-deduction-modal__button __full-width">
      Добавить
    </base-button>
  </BaseModal>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import BaseModal from "@/components/BaseModal";
import BaseButton from "@/components/BaseButton";
export default defineComponent({
  name: "TaxDeductionModal",
  components: { BaseModal, BaseButton },
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
  &__button {
    margin-top: auto;
  }
}
</style>
