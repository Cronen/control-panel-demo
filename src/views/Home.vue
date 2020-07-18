<template>
  <div class="home">
    <InfoBoxes />
    <ChatBox name="Taylor" nameColor="#ffbb32" />
    <ChatBox mirror name="Steve" nameColor="#3d7aff" />
  </div>
</template>

<script>
// @ is an alias to /src
import InfoBoxes from "@/components/InfoBoxes.vue";
import ChatBox from "@/components/ChatBox.vue";

export default {
  name: "Home",
  components: {
    InfoBoxes,
    ChatBox
  }
};
</script>
