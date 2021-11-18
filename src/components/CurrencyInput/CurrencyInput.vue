<template>
  <input ref="inputRef" type="text" :value="formattedValue" />
</template>

<script lang="ts">
import { useCurrencyInput } from "vue-currency-input";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CurrencyInput",
  props: {
    modelValue: Number,
  },
  setup(props) {
    const { formattedValue, inputRef } = useCurrencyInput({
      currency: "RUB",
      precision: 0,
      locale: "ru-RU",
      hideCurrencySymbolOnFocus: false,
      hideGroupingSeparatorOnFocus: false,
    });

    return { inputRef, formattedValue };
  },
});
</script>
