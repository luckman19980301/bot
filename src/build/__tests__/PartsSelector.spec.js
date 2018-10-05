import { mount, shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils';
import VueRouter from 'vue-router';
import pinDirective from '../../shared/pin-directive';
import PartsSelector from '../PartsSelector.vue';

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.directive('pin', pinDirective);

describe('PartsSelector', () => {
  const requiredProps = {
    position: 'top',
    parts: ['heads', 'arms'],
  };

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

  it('renders two buttons', () => {
    const wrapper = shallowMount(PartsSelector, {
      localVue,
      propsData: {
        ...requiredProps,
      },
    });
    const btns = wrapper.findAll('button');
    expect(btns.length).toEqual(2);
  });

  it('renders the `previous` button', () => {
    const wrapper = shallowMount(PartsSelector, {
      localVue,
      propsData: {
        ...requiredProps,
      },
    });
    const btns = wrapper.findAll('button');
    const prevBtn = btns.at(0);
    expect(prevBtn.attributes('id')).toBe('prevBtn');
    expect(prevBtn.classes('prev-selector')).toBe(true);
  });

  it('renders the `next` button', () => {
    const wrapper = shallowMount(PartsSelector, {
      localVue,
      propsData: {
        ...requiredProps,
      },
    });
    const btns = wrapper.findAll('button');
    const nextBtn = btns.at(1);
    expect(nextBtn.attributes('id')).toBe('nextBtn');
    expect(nextBtn.classes('next-selector')).toBe(true);
  });
});
