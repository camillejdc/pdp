export default {
  props: ["value"],

  data() {
    return {
      localValue: this.value,
    };
  },

  watch: {
    value(value) {
      this.localValue = value;
    },
    localValue(localValue) {
      this.$emit("input", localValue);
    },
  },
};
