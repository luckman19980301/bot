import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import pinDirective from '../../shared/pin-directive';
import PartsSelector from '../PartsSelector.vue';

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.directive('pin', pinDirective);

describe('PartsSelector.vue', () => {
  it('renders props.msg when passed', () => {
    const position = 'top';
    const parts = ['heads', 'arms'];
    const wrapper = shallowMount(PartsSelector, {
      localVue,
      propsData: {
        position,
        parts,
      },
    });
    expect(wrapper.contains('button')).toBe(true);
  });
});
