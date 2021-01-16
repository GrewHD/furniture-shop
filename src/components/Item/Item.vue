<template>
  <div class="item-wrapper" v-on:click="openItemViewPage">
    <div class="img-box">
      <img class="image" :src="image" alt="Image" />
    </div>
    <div class="info">
      <div class="name">{{ name }}</div>
      <div class="price">${{ price }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    id: Number,
    image: String,
    name: String,
    price: String,
  },
  methods: {
    openItemViewPage: function () {
      this.$router.push({ path: `/item/${this.$props.id}` });
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 208px;

  .img-box {
    background: rgb(68, 68, 68);
    background: radial-gradient(
      circle,
      rgba(68, 68, 68, 1) 4%,
      rgba(136, 136, 136, 1) 45%,
      rgba(196, 196, 196, 1) 100%
    );
    display: flex;
    justify-content: center;
    align-items: center;
    width: 226px;
    height: 211px;

    .image {
      max-width: 226px;
      height: 211px;
      object-fit: contain;
    }
  }

  .info {
    padding: 10px 20px;
    background-color: #fff;

    .name {
      font-weight: 400;
      font-size: 14px;
    }

    .price {
      font-weight: 400;
      margin-top: 5px;
      color: rgba(10, 1, 1, 0.4);
    }
  }
}
</style>