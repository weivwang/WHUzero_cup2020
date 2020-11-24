<template>
  <div>
    <div id="left" v-on:click="start = true"></div>
    <div id="right" v-on:click="start = true"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      wid: 32,
      timer: "",
      start: false,
    };
  },
  //TODO:使用rem适配不同的分辨率设备
  //TODO:this.$refs.reel.clientWidth获取展开卷轴的宽度
  methods: {
    move() {
      if (this.wid < 368) {
        var right = document.getElementById("right");
        this.wid += 3;
        right.style.width = this.wid + "px";
      } else clearInterval(this.timer);
    },
  },
  watch: {
    start: function (e) {
      if (e == true) {
        this.timer = setInterval(this.move, 10);
      }
    },
  },
};
</script>
<style scoped>
#scroll {
  position: absolute;
  float: left;
  margin-left: 37%;
  margin-top: 20%;
}

#left {
  float: left;
  width: 32px;
  height: 190px;
  background: url("../static/scroll.png");
  z-index: 80;
  position: absolute;
}
#right {
  float: left;
  width: 32px;
  height: 190px;
  background: url("../static/scroll.png") 100% 50%;
  z-index: 80;
  position: absolute;
  margin-left: 32px;
}
</style>
