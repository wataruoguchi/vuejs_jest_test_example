import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from 'vuex';
import Item from "@/components/Item.vue";

// localVue is a scoped Vue constructor that we can make changes to without affecting the global Vue constructor.
// https://vue-test-utils.vuejs.org/en/guides/using-with-vuex.html
const localVue = createLocalVue();
localVue.use(Vuex);

describe("Item.vue", () => {
  let actions, store, propsData;
  beforeEach(() => {
    actions = {
      doneTask: jest.fn(),
    };
    store = new Vuex.Store({
      actions: actions
    });
    propsData = {
      item: {
        title: 'Task 1',
        is_done: false
      }
    };
  })

  it("calls doneTask when it's clicked", () => {
    // UI test. Use mount()
    const wrapper = mount(Item, { store, localVue, propsData });
    const li = wrapper.find("li");
    expect(li.classes()).not.toContain("done");
    li.trigger("click");
    expect(actions.doneTask).toHaveBeenCalled();
  })
});
