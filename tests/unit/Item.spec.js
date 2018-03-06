import { mount, shallow, createLocalVue } from "@vue/test-utils";
import Vuex from 'vuex';
import List from "@/views/List.vue";

// localVue is a scoped Vue constructor that we can make changes to without affecting the global Vue constructor.
// https://vue-test-utils.vuejs.org/en/guides/using-with-vuex.html
const localVue = createLocalVue();
localVue.use(Vuex);

describe("List.vue", () => {
  let actions, store, getters, cmp;
  beforeEach(() => {
    actions = {
      addTask: jest.fn(),
    };
    getters = {
      getItems: () => {
        [
          {
            is_done: false,
            title: "Task 1"
          }
        ]
      }
    };
    store = new Vuex.Store({
      actions,
      getters
    });
    cmp = shallow(List, {
      actions,
      getters
    });
  })

  it("calls addTask when input value is set and the button is clicked", () => {
    // UI test. Use mount()
    const wrapper = mount(List, { store, localVue });
    const input = wrapper.find('input');
    input.element.value = "New Dummy Task";
    const button = wrapper.find('button');
    button.trigger('click');
    expect(actions.addTask).toHaveBeenCalled();
  })

  it('has correct data', () => {
    // Unit test
    expect(typeof cmp.vm.inputTitle).toEqual("string");
    expect(cmp.vm.inputTitle).toEqual("");
  })

  it('has correct methods from vuex', () => {
    // Integration-ish test
    expect(typeof cmp.vm.addTask).toEqual("function");
  })
});
