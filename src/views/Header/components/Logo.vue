<template>
  <div class="logo">
    <div class="upper-logo">Monro</div>
    <div class="lower-logo">Furniture</div>
  </div>
</template>

<script>
export default {
  name: "Logo",
};
</script>

<style lang="scss" scoped>
.logo {
  position: relative;

  font-family: "Josefin Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: 25px;
  text-transform: uppercase;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;

  .upper-logo {
    font-size: 48px;
    line-height: 57.54px;
  }

  .lower-logo {
    font-size: 18px;
    line-height: 21.58px;
  }
}
</style>