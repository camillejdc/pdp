<template>
  <div class="input-num-wrapper">
    <div class="input-num-wrapper__quantity-handler">
      <button class="icon-minus" @click="decrement">-</button>
      <input type="number" min="1" v-model="localValue" />
      <button class="icon-plus" @click="localValue++">+</button>
    </div>
  </div>
</template>

<script>
import HasLocalValue from "../mixins/HasLocalValue";

export default {
  mixins: [HasLocalValue],

  methods: {
    decrement() {
      if (this.localValue > 1) {
        this.localValue--;
      }
    },
  }
};
</script>
