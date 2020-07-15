<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
$shade_color: #a5a5a5;
body {
  background-color: #e5e5e5;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.box_shadow {
  -webkit-box-shadow: 0px 0px 8px 4px $shade_color;
  -moz-box-shadow: 0px 0px 8px 4px $shade_color;
  box-shadow: 0px 0px 8px 4px $shade_color;
}

.info_hl {
  font-weight: bold;
  font-size: 1.5em;
  padding-top: 10px;
}
</style>
