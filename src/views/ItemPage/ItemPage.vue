<template>
  <div class="item-page-wrapper">
    <div class="item-info-wrapper">
      <img :src="item.image" alt="Image" class="image" />
      <div class="info">
        <div class="name">{{ item.name }}</div>
        <div class="price">${{ item.price }}</div>
        <div class="description">
          Frame material: painted metal (anthracite); Upholstery material:
          nubuck; Height to seat: 490 mm; Weight: 9.98 kg; Chair warranty 12
          months;
          <br /><br />
          Please note that the color rendering of photos from the catalog and
          upholstery colors may differ from live colors due to the
          peculiarities.
        </div>
      </div>
    </div>
    <items-slider title="Recomended products" :items="recomendedItems" />
  </div>
</template>

<script>
import { getItemById, getItems } from "../../data/items";
import ItemsSlider from "../../components/ItemsSlider";

export default {
  name: "ItemPage",
  components: {
    ItemsSlider,
  },
  data() {
    return {
      item: getItemById(this.$route.params.id),
      recomendedItems: getItems(5),
    };
  },
};
</script>

<style lang="scss" scoped>
.item-page-wrapper {
  width: 970px;
  margin: 100px auto;

  .item-info-wrapper {
    display: flex;
    flex: row no-wrap;
    margin-bottom: 150px;

    .image {
      width: 300px;
      height: 300px;
      object-fit: contain;
      margin-right: 140px;
      /* box-shadow: 10px 10px 88px -21px rgba(0, 0, 0, 0.75); */
      /* border-radius: 8px; */
    }

    .info {
      width: 360px;

      .name {
        font-weight: 400px;
        font-size: 24px;
        text-transform: uppercase;
      }

      .price {
        font-weight: 400px;
        font-size: 24px;
        margin-top: 10px;
        margin-bottom: 20px;
      }

      .description {
        font-family: Noto Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 22px;
        line-height: 30px;
      }
    }
  }
}
</style>