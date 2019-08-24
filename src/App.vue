<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
@import "less/main.less";

html {
  font-size: 10px;
}

#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: scroll;
}
</style>
