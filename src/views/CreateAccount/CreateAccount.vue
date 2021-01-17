<template>
  <div class="forgot-password">
    <div class="sign-in-block">
      <div class="form-block">
        <h2>CREATE ACCOUNT</h2>
        <span>Let's get started</span>
        <div class="form" id="form">
          <h3>Username</h3>
          <input v-model="name" type="text" class="name" placeholder="Name" />
          <h3>Email</h3>
          <input
            v-model="email"
            type="email"
            class="email"
            placeholder="aboiuy8234@gmail.com"
          />
          <div class="forgot-btn">
            <router-link to="/forgot-password" class="link">
              <button>Forgot Password?</button>
            </router-link>
          </div>
          <router-link to="/account-created" class="link">
            <button>Save</button>
          </router-link>
        </div>
      </div>
      <div class="img-block">
        <img src="../Sign-in/assets/img/sign-in.png" alt="Sign-In" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForgotPassword",
};
</script>

<style lang="scss" scoped>
.forgot-password {
  font-family: "Noto Sans", sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;

  .sign-in-block {
    margin: 140px 136px 159px;
    box-shadow: 24px 9px 53px 34px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(2px);
    width: 1008px;
    display: flex;

    .form-block {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 61px 58px 69px 95px;

      h2 {
        font-size: 36px;
        line-height: 43px;
        margin-bottom: 12px;
      }

      span {
        font-size: 18px;
        line-height: 25px;

        color: rgba(4, 0, 0, 0.57);
      }

      width: 527px;
      .form {
        text-align: left;
        margin-top: 32px;

        .forgot-btn {
          button {
            width: 155px;
            height: 27px;
            border: 0;
            background: #fff;
            font-weight: 500;
            font-size: 18px;
            line-height: 25px;
            color: #3e5142;
          }
        }

        button {
          width: 166px;
          height: 44px;
          background: #aacdb1;
          border: 1px solid rgba(0, 0, 0, 0.72);
          border-radius: 5px;
          font-size: 22px;
          line-height: 30px;
          color: #000;
          margin-top: 30px;
        }

        .remember-change {
          display: flex;
          justify-content: space-between;
          margin: 35px 0 44px;

          label {
            display: flex;
            align-items: center;

            span {
              margin-left: 5px;
              font-weight: 500;
              font-size: 18px;
              line-height: 25px;
              color: #3e5142;
            }
          }

          input {
            width: 15px;
          }

          button {
            width: 155px;
            height: 27px;
            border: 0;
            background: #fff;
          }
        }

        .button-block {
          display: flex;
          justify-content: space-between;

          .login-btn {
            width: 180px;
            height: 44px;
            background: #aacdb1;
            border: 1px solid rgba(0, 0, 0, 0.72);
            border-radius: 5px;
          }

          .login-btn:active {
            box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);

            .register-btn {
              background: #f28b8b;
            }
          }

          .register-btn {
            width: 180px;
            height: 44px;
            border-radius: 5px;
            border: 1px solid rgba(0, 0, 0, 0.72);
          }

          .register-btn:active {
            box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
          }
        }

        h3 {
          margin: 18px 0 14px;
          font-size: 16px;
          line-height: 22px;
          font-size: 16px;
          line-height: 22px;
        }
        .password {
          position: relative;
        }

        input {
          font-weight: 500;
          font-size: 18px;
          line-height: 25px;
          padding: 27px 0 21px 25px;
          width: 400px;
          height: 20px;
          background: rgba(121, 155, 128, 0.29);
          border: 0;
        }
        .show-password {
          position: absolute;
          left: 475px;
          top: 370px;
          border: 0;
          background: 0;
        }
      }
    }

    .img-block {
      width: 481px;
    }
  }
}
</style>