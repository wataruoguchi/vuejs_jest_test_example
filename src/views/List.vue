<template>
  <div class="list">
    <h1>List</h1>
    <ul>
      <item v-for="item in getItems" :item="item"></item>
    </ul>
    <div>
      <input type="text" v-model="inputTitle">
      <button @click="addTask(inputTitle)">Add</button>
    </div>
  </div>
</template>

<script>
import Item from "@/components/Item.vue";
import { mapActions, mapGetters } from "vuex";
import store from "@/store.js";

export default {
  name: "List",
  store: store,
  components: {
    Item
  },
  data: function() {
    return {
      inputTitle: ""
    };
  },
  computed: {
    ...mapGetters(["getItems"])
  },
  methods: {
    ...mapActions(["addTask"])
  }
};
</script>
