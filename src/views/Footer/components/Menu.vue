<template>
  <div class="menu-box">
    <h2>Menu</h2>
    <ul>
      <li><a href="">Home</a></li>
      <li><a href="">About Us</a></li>
      <li><a href="">Catalogue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuBox",
};
</script>

<style lang="scss" scoped>
.menu-box {
  display: flex;
  flex-direction: column;

  h2 {
    margin: 45px 20px 22px;
  }

  ul {
    list-style-type: none;
  }

  li {
    margin: 20px;
  }

  a {
    color: black;
    text-decoration: none;
    text-transform: uppercase;
  }
}
</style>