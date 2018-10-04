import Vue from 'vue';
import Vuex from 'vuex';

import robotsModule from './modules/robots';
import usersModule from './modules/users';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    foo: 'root-foo',
    showForTesting: false,
  },
  modules: {
    robots: robotsModule,
    users: usersModule,
  },
});
