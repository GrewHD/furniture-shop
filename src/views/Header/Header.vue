<template>
  <div class="header">
    <menu-item label="home" link="/" />
    <menu-item label="contacts" link="/contacts" />
    <menu-item label="about us" link="/aboutus" />
    <logo />
    <menu-item label="catalogue" link="/catalogue" />
    <menu-item label="new" link="/new" />
    <div class="search-login-block">
      <search />
      <login link="/sign-in" />
    </div>
  </div>
</template>

<script>
import MenuItem from "./components/MenuItem";
import Logo from "./components/Logo";
import Search from "./components/Search";
import Login from "./components/Login";

export default {
  name: "Header",
  components: {
    MenuItem,
    Logo,
    Search,
    Login,
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;

  margin: 18px;
  max-width: 1080px;
  margin: 0 auto 0;

  .menu-item {
    font-family: "Noto Sans", sans-serif;
  }

  .search-login-block {
    display: flex;
    justify-content: space-between;

    .search {
      margin: 0 8.5px 0 0;
    }

    .login {
      margin: 0 0 0 8.5px;
      align-self: center;
    }
  }
}
</style>