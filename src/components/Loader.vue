<template>
  <div class="loaderCss"><div></div><div></div><div></div></div>
</template>

<style scoped>
  .loaderCss {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .loaderCss div {
    display: inline-block;
    position: absolute;
    left: 8px;
    width: 16px;
    background: #fff;
    animation: loaderCss 1s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }
  .loaderCss div:nth-child(1) {
    left: 8px;
    animation-delay: -0.24s;
  }
  .loaderCss div:nth-child(2) {
    left: 32px;
    animation-delay: -0.12s;
  }
  .loaderCss div:nth-child(3) {
    left: 56px;
    animation-delay: 0;
  }
  @keyframes loaderCss {
    0% {
      top: 8px;
      height: 64px;
    }
    50%, 100% {
      top: 24px;
      height: 32px;
    }
  }
</style>
