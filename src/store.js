import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      count: 0,
      token: "default"
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    token (state, new_token) {
      state.token = new_token;
      console.log(state.token);
    }
  },
  actions: {
    fetchToken (context) {
      fetch("https://tenders.guru/api/hu/tenders/36077")
        .then((response) => console.log("response:", response))
        .catch(() => context.commit('token', 'abcd2fghijk'))
      // context.commit('increment')
    }
  }
});
