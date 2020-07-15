<template>
  <div class="Objectives_container">
    <b-container fluid>
      <p class="info_hl">Objectives</p>
      <b-row no-gutters="">
        <b-col sm="12" v-for="objevtive in ObjectivesArray" :key="objevtive.id">
          <span>{{ objevtive.objevtive }}</span>
          <hr class="objective_line" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Objectives",
  data() {
    return {
      ObjectivesArray: [
        {
          id: 1,
          objevtive:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia lorem quis massa ornare, at tempor nibh scelerisque. Donec ut mattis felis.",
        },
        {
          id: 2,
          objevtive:
            "Etiam sagittis mi ac nunc tempus iaculis. Maecenas lobortis, libero nec bibendum hendrerit, velit augue elementum arcu, ac lobortis orci risus a justo",
        },
        {
          id: 3,
          objevtive:
            "Eyy Etiam sagittis mi ac nunc tempus iaculis. Maecenas lobortis, libero nec bibendum hendrerit, velit augue elementum arcu, ac lobortis orci risus a justo",
        },
        {
          id: 4,
          objevtive:
            "Test Etiam sagittis mi ac nunc tempus iaculis. Maecenas lobortis, libero nec bibendum hendrerit, velit augue elementum arcu, ac lobortis orci risus a justo",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
hr {
  border-top: 1px solid #303030;
}
</style>
