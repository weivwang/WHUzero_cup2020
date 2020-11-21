<!--
 * @Date: 2020-11-21 21:08:38
 * @LastEditors: QiuJhao
 * @LastEditTime: 2020-11-21 22:41:18
-->
<template>
  <div id="root">
    <VueVideo></VueVideo>
	<img src="@/static/1.png"/>
  </div>
</template>

import VueVideo from '@/components/VueVideo'

components: {
    VueVideo
  },
<script>
export default {
	data() {
    return {
        // 初始化0
      time: 0,
    };
  },
  methods: {
    //   封装一个方法
    countDown() {
      let THIS = this;
      THIS.time--;
    },
  },
  mounted() {
    let THIS = this;
    // 把time改为5
    THIS.time = 5;
    // 设定一个定时器，每一秒调用一次coundDown方法，time-1
    setInterval(THIS.countDown, 1000);
  },
  watch: {
    //   监听time的值
    time: function (newVal) {
      if (newVal == 0) {
        this.$router.push("/index1");
      }
    },
  },
};
</script>

<style scoped>
.root
{
	width:100%;
	height:100%;
}
</style>