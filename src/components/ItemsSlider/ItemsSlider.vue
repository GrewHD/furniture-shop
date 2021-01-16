<template>
  <div class="items-slider">
    <div class="title">{{ title }}</div>
    <div class="slider-wrapper">
      <vue-slick-carousel :arrows="true" :dots="false" v-bind="options">
        <div class="item-wrapper" v-for="item in items" :key="item.id">
          <item :image="item.image" :price="item.price" :name="item.name" />
        </div>
      </vue-slick-carousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import Item from "../Item";

export default {
  name: "ItemsSlider",
  props: {
    title: String,
    items: Array,
  },
  components: {
    VueSlickCarousel,
    Item,
  },
  data() {
    return {
      options: {
        dots: true,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        touchThreshold: 5,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.items-slider {
  width: 970px;

  .title {
    font-family: Futura Md BT;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 29px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 34px;
  }

  .slider-wrapper {
    margin: 0 auto;
    width: 650px;

    .item-wrapper {
      margin: 0 20px;
    }
  }
}
</style>