<template>
  <div class="contacts">
    <h2>Contacts</h2>
    <ul>
      <li><a href="tel:+380664569045">+38(066)45-69-045</a></li>
      <li><a href="tel:+380663699035">+38(066)36-99-035</a></li>
      <li>
        <a href="mailto:monro.catalogue@gmail.com">monro.catalogue@gmail.com</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Contacts",
};
</script>

<style lang="scss" scoped>
.contacts {
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