<template>
  <section class="container">
    <v-input :placeholder="'Сергей Сергиев'" :title="'ФИО'" :disabled="false" />
    <v-select :title="'Please choose'" />
  </section>
</template>
<script>
export default {
  components: {
    "v-input": () => import("../UI/VInput"),
    "v-select": () => import("../UI/VSelect"),
  },
};
</script>
