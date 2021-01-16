<template>
  <div class="home">
    <div class="bestsellers">
      <div class="col">
        <div class="img-box">
          <img src="./assets/img/bestseller.png" alt="bestseller" />
        </div>
        <a href="">
          <div class="lower-part">
            <img src="./assets/icons/left-arrow.png" alt="<-" />
            <span>Show in catalogue</span>
          </div>
        </a>
      </div>
      <div class="col">
        <h2>Bestsellers</h2>
        <h3>Herman</h3>
        <div class="text-btn">
          <div class="text">
            HERMAN IS A POPULAR, RETRO-STYLE 3-SEATER SOFA INSPIRED BY 1950S
            DESIGN TRENDS...
          </div>
          <button>
            <img src="./assets/icons/main-right-arrow.png" alt="arrow-right" />
          </button>
        </div>
        <button class="btn">
          <div class="btn-inner">VIEW ALL</div>
        </button>
      </div>
    </div>
    <div class="collections">
      <h2>Collections</h2>
      <div class="img-block">
        <div class="col">
          <div class="img-box">
            <img src="./assets/img/living-room.png" alt="living room" />
            <a href="">
              <div class="living-room">
                <h3>Living Room</h3>
                <div class="lower-part">
                  <img src="./assets/icons/left-arrow.png" alt="<-" />
                  <span>Show collection</span>
                </div>
              </div>
            </a>
          </div>
          <div class="img-box">
            <img src="./assets/img/kids-room.png" alt="kids room" />
            <a href="">
              <div class="kids-room">
                <h3>Kids Room</h3>
                <div class="lower-part">
                  <img src="./assets/icons/left-arrow.png" alt="<-" />
                  <span>Show collection</span>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="col">
          <div class="img-box">
            <img src="./assets/img/bedroom.png" alt="bedroom" />
            <a href="">
              <div class="bedroom">
                <h3>Bedroom</h3>
                <div class="lower-part">
                  <img src="./assets/icons/right-arrow.png" alt="->" />
                  <span>Show collection</span>
                </div>
              </div>
            </a>
          </div>
          <div class="img-box">
            <img src="./assets/img/kitchen.png" alt="kitchen" />
            <a href="">
              <div class="kitchen">
                <h3>kitchen</h3>
                <div class="lower-part">
                  <img src="./assets/icons/right-arrow.png" alt="->" />
                  <span>Show collection</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="new-arrivals">
      <h2>New Arivals</h2>
      <div class="wrapper">
        <item v-for="item in firstNewArivalsRow" :key="item.id" v-bind="item" />
      </div>
      <div class="wrapper">
        <item
          v-for="item in secondNewArivalsRow"
          :key="item.id"
          v-bind="item"
        />
        <!-- <item :image="image5" name="PUF" price="80" />
        <item :image="image6" name="RENDANT LAMP" price="50" />
        <item :image="image7" name="HERMAN SOFA" price="450" />
        <item :image="image8" name="REECE-COFEE TABLE" price="130" /> -->
      </div>
    </div>
    <div class="care">
      <h2>Care About You</h2>
      <div class="care-block">
        <div class="text-block">
          <h3>I Care About You</h3>
          <div class="text-box">
            We use only proven and non-toxic consumables and resins, we control
            production.
            <p>
              Furniture MONRO has given up on MDF and chipboard in production.
            </p>
          </div>
        </div>
        <div class="img-block">
          <div class="img-box">
            <img src="./assets/img/care.png" alt="Care" />
          </div>
        </div>
      </div>

      <div class="btn">
        <div class="btn-inner">More ></div>
      </div>
    </div>
    <div class="gallery">
      <h2>Gallery</h2>
      <div class="gallery-block">
        <div class="col">
          <div class="img-box">
            <img
              class="relative"
              src="./assets/img/gallery-1.png"
              alt="Gallery1"
            />
            <button class="btn">
              <div class="btn-inner">VIEW ALL</div>
            </button>
          </div>
        </div>
        <div class="col vert">
          <div class="img-box">
            <img src="./assets/img/gallery-2.png" alt="Gallery2" />
          </div>
          <div class="img-box">
            <img src="./assets/img/gallery-3.png" alt="Gallery3" />
          </div>
        </div>
      </div>
    </div>
    <div class="rectangle-1"></div>
    <div class="rectangle-2"></div>
    <div class="rectangle-3"></div>
  </div>
</template>

<script>
import Item from "../../components/Item";
import coverImage1 from "./assets/img/vica-armchair.png";
import coverImage2 from "./assets/img/vica-armchair.png";
import coverImage3 from "./assets/img/vern-dinno-table-chair.png";
import coverImage4 from "./assets/img/crain-armchair.png";
import coverImage5 from "./assets/img/puf.png";
import coverImage6 from "./assets/img/rendant-lamp.png";
import coverImage7 from "./assets/img/herman-sofa.png";
import coverImage8 from "./assets/img/reece-cofee-table.png";

import { items } from "../../data/items";

export default {
  name: "MainPage",
  components: {
    Item,
  },
  data() {
    return {
      image1: coverImage1,
      image2: coverImage2,
      image3: coverImage3,
      image4: coverImage4,
      image5: coverImage5,
      image6: coverImage6,
      image7: coverImage7,
      image8: coverImage8,
      firstNewArivalsRow: items.splice(0, 4),
      secondNewArivalsRow: items.splice(4),
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  font-family: "Noto Sans", sans-serif;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-transform: uppercase;

  h2 {
    text-align: right;
    font-size: 65px;
    color: rgba(0, 0, 0, 0.15);
  }

  .bestsellers {
    display: flex;
    margin-top: 55px;

    .col {
      display: flex;
      flex-direction: column;

      &:first-child {
        align-items: center;
        max-height: 364px;
        width: 540px;
      }

      &:last-child {
        margin-left: 69px;
        width: 650px;
      }

      .image-box {
        width: 540px;
        height: 292px;
      }

      .btn {
        background-color: #fff;
        display: flex;
        align-self: center;
        padding: 9px 28px 10px;
        border: 1px solid rgba(0, 0, 0, 0.72);
        box-sizing: border-box;
        border-radius: 5px;
        max-width: 161px;
        height: 52px;
        text-transform: none;
        margin: 85px 0 86px;

        a {
          text-decoration: none;
        }

        .btn-inner {
          font-size: 22px;
          line-height: 33px;
          align-self: center;

          color: #000;
        }

        &:hover {
          cursor: pointer;
        }
      }

      h2 {
        text-align: right;
      }

      h3 {
        margin: 49px 0 25px;
        font-weight: 600;
        font-size: 39px;
        line-height: 39px;
      }

      .text-btn {
        display: flex;
        margin-left: 25px;

        .text {
          width: 284px;
          height: 101px;
          font-size: 19px;
          line-height: 26px;
        }

        button {
          border: 0;
          background: rgba(100, 100, 100, 0);
          margin-left: 10px;

          &:hover {
            cursor: pointer;
          }
        }
      }

      a {
        text-decoration: none;
        color: rgba(0, 0, 0, 0.58);
        align-self: center;

        .lower-part {
          display: flex;
          align-items: center;
          margin-top: 47px;

          span {
            margin-left: 18px;
          }
        }
      }
    }
  }

  .collections {
    max-width: 907px;

    .img-block {
      display: flex;
      justify-content: center;

      .col {
        padding: 0 12px 0;

        .img-box {
          padding: 28px 0 0;
          position: relative;

          .living-room {
            left: 0;
            top: 242px;
            position: absolute;
            background: rgba(242, 212, 83, 0.77);
            color: white;
            padding: 5px 13px 10px 15px;
            font-size: 27px;
            font-weight: 500;
            line-height: 36, 77px;
            text-shadow: 0px 3px 5px rgba(0, 0, 0, 0.25);

            .lower-part {
              display: flex;
              align-items: center;

              img {
                /* color: white; */
              }

              span {
                margin: 0 0 0 10px;
                font-size: 19px;
                line-height: 25, 88px;
                text-decoration: underline;
              }
            }
          }

          .kids-room {
            left: 126px;
            top: 28px;
            position: absolute;
            background: rgba(161, 136, 129, 0.37);
            color: white;
            padding: 5px 13px 10px 15px;
            font-size: 27px;
            font-weight: 500;
            line-height: 36, 77px;
            text-shadow: 0px 3px 5px rgba(0, 0, 0, 0.25);

            .lower-part {
              display: flex;
              align-items: center;

              img {
                /* color: white; */
              }

              span {
                margin: 0 0 0 10px;
                font-size: 19px;
                line-height: 25, 88px;
                text-decoration: underline;
              }
            }
          }

          .bedroom {
            width: 255px;
            left: 226px;
            top: 28px;
            position: absolute;
            background: rgba(3, 81, 74, 0.78);
            color: white;
            padding: 5px 13px 10px 15px;
            font-size: 27px;
            font-weight: 500;
            line-height: 36, 77px;
            text-shadow: 0px 3px 5px rgba(0, 0, 0, 0.25);

            .lower-part {
              display: flex;
              align-items: center;

              img {
                /* color: white; */
              }

              span {
                margin: 0 0 0 10px;
                font-size: 19px;
                line-height: 25, 88px;
                text-decoration: underline;
              }
            }
          }

          .kitchen {
            width: 230px;
            left: 251px;
            top: 272px;
            position: absolute;
            background: rgba(99, 141, 185, 0.76);
            color: white;
            padding: 5px 13px 10px 15px;
            font-size: 27px;
            font-weight: 500;
            line-height: 36, 77px;
            text-shadow: 0px 3px 5px rgba(0, 0, 0, 0.25);

            .lower-part {
              display: flex;
              align-items: center;

              img {
                /* color: white; */
              }

              span {
                margin: 0 0 0 10px;
                font-size: 19px;
                line-height: 25, 88px;
                text-decoration: underline;
              }
            }
          }
        }
      }
    }
  }

  .new-arrivals {
    h2 {
      margin: 53px 0 59px;
    }

    .wrapper {
      width: 985px;
      display: flex;
      flex: row wrap;

      .item-wrapper {
        margin-left: 25px;

        &:first-child {
          margin-left: 0;
        }
      }
    }
  }

  .care {
    display: flex;
    flex-direction: column;

    h2 {
      margin: 68px 0 65px;
    }

    .care-block {
      display: flex;
      flex-direction: row;

      h3 {
        text-transform: uppercase;
        margin: 67px 0 58px;
        font-weight: 600;
        font-size: 40px;
        line-height: 54px;

        color: rgba(0, 0, 0, 0.69);
      }

      .text-box {
        margin: 0 0 90px;
        max-width: 421px;
        font-size: 24px;
        line-height: 33px;
        text-transform: none;

        color: rgba(0, 0, 0, 0.69);
      }
    }

    .btn {
      display: flex;
      padding: 0px 44px 14px;
      border: 1px solid rgba(4, 0, 0, 0.39);
      box-sizing: border-box;
      border-radius: 8px;
      max-width: 188px;
      height: 63px;
      text-transform: none;

      a {
        text-decoration: none;
      }

      .btn-inner {
        font-size: 28px;
        line-height: 38px;
        align-self: center;
        padding: 10px 0 0;

        color: rgba(4, 0, 0, 0.39);
      }
    }

    .btn:hover {
      cursor: pointer;
    }
  }

  .gallery {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 907px;
    margin: 0 0 125px;

    h2 {
      margin: 69px 0 80px 0;
    }

    .gallery-block {
      display: flex;

      .relative {
        position: relative;
      }

      .btn {
        position: absolute;
        display: flex;
        align-self: center;
        padding: 9px 28px 10px;
        background: rgba(197, 223, 215, 0.74);
        border: 1px solid rgba(0, 0, 0, 0.72);
        box-sizing: border-box;
        border-radius: 5px;
        max-width: 161px;
        height: 52px;
        text-transform: none;
        position: absolute;
        left: 400px;
        top: 580px;

        .btn-inner {
          font-size: 22px;
          line-height: 33px;
          align-self: center;

          color: #000;
        }

        &:hover {
          cursor: pointer;
        }
      }

      .vert {
        margin-left: 26px;
        display: flex;
        flex-direction: column;

        .img-box {
          &:last-child {
            margin-top: 24px;
          }
        }
      }
    }
  }

  .rectangle-1 {
    position: absolute;
    width: 926.17px;
    height: 663.29px;
    left: -150px;
    top: 60px;
    z-index: -1;
    background: rgba(107, 174, 153, 0.39);
    border-radius: 82px;
    transform: rotate(-40.24deg);
  }

  .rectangle-2 {
    position: absolute;
    width: 575.87px;
    height: 612.6px;
    left: 1234.79px;
    top: 1372px;
    z-index: -1;
    background: rgba(107, 174, 153, 0.39);
    border-radius: 82px;
    transform: rotate(39.03deg);
  }

  .rectangle-3 {
    position: absolute;
    width: 1455.71px;
    height: 545.97px;
    left: -400px;
    top: 2292px;
    z-index: -1;
    background: #C5DFD7;
    border-radius: 82px;
    transform: rotate(-11.82deg);
  }
}
</style>