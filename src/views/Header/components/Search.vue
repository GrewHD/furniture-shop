<template>
  <div class="search">
    <form action="/" name="form">
      <input type="text" name="search" class="search" />
      <button type="submit"></button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Search",
};
</script>

<style scoped>
form {
  position: relative;
  width: 88px;
  margin: 0 auto;
  border: 1px solid rgba(17, 1, 1, 0.52);
  border-radius: 23px;
  height: 25px;
}
input,
button {
  border: none;
  outline: none;
  background: transparent;
}
input {
  width: 100%;
  height: 22px;
  padding-left: 15px;
}
button {
  height: 25px;
  width: 40px;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}
button:before {
  content: "\f002";
  font-family: "Font Awesome 5 Free", "Font Awesome 5 Brands";
  font-weight: 900;
  font-size: 16px;
  color: rgba(17, 1, 1, 0.52);
}
</style>