<template>
  <div class="currency-input">
    <label v-if="label" class="currency-input__label" :for="name">
      {{ label }}
    </label>
    <input
      class="currency-input__input"
      :class="!valid ? '__error' : ''"
      ref="inputRef"
      type="text"
      :name="name"
      :placeholder="placeholder"
      :value="formattedValue"
      @blur="$emit('blur')"
    />
    <span v-if="errorMessage && !valid" class="currency-input__error-message">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script lang="ts">
import { useCurrencyInput } from "vue-currency-input";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CurrencyInput",
  props: {
    name: { type: String, required: true },
    label: { type: String, default: "" },
    placeholder: { type: String, default: "" },
    modelValue: { type: Number },
    valid: { type: Boolean, default: true },
    required: { type: Boolean, default: false },
    errorMessage: { type: String, default: "" },
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
<style lang="scss">
.currency-input {
  display: flex;
  flex-flow: column;
  &__input {
    color: var(--color-black);
    border: 1px solid var(--color-gray-800);
    outline: none;
    padding: 8px 10px;
    font-size: 14px;
    border-radius: 3px;
    &:hover {
      border: 1px solid var(--color-black);
    }
    &::placeholder {
      color: var(--color-gray-900);
    }
    &.__error {
      border: 1px solid var(--color-red);
    }
  }
  &__label {
    margin-bottom: 8px;
    font-weight: 500;
  }
  &__error-message {
    color: var(--color-red);
    margin-top: 4px;
    font-size: 10px;
  }
}
</style>
