import Vue from "vue";

const state = {
  items: [],
};

const getters = {
  count: (state) => state.items.length,

  added: (state) => (sku) => {
    return state.items.some((item) => item.sku === sku);
  },
};

const mutations = {
  add(state, item) {
    state.items.push(item);
  },

  remove(state, item) {
    state.items = state.items.filter((i) => i.sku !== item.sku);
  },
};

const actions = {
  add({ commit }, item) {
    // do API call here, then commit the mutation
    commit("add", item);
    Vue.$toast.success(
      `The product ${item.name} has been added to the watchlist`
    );
  },

  remove({ commit }, item) {
    // do API call here, then commit the mutation
    commit("remove", item);
    Vue.$toast.success(
      `The product ${item.name} has been removed from the watchlist`
    );
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
