<template>
  <div>
    <div class="tab">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
};
</script>

<style lang="scss" scoped>
.tab {
  max-width: 750px;
  min-width: 320px;
  margin: 0 auto;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f6f6f6;
  box-shadow: 0 1px 10xp rgba(100, 100, 100, 0.2);
}
</style>