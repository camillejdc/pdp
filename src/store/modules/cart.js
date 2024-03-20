import Vue from "vue";

const state = {
  items: [],
};

const getters = {
  count: (state) => state.items.length,
};

const mutations = {
  add(state, { product, quantity }) {
    const cartItem = state.items.find(
      (item) => item.product.sku === product.sku
    );
    if (cartItem) {
      cartItem.quantity = quantity;
      return;
    }
    state.items.push({ product, quantity });
  },
};

const actions = {
  add({ commit }, item) {
    // do API call here, then commit the mutation
    commit("add", item);
    console.log("Added to cart", {
      sku: item.product.sku,
      quantity: item.quantity,
    });
    Vue.$toast.success(`The product ${item.product.name} has been to cart`);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
