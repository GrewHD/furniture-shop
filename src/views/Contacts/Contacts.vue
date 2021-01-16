<template>
  <div class="contacts">
    <div class="img-block">
      <div class="img-box box1">
        <img src="./assets/img/contacts-1.png" alt="" />
      </div>
      <div class="img-box">
        <img src="./assets/img/contacts-2.png" alt="" />
      </div>
    </div>
    <div class="info-block">
      <div class="top-box-info">
        <h2>Contacts</h2>
        <h4>Free calls in Ukraine!</h4>

        <a href="tel:+380664569045">
          <div class="tel-button">
            <img src="./assets/icons/tel-button.png" alt="tel icon" />
            <div class="tel-number">+38(066)45-69-045</div>
          </div>
        </a>
      </div>
      <h3>Representations in cities:</h3>
      <div class="info-box">
        <div class="line-1">
          <img src="./assets/icons/marker.png" alt="marker icon" />
          <address>Odessa, st. Bolshaya Arnautskaya, 44, of. 505</address>
        </div>
        <div class="line-2">
          <img src="./assets/icons/tel.png" alt="tel icon" />
          <div class="tel">(048) 757-89-50</div>
        </div>
      </div>
      <div class="info-box">
        <div class="line-1">
          <img src="./assets/icons/marker.png" alt="marker icon" />
          <address>Kyiv, Degtyarevskaya Street, 53-A, office 421</address>
        </div>
        <div class="line-2">
          <img src="./assets/icons/tel.png" alt="tel icon" />
          <div class="tel">(044) 224-55-41</div>
        </div>
      </div>
      <div class="info-box">
        <div class="line-1">
          <img src="./assets/icons/marker.png" alt="marker icon" />
          <address>Kharkiv, st. Heroes of Stalingrad, 169/1</address>
        </div>
        <div class="line-2">
          <img src="./assets/icons/tel.png" alt="tel icon" />
          <div class="tel">(057) 765-00-19</div>
        </div>
      </div>
    </div>
    <div class="rectangle-1"></div>
    <div class="rectangle-2"></div>
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
  justify-content: center;
  text-transform: uppercase;

  h2 {
    color: rgba(0, 0, 0, 0.15);
    font-size: 65px;
    line-height: 88.53px;
  }

  h3 {
    font-size: 22px;
  }

  h4 {
    font-size: 18px;
    margin: 0 0 22px 0;
    text-align: right;
  }

  .img-block {
    margin: 56px 39.5px 86px;

    .img-box {
    }

    .box1 {
      margin-bottom: 49px;
    }
  }

  .info-block {
    margin: 56px 39.5px 86px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 400px;

    .top-info-box {
      display: flex;
    }

    a {
      color: black;
      text-decoration: none;
      font-size: 22px;
      line-height: 29.96px;

      .tel-button {
        /* text-align: center; */
        /* padding: 21px 80px 20px 40px; */
        display: flex;
        /* justify-content: center; */
        align-items: center;

        width: 352px;
        height: 66px;

        background: rgba(197, 223, 215, 0.22);
        border: 1px solid #C4C4C4;
        box-sizing: border-box;
        border-radius: 66px;

        img {
          padding: 0 16px 0 40px;
        }
      }
    }

    a:active {
      .tel-button {
        box-shadow: inset 0 2px 4px 2px rgba(0, 0, 0, 0.2);
      }
    }

    .info-box {
      background: radial-gradient(
        50% 50% at 50% 50%,
        rgba(197, 223, 215, 0.17) 0%,
        rgba(255, 230, 231, 0.38) 100%
      );
      border: 1px solid rgba(0, 0, 0, 0.6);
      box-sizing: border-box;
      border-radius: 21px;
      max-width: 280px;
      font-size: 17px;
      padding: 38px 23px;

      display: flex;
      flex-flow: column;
      justify-content: space-between;

      img {
        margin: 0 14px 0 0;
      }

      .line-1 {
        display: flex;

        img {
          max-height: 19px;
        }

        address {
          /* line-height: 23.15px; */
        }
      }

      .line-2 {
        display: flex;
        margin: 6px 0 0;
      }
    }
  }

  .rectangle-1 {
    position: absolute;
    width: 470.64px;
    height: 461.74px;
    left: -67px;
    top: 122px;
    z-index: -1;

    background: #C5DFD7;
    border-radius: 59px;
    transform: rotate(-47.22deg);
  }

  .rectangle-2 {
    position: absolute;
    width: 712.1px;
    height: 740.58px;
    left: 1452.57px;
    top: 448px;
    z-index: -1;

    background: #C5DFD7;
    border-radius: 59px;
    transform: rotate(10.08deg);
  }
}
</style>