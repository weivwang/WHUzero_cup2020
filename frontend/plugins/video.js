import Vue from 'vue';

const VueVideoPlayer= require('vue-video-player/dist/ssr');
const hls = require('videojs-contrib-hls');
import 'vue-video-player/src/custom-theme.css';

import Video from 'video.js';
import 'video.js/dist/video-js.css';

Vue.use(hls);
Vue.use(VueVideoPlayer);
