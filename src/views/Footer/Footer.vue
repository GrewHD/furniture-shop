<template>
  <div class="footer">
    <logo />
    <menu-box />
    <contacts />
    <socials />
  </div>
</template>

<script>
import Logo from "./components/Logo";
import MenuBox from "./components/Menu";
import Contacts from "./components/Contacts";
import Socials from "./components/Socials";

export default {
  name: "Footer",
  components: {
    Logo,
    MenuBox,
    Contacts,
    Socials,
  },
};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: space-around;
  background-color: #C5DFD7;

  .menu-box,
  .contacts,
  .socials {
    font-family: "Noto Sans", sans-serif;
  }
}

li {
  margin: 20px 0px;
}
</style>