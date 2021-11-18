<template>
  <BaseModal class="tax-deduction-modal">
    <h2 class="tax-deduction-modal__caption">Налоговый вычет</h2>
    <div class="tax-deduction-modal__description __text-gray">
      Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер
      налогового вычета составляет не более 13% от своего официального годового
      дохода.
    </div>
    <currency-input
      class="tax-deduction-modal__salary"
      v-model="salary"
      name="salary"
      label="Ваша зарплата в месяц"
      placeholder="Введите данные"
      error-message="Поле обязательно для заполнения"
      :valid="validInput"
      @blur="onValidation"
    />
    <a class="tax-deduction-modal__calculate" @click="onCalculateClick">
      Рассчитать
    </a>
    <div
      v-if="earlyFunds.length > 0"
      class="tax-deduction-modal__early-funds-wrapper"
    >
      <span class="tax-deduction-modal__caption">
        Итого можете внести в качестве досрочных:
      </span>
      <div
        class="tax-deduction-modal__early-funds"
        :key="i"
        v-for="(v, i) in earlyFunds"
      >
        <base-checkbox
          class="tax-deduction-modal__checkbox"
          v-model="v.checked"
        />
        <div class="tax-deduction-modal__early-funds-text">
          {{
            `${v.value} ${pluralizeWord(["рубль", "рубля", "рублей"], v.value)}`
          }}
          &nbsp;
          <span class="__text-gray">в {{ i + 1 }}-й год</span>
        </div>
      </div>
    </div>
    <div class="tax-deduction-modal__caption">Что уменьшаем?</div>
    <base-tabs
      class="tax-deduction-modal__tabs"
      :tabs="tabs"
      :active-tab-index="activeTabIndex"
      @select-tab="onTabSelect"
    ></base-tabs>
    <base-button class="tax-deduction-modal__button __full-width">
      Добавить
    </base-button>
  </BaseModal>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import BaseModal from "@/components/BaseModal";
import BaseButton from "@/components/BaseButton";
import CurrencyInput from "@/components/CurrencyInput";
import BaseCheckbox from "@/components/BaseCheckbox";
import BaseTabs from "@/components/BaseTabs";
import { pluralizeWord } from "@/helpers/NumberHelper";

interface EarlyFundsValue {
  checked: boolean;
  value: number;
}

export default defineComponent({
  name: "TaxDeductionModal",
  components: { BaseCheckbox, CurrencyInput, BaseModal, BaseButton, BaseTabs },
  setup() {
    const salary = ref<number | null>(null);
    const validInput = ref(true);
    const earlyFunds = reactive<EarlyFundsValue[]>([]);
    const tabs: string[] = ["Платеж", "Срок"];
    const activeTabIndex = ref<number>(0);

    const calculate = (cost = 2_000_000) => {
      if (!salary.value) return;
      earlyFunds.splice(0);
      let years = 0;
      let maxDeduction = Math.min(cost, 2_000_000) * 0.13;
      while (maxDeduction > 0 && years < 100) {
        years += 1;
        const currentYearDeduction = Math.min(
          maxDeduction,
          salary.value * 0.13 * 12
        );
        maxDeduction -= currentYearDeduction;
        earlyFunds.push({
          value: Math.round(currentYearDeduction),
          checked: true,
        });
      }
    };

    const onValidation = () => {
      validInput.value = (salary.value ?? 0) > 0;
    };
    const onCalculateClick = () => {
      onValidation();
      if (!validInput.value) return;
      calculate();
    };

    const onTabSelect = (index: number) => {
      activeTabIndex.value = index;
    };

    return {
      salary,
      validInput,
      onValidation,
      onCalculateClick,
      earlyFunds,
      pluralizeWord,
      tabs,
      activeTabIndex,
      onTabSelect,
    };
  },
});
</script>
<style lang="scss" scoped>
.tax-deduction-modal {
  &__caption {
    margin-bottom: 16px;
  }
  &__description {
    margin-bottom: 24px;
  }
  &__button {
    margin-top: auto;
  }
  &__calculate {
    margin-top: 8px;
    margin-bottom: 16px;
  }
  &__caption {
    font-weight: 500;
  }
  &__early-funds-wrapper {
    margin-bottom: 24px;
  }
  &__early-funds {
    display: flex;
    padding: 16px 0;
    border-bottom: 1px solid var(--color-gray-800);
  }
  &__early-funds-text {
    display: flex;
    align-items: end;
  }
  &__checkbox {
    margin-right: 12px;
  }
  &__tabs {
    margin-bottom: 40px;
  }
}
</style>
