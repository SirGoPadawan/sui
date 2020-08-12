<template>
  <label class="sui-textfield" :class="{ 'sui-textfield_disabled': disabled }">
    <p class="sui-textfield__title">{{ title }}</p>
    <input
      :placeholder="placeholder"
      class="sui-textfield__input"
      :disabled="disabled"
      :pattern="pattern"
    />
  </label>
</template>
<script>
export default {
  props: ["disabled", "title", "pattern", "placeholder"],
};
</script>
