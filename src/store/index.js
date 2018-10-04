import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import robotsModule from './modules/robots';
import usersModule from './modules/users';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    foo: 'root-foo',
    showForTesting: false,
  },
  plugins: [createPersistedState()],
  modules: {
    robots: robotsModule,
    users: usersModule,
  },
});
