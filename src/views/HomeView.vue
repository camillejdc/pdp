<template>
  <div></div>
</template>

<script>
export default {
  created() {
    // just redirect to the first product
    this.$router.replace(
      "/products/" + this.$store.state.products.items[0].sku
    );
  },
};
</script>
