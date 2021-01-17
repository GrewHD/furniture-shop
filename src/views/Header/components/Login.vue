<template>
  <div class="login">
    <router-link to="/sign-in" class="link">
      <button class="btn">
        <font-awesome-icon icon="user" />
        <!-- <img src="./assets/icons/user.png" alt="login" /> -->
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style lang="scss" scoped>
.login {
  position: relative;
  .btn {
    position: absolute;
    background-color: rgba(255, 255, 255, 0);
    border: none;
    color: rgba(17, 1, 1, 0.52);
    font-size: 19px;
    cursor: pointer;
    height: 19px;
    width: 19px;
    top: -19px;
    /* .font-awersome-icon */
  }
}
</style>