<template>
  <div class="account-created">
    <div class="text-block">
      <h2>Your account has been created!</h2>
      <div class="text">
        <p>
          Congratulations! Your Personal Account has been successfully created.
        </p>

        <p>
          Now you can take advantage of additional features: viewing order
          history, printing an invoice, changing your contact information and
          shipping addresses, etc.
        </p>

        <p>If you have any questions, please write to us.</p>

        <p>
          A letter with registration data was sent to your E-mail. If you have
          not received the letter, please contact us.
        </p>
      </div>
    </div>
    <div class="rectangle-1"></div>
    <div class="rectangle-2"></div>
  </div>
</template>

<script>
export default {
  name: "AccountCreated",
};
</script>

<style lang="scss" scoped>
.account-created {
  font-family: "Noto Sans", sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;

  .text-block {
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 140px 136px 159px;
    box-shadow: 24px 9px 53px 34px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(2px);
    width: 1008px;
    height: 653px;

    h2 {
      margin-top: 86px;
      margin-bottom: 56px;
      font-size: 36px;
      line-height: 43px;
    }

    .text {
      width: 644px;
      height: 368px;

      p {
        margin-bottom: 50px;
        font-size: 22px;
        line-height: 30px;
      }
    }
  }

  .rectangle-1 {
    position: absolute;
    width: 843px;
    height: 501px;
    left: -290px;
    top: 106px;
    z-index: 1;

    background: #c5dfd7;
    box-shadow: 5px 16px 8px rgba(0, 0, 0, 0.25);
    border-radius: 138px;
  }

  .rectangle-2 {
    position: absolute;
    width: 843px;
    height: 501px;
    left: 1287px;
    top: 474px;
    z-index: -100;

    background: #c5dfd7;
    box-shadow: -9px 13px 13px -4px rgba(0, 0, 0, 0.25);
    border-radius: 138px;
  }
}
</style>