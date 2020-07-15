<template>
  <div class="evidence_container">
    <b-container fluid>
      <p class="info_hl">EVIDENCE</p>
      <b-row
        no-gutters
        class="evidence pb-1"
        v-for="location in EvidenceArray"
        :key="location.name"
      >
        <b-col sm="12" class="evidence_name">{{ location.name }}</b-col>
        <b-col
          cols="12"
          sm="6"
          md="12"
          lg="6"
          xl="4"
          class="justify-content-between"
          v-for="n in location.content.length"
          :key="n"
        >
          <b-img
            fluid
            class="evidence_img mb-1"
            :src="location.content[n - 1]"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Evidence",
  data() {
    return {
      EvidenceArray: [
        {
          name: "Backpack",
          content: [
            "https://i.pinimg.com/originals/10/16/c8/1016c847560d2982fe13a86288b2dffb.jpg",
            "https://live.staticflickr.com/8458/7913995588_6865f502b4_b.jpg",
            "https://live.staticflickr.com/8458/7913995588_6865f502b4_b.jpg",
          ],
        },
        {
          name: "House",
          content: [
            "https://i.pinimg.com/originals/10/16/c8/1016c847560d2982fe13a86288b2dffb.jpg",
          ],
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.evidence {
  text-align: left;
}
.evidence_name {
  font-weight: bold;
  font-size: 16px;
}

.evidence_img {
  background-size: cover;
  padding: 5px;
}
</style>
