<template>
  <b-container fluid>
    <b-row class="info_container box_shadow">
      <b-col cols="12" md="4" class="info_box right_border">
        <Evidence />
      </b-col>
      <b-col cols="12" md="4" class="info_box right_border">
        <Objectives />
      </b-col>
      <b-col cols="12" md="4" class="info_box">
        <Videos />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Evidence from "@/components/info_boxes/Evidence.vue";
import Objectives from "@/components/info_boxes/Objectives.vue";
import Videos from "@/components/info_boxes/Videos.vue";

export default {
  name: "InfoBoxes",
  props: {
    msg: String
  },
  components: {
    Evidence,
    Objectives,
    Videos
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// @import "node_modules/bootstrap/scss/bootstrap";

.info_container {
  background: white;
  width: 95%;
  max-width: 1750px;
  margin: 25px auto;
  padding: 0 15px 15px 15px;
  overflow: hidden;
}
.info_box {
  height: 500px;
  width: 150px;
  padding: 0 6px;
  //border in the bottom
  &::after {
    content: "";
    position: absolute;
    width: 85%;
    height: 1px;
    background: darkgrey;
    top: 101%;
    left: 7%;
  }

  //makes the divs inside info_box scrollable
  div {
    overflow-y: auto;
    // overflow-x: hidden;
    max-height: 100%;
  }
  @include media-breakpoint-down(sm) {
    border-right: 1px solid darkgrey;
  }
}
.right_border {
  @include media-breakpoint-up(md) {
    border-right: 1px solid darkgrey;
  }
}

/* width */
::-webkit-scrollbar {
  width: 7px;
}

::-webkit-scrollbar-track-piece {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #a0a0a0;
  border-radius: 3px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: grey;
}
// ::-webkit-scrollbar-track {
//   // background: #f1f1f1;
// }
</style>
