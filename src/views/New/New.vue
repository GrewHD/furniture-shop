<template>
  <div class="wrapper">
    <div class="new">
      <h2>New</h2>
      <div class="wrapper">
        <item
          image="https://via.placeholder.com/150"
          name="Vern Lamp"
          price="100"
        />
        <item
          image="https://via.placeholder.com/150"
          name="herman Lamp"
          price="80"
        />
        <item image="https://via.placeholder.com/150" name="PUF " price="80" />
        <item
          image="https://via.placeholder.com/150"
          name="RENDANT LAMP"
          price="50"
        />
      </div>
      <div class="wrapper">
        <item
          image="https://via.placeholder.com/150"
          name="HERMAN ARMCHAIR"
          price="100"
        />
        <item
          image="https://via.placeholder.com/150"
          name="VICA ARMCHAIR"
          price="100"
        />
        <item
          image="https://via.placeholder.com/150"
          name="VERN DINNO TABLE CHAIR"
          price="100"
        />
        <item
          image="https://via.placeholder.com/150"
          name="CRAIN ARMCHAIR"
          price="150"
        />
      </div>
    </div>
    <div class="rectangle"></div>
  </div>
</template>

<script>
import Item from "../../components/Item";
export default {
  name: "New",
  components: {
    Item,
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 922px;
  margin: 0 auto 0;
  display: flex;
  justify-content: column;
  text-transform: uppercase;

  .rectangle {
    position: absolute;
    width: 813px;
    height: 1169px;
    left: 48px;
    top: 130px;
    z-index: -1;
    background: #C5DFD7;
    border-radius: 59px;
    transform: rotate(-90deg);
  }

  h2 {
    font-family: "Noto Sans", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 65px;
    line-height: 89px;
    text-align: right;
    color: rgba(0, 0, 0, 0.15);

    margin: 92px 0 121px;
  }

  .new {
    h2 {
      margin: 92px 0 121px;
    }

    .wrapper {
      width: 987px;
      display: flex;
      flex: row wrap;

      &:last-child {
        margin: 0 0 274px;
      }

      .item-wrapper {
        margin: 0 0 23px 28px;

        &:first-child {
          margin-left: 0;
        }
      }
    }
  }
}
</style>