<template>
  <li :class="{ 'done': item.is_done }" @click="doneTask(item)">{{ item.title }}</li>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Item",
  props: ["item"],
  methods: {
    ...mapActions(["doneTask"])
  }
};
</script>

<style lang="scss">
li {
  cursor: pointer;
  &.done {
    text-decoration: line-through;
  }
}
</style>
