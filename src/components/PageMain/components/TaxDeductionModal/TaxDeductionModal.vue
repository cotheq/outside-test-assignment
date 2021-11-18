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
    <currency-input v-model="salary" />
  </BaseModal>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import BaseModal from "@/components/BaseModal";
import BaseButton from "@/components/BaseButton";
import CurrencyInput from "@/components/CurrencyInput";
export default defineComponent({
  name: "TaxDeductionModal",
  components: { CurrencyInput, BaseModal, BaseButton },
  setup() {
    const salary = ref<number | null>(null);
    const ff = () => console.log(salary.value);
    return { salary };
  },
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
