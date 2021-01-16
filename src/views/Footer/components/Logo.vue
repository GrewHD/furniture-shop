<template>
  <div class="logo-footer">
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
.logo-footer {
  position: relative;

  font-family: "futura-medium-bt";
  font-style: normal;
  font-weight: normal;
  line-height: 25px;
  text-transform: uppercase;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: start;
  margin: 45px 20px 22px;

  .upper-logo {
    font-size: 48px;
  }

  .lower-logo {
    font-size: 18px;
  }
}
</style>