<template>
  <label class="sui-select">
    <p class="sui-select__title">{{ title }}</p>
    <select class="sui-select__items">
      <option class="sui-select__option">Один</option>
      <option class="sui-select__option">Два</option>
      <option class="sui-select__option">Три</option>
    </select>
  </label>
</template>
<script>
export default {
  props: ["title"],
};
</script>
>
