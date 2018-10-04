import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import HomePage from '../HomePage.vue';

const localVue = createLocalVue();
localVue.use(VueRouter);

const router = new VueRouter();

describe('HomePage.vue', () => {
  it('renders a prop message when passed', () => {
    const msg = 'test message';
    const wrapper = shallowMount(HomePage, {
      localVue,
      router,
      propsData: { msg },
    });
    expect(wrapper.text().match(msg));
  });
});
