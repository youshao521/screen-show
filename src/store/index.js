import Vuex from 'vuex';

import actions from './actions.js';
import getters from './getters.js';
import mutations from './mutations.js';
import state from './state.js';

export default function createStore() {
  return new Vuex.Store({
    actions,
    getters,
    mutations,
    state,
  })
}