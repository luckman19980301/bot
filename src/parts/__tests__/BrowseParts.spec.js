import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import BrowseParts from '../BrowseParts.vue';

const localVue = createLocalVue();
localVue.use(VueRouter);

describe('BrowseParts', () => {
  it('renders a title', () => {
    const wrapper = shallowMount(BrowseParts, {
      localVue,
    });
    const title = wrapper.find('h1');
    expect(title.text()).toMatch('Browse Parts');
  });
});
