<template>
  <div class="Videos_container">
    <b-container fluid>
      <p class="info_hl">Videos</p>
      <b-row no-gutters="">
        <b-col sm="12" v-for="videos in VideosArray" :key="videos.id">
          <b-img
            fluid
            class="video_thumbnail mb-2"
            :src="videos.thumbnail"
            :alt="videos.id"
          />
          <div class="overlay">
            <a href="#" title="play">
              <b-iconstack font-scale="3" class="play_icon">
                <b-icon-circle-fill
                  stacked
                  style="color:black;opacity: 0.8"
                ></b-icon-circle-fill>
                <b-icon-circle stacked></b-icon-circle>
                <b-icon-play-fill stacked />
              </b-iconstack>
            </a>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Videos",
  data() {
    return {
      VideosArray: [
        {
          id: 1,
          thumbnail:
            "https://www.vengavalevamos.com/wp-content/uploads/2014/10/haunted-forests.jpg",
        },
        {
          id: 1,
          thumbnail:
            "https://previews.123rf.com/images/sportactive/sportactive1311/sportactive131100481/24022334-spooky-cabin-in-a-dark-and-mysterious-forest.jpg",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.video_thumbnail {
  padding: 10px 0;
}
.play_icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  color: lightgray;
  transition: 0.2s ease;
  &:hover {
    transform: scale(1.2);
  }
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
</style>
