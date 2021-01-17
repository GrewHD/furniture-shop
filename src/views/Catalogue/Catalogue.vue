<template>
  <div class="catalogue-wrapper">
    <div class="title">catalogue</div>
    <div class="content-wrapper">
      <div class="filters">
        <div class="filter-title">Filter</div>

        <div class="filter-title">Category</div>
        <b-form-checkbox-group
          id="category-filter"
          v-model="categories"
          name="categories"
          stacked
        >
          <b-form-checkbox value="sofas">Sofas</b-form-checkbox>
          <b-form-checkbox value="armchair">Armchair</b-form-checkbox>
          <b-form-checkbox value="pedestals">Pedestals</b-form-checkbox>
          <b-form-checkbox value="beds">Beds</b-form-checkbox>
          <b-form-checkbox value="lamps">Lamps</b-form-checkbox>
          <b-form-checkbox value="tables">Tables</b-form-checkbox>
        </b-form-checkbox-group>

        <div class="filter-title">Price</div>
        <b-form-checkbox-group
          id="price-filter"
          v-model="prices"
          name="prices"
          stacked
        >
          <b-form-checkbox value="80-550">80$-550$</b-form-checkbox>
          <b-form-checkbox value="550-1000">550$-1000$</b-form-checkbox>
          <b-form-checkbox value="1000-1250">1000$-1250$</b-form-checkbox>
          <b-form-checkbox value="1250-2500">1250$-2500$</b-form-checkbox>
        </b-form-checkbox-group>

        <div class="filter-title">Material</div>
        <b-form-checkbox-group
          id="material-filter"
          v-model="materials"
          name="materials"
          stacked
        >
          <b-form-checkbox value="solid-wood">Solid wood</b-form-checkbox>
          <b-form-checkbox value="pine">Pine</b-form-checkbox>
          <b-form-checkbox value="oak">Oak</b-form-checkbox>
        </b-form-checkbox-group>

        <div class="filter-title">Series</div>
        <b-form-checkbox-group
          id="series-filter"
          v-model="series"
          name="series"
          stacked
        >
          <b-form-checkbox value="herman">Herman</b-form-checkbox>
          <b-form-checkbox value="loft">Loft</b-form-checkbox>
          <b-form-checkbox value="vern">Vern</b-form-checkbox>
          <b-form-checkbox value="vica">Vica</b-form-checkbox>
          <b-form-checkbox value="crain">Crain</b-form-checkbox>
        </b-form-checkbox-group>

        <b-button variant="outline-success" @click="handleClick">Find</b-button>
      </div>
      <div class="items-wrapper">
        <item v-for="item in items" :key="item.id" v-bind="item" />
      </div>
    </div>
    <div class="watched">
      <items-slider title="You watched:" :items="watchedItems" />
    </div>
    <div class="rectangle-1"></div>
    <div class="rectangle-2"></div>
  </div>
</template>

<script>
import { getItems } from "../../data/items";
import Item from "../../components/Item";
import ItemsSlider from "../../components/ItemsSlider";

const contains = (arr1, arr2) =>
  Boolean(arr1.filter((el) => arr2.includes(el)).length);

export default {
  name: "Catalogue",
  components: {
    Item,
    ItemsSlider,
  },
  data() {
    return {
      items: getItems(),
      watchedItems: getItems().splice(0, 4),
      categories: [],
      prices: [],
      materials: [],
      series: [],
    };
  },
  methods: {
    handleClick() {
      const items = getItems();

      if (
        !this.categories.length &&
        !this.prices.length &&
        !this.materials.length &&
        !this.series.length
      ) {
        this.items = items;
        return;
      }

      const filteredItems = items.filter((item) => {
        if (
          this.categories.length &&
          contains(this.categories, item.category)
        ) {
          return true;
        }

        if (this.prices.length) {
          const priceRanges = this.prices.map((price) =>
            price.split("-").map(Number)
          );
          const price = priceRanges.filter(
            ([start, end]) => item.price >= start && item.price <= end
          );
          if (price.length) {
            return true;
          }
        }

        if (this.materials.length && contains(this.materials, item.material)) {
          return true;
        }

        if (this.series.length && contains(this.series, item.series)) {
          return true;
        }

        return false;
      });

      this.items = filteredItems;
    },
  },
};
</script>

<style lang="scss" scoped>
.catalogue-wrapper {
  display: flex;
  width: 1050px;
  margin: 0 auto;
  flex-direction: column;

  .items-slider {
    margin-top: 90px;
    margin-bottom: 90px;
  }

  .title {
    margin-top: 55px;
    text-align: right;
    font-size: 65px;
    line-height: 89px;
    /* identical to box height */

    color: rgba(0, 0, 0, 0.15);
    text-transform: uppercase;
  }

  .filters {
    .filter-title {
      font-size: 24px;
      line-height: 33px;
      padding-bottom: 10px;
    }

    .btn {
      margin-top: 20px;
    }
  }

  .content-wrapper {
    display: flex;
    flex-direction: row;
    // justify-content: space-between;

    .items-wrapper {
      margin-top: 75px;
      margin-left: 54px;
      display: flex;
      flex-flow: row wrap;
      justify-content: left;
      align-items: flex-start;

      .item-wrapper {
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
        }
        margin-right: 40px;
      }

      // .b-form-checkbox-group {
      //   color: rgba(0, 0, 0, 0.5);
      // }
    }
  }

  .rectangle-1 {
    position: absolute;
    width: 431.92px;
    height: 969.11px;
    left: 1334px;
    top: -350px;
    z-index: -1;

    background: rgba(107, 174, 153, 0.39);
    border-radius: 82px;
    transform: rotate(-40.24deg);
  }

  .rectangle-2 {
    position: absolute;
    width: 1270px;
    height: 504.75px;
    left: -494.09px;
    top: 500px;
    z-index: -1;

    background: rgba(107, 174, 153, 0.39);
    border-radius: 82px;
    transform: rotate(-90.45deg);
  }
}
</style>