<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-img"></slot>
    </div>
    <div v-else>
      <slot name="item-img-active"></slot>
    </div>
    <div :class="{ active: isActive }">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
  },
  data() {
    return {
      // isActive: false
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path).catch((err) => err)
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
  },
};
</script>

<style scoped>
.active {
  color: rgb(94, 184, 141)
}
</style>