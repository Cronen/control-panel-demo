<template>
  <div class="home">
    <InfoBoxes />
  </div>
</template>

<script>
// @ is an alias to /src
import InfoBoxes from "@/components/InfoBoxes.vue";

export default {
  name: "Home",
  components: {
    InfoBoxes,
  },
};
</script>
