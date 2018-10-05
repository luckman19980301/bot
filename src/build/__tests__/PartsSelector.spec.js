import { mount, shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils';
import VueRouter from 'vue-router';
import pinDirective from '../../shared/pin-directive';
import PartsSelector from '../PartsSelector.vue';

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.directive('pin', pinDirective);

describe('PartsSelector.vue', () => {
  const requiredProps = {
    position: 'top',
    parts: ['heads', 'arms'],
  };

  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(PartsSelector, {
      localVue,
      propsData: {
        ...requiredProps,
      },
    });
    expect(wrapper.contains('button')).toBe(true);
  });

  it('returns the correct route path with props.to', () => {
    const wrapper = mount(PartsSelector, {
      localVue,
      propsData: {
        ...requiredProps,
      },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    expect(wrapper.find(RouterLinkStub).props().to).toEqual({
      name: 'Parts',
      params: {
        id: undefined,
        partType: undefined,
      },
    });
  });
});
