<template>

  <Artplayer @get-instance="getInstance" :option="option" :style="style" />

</template>

<script>
import Artplayer from './Artplayer.vue';
export default {
  data() {
    return {
      option: {
        // url: 'https://artplayer.org/assets/sample/video.mp4',
        url:'https://pdsapi.aliyundrive.com/v2/redirect?id=9a696c305e0744c6af49cb1a7d54b4271673757687647352085',

        //自动播放
        autoplay: true,



        autoSize: true,

        //静音
        muted: true,

        //设置
        setting: true,
        flip: true,
        playbackRate: true,
        aspectRatio: true,
        subtitleOffset: true,

      },
      style: {
        width: '600px',
        height: '400px',
        margin: '60px auto 0',
      },
    };
  },
  components: {
    Artplayer,
  },
  methods: {
    getInstance(art) {
      console.log(art);
    },
  },
};
</script>