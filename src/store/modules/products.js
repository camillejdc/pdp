import response from "../../stubs/products.json";

const state = {
  items: [],
};

const getters = {
  getBySku: (state) => (sku) => {
    return state.items.find((product) => product.sku === sku);
  },
};

const mutations = {
  setProducts(state, products) {
    state.items = products;
  },
};

const actions = {
  fetch({ commit }) {
    // simulate API call here, then commit the mutation
    commit("setProducts", response);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
