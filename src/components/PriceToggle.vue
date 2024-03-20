<template>
  <div class="w-2/5 xl:w-1/4 price-toggle">
    <label
      for="themeSwitcherOne"
      class="relative inline-flex items-center justify-center bg-white rounded-md cursor-pointer select-none themeSwitcherTwo shadow-two dark:bg-dark-2"
    >
      <span
        :class="{ active: value == 'business' }"
        @click="value = 'business'"
      >
        Business customer
      </span>
      <span
        :class="{ active: value == 'private' }"
        @click="value = 'private'"
      >
        Private customer
      </span>
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "business",
    };
  },
};
</script>

<style scoped lang="scss">
.active {
  color: red;
}
</style>
