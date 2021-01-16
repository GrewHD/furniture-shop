<template>
  <router-link :to="link" class="link">
    <div class="menu-item">
      {{ label }}
    </div>
  </router-link>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    label: String,
    link: String,
  },
};
</script>

<style lang="scss" scoped>
.link {
  display: block;
  color: rgba(0, 0, 0, 0.74);
  text-decoration: none;

  &.router-link-exact-active {
    .menu-item {
      &::after {
        display: block;
      }
    }
  }

  .menu-item {
    position: relative;

    font-family: "Noto Sans", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    text-transform: uppercase;

    &:hover {
      &::after {
        display: block;
      }
    }

    &::after {
      content: "";
      display: none;
      width: 60%;
      height: 1px;
      background-color: rgba(0, 0, 0, 0.74);
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>