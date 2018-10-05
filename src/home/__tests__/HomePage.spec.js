import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils';
import VueRouter from 'vue-router';
import HomePage from '../HomePage.vue';

const localVue = createLocalVue();
localVue.use(VueRouter);

describe('HomePage', () => {
  it('renders props.msg when passed', () => {
    const msg = 'New message';
    const wrapper = shallowMount(HomePage, {
      localVue,
      propsData: { msg },
    });
    expect(wrapper.find('h1').text()).toBe(msg);
  });

  it('renders a default value for props.msg', () => {
    const wrapper = shallowMount(HomePage, {
      localVue,
    });
    expect(wrapper.find('h1').text()).toBe('Welcome!');
  });

  it('returns the correct route path with props.to', () => {
    const wrapper = shallowMount(HomePage, {
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    expect(wrapper.find(RouterLinkStub).props().to).toEqual({ name: 'Build' });
  });
});
