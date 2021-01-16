<template>
  <div class="socials">
    <h2>Social Media</h2>
    <ul>
      <li>
        <a href=""><img src="../assets/img/instagram.png" alt="instagram" /></a>
      </li>
      <li>
        <a href=""><img src="../assets/img/twitter.png" alt="twitter" /></a>
      </li>
      <li>
        <a href=""><img src="../assets/img/facebook.png" alt="facebook" /></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Socials",
};
</script>

<style lang="scss" scoped>
.socials {
  display: flex;
  flex-direction: column;
}

h2 {
  margin: 45px 20px 22px;
}

ul {
  display: flex;
  justify-content: space-around;
  list-style-type: none;
}
</style>