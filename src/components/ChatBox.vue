<template>
  <b-container fluid class="chatbox chatbox_shadow" :class="locationClass">
    <b-row class="chat_namebox" fluid v-on:click="isHidden = !isHidden">
      <b-col cols="12" class="chat_name" :style="{ backgroundColor: nameColor}">
        <b-icon-chevron-compact-left v-if="!mirror" />
        {{name}}
        <b-icon-chevron-compact-right v-if="mirror" />
      </b-col>
    </b-row>
    <b-row class="chat_container" fluid v-if="isHidden">
      <b-col cols="12" v-for="n in 8" :key="n">
        <div class="chat_msg" :class="chatclass(n)">hey</div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "ChatBox",
  data() {
    return {
      locationClass: "chat_left",
      isHidden: true
    };
  },
  props: {
    mirror: Boolean,
    name: String,
    nameColor: String
  },
  created() {
    if (this.mirror) {
      this.locationClass = "chat_right";
    }
  },
  methods: {
    chatclass: id => {
      return id % 2 == 0 ? "msg_a" : "msg_b";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.chatbox {
  position: fixed;
  bottom: 0;
  width: 225px;
}
.chat_name {
  padding: 7px 5px;
}
.chat_container {
  height: 175px;
  background-color: white;
  overflow-y: auto;
}
.chat_left {
  left: 0;
}
.chat_right {
  right: 0;
}
.chat_msg {
  margin: 3px 0px;
  padding: 2px 5px;
  border-radius: 4px;
  width: 75%;
  text-align: left;
}
.msg_a {
  background-color: lightsalmon;
}
.msg_b {
  background-color: lightblue;
  float: right;
}

$shade_color: #a5a5a5;
.chatbox_shadow {
  -webkit-box-shadow: 0px 0px 4px 2px $shade_color;
  -moz-box-shadow: 0px 0px 4px 2px $shade_color;
  box-shadow: 0px 0px 4px 2px $shade_color;
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
  background: #c0c0c0;
  border-radius: 3px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: grey;
}
</style>
