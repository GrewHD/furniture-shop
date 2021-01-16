<template>
  <div class="content">
    <div class="h2-wrapper">
      <h2>About Us</h2>
    </div>
    <img src="./assets/img/about-us.png" alt="About Us" />
    <div class="text-box">
      <p>
        Organization "MONRO Furniture" in the furniture market since 2019. In
        the year 2020, the Monro / Furniture.com catalog was opened with a wide
        selection of furniture. Today we are representatives of the most famous
        companies.
      </p>
      <p>
        The Monro / Furniture.com website gives you the opportunity to choose
        the model, size and color of the goods yourself, and if necessary, you
        can use the services of a designer. Our designers have extensive
        experience, possess knowledge of all styles of interior shaping and
        constantly monitor modern trends in the model assortment.
      </p>
      <p>
        The organization "Monro / Furniture.com" is also engaged in interior
        design, development of design projects in Kharkiv and Kharkiv region.
        The main activity of our company is the design, implementation and
        complete set of the interior "turnkey".
      </p>
      <p>
        The company's team consists of professional interior designers in
        collaboration with artists, decorators, we will make your dream come
        true.
      </p>
    </div>
    <div class="rectangle-1"></div>
    <div class="rectangle-2"></div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
};
</script>

<style lang="scss" scoped>
.content {
  font-family: "Noto Sans", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;

  .h2-wrapper {
    display: flex;
    justify-content: flex-end;
    width: 1052px;

    h2 {
      display: flex;
      align-items: flex-end;
      color: rgba(0, 0, 0, 0.15);
      margin: 63px 0 0;
      font-size: 65px;
      line-height: 88.53px;
      font-weight: 400;
    }
  }

  p {
    text-transform: uppercase;
    margin: 0 0 20px 0;
    line-height: 24.52px;
    font-weigh: 500;
  }

  img {
    display: flex;
    max-width: 896px;
    margin: 54px 0 0;
  }

  .text-box {
    max-width: 888px;
    margin: 90px 0 128px;
    font-size: 18px;
  }

  .rectangle-1 {
    position: absolute;
    width: 1115.41px;
    height: 489.41px;
    left: -285px;
    top: 150.25px;
    z-index: -1;

    background: #C5DFD7;
    border-radius: 59px;
    transform: rotate(148.94deg);
  }

  .rectangle-2 {
    position: absolute;
    width: 480.95px;
    height: 372.02px;
    left: 1444.66px;
    top: 638px;
    z-index: -1;

    background: #C5DFD7;
    border-radius: 59px;
    transform: matrix(-0.68, 0.73, 0.73, 0.68, 0, 0);
  }
}
</style>