<!--
 * @Date: 2020-11-24 23:38:36
 * @LastEditors: QiuJhao
 * @LastEditTime: 2020-12-11 15:11:29
-->
<template>
  <div>
    <div id="pano" style="width: 100%; height: 100%"></div>
    <div id="subject">
      <p id="subtext">武大探险</p>
    </div>
    <!-- <div class="btn">
        <a class="btnName" href="/star">我的收藏</a>
      </div>
      <div class="btn2">
        <a class="btnName2" href="/map">探险图</a>
      </div> -->
    <vue-fab mainBtnColor="#3599DB" size="big" class="buttons">
      <fab-item @clickItem="gotoMap" :idx="0" title="探险图" icon="map" />
      <fab-item @clickItem="gotoStar" :idx="1" title="卡片" icon="star_outline" />
    </vue-fab>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer2: "",
    };
  },
  head() {
    return {
      script: [{ src: "/krpano.js" }],
      link: [{rel:"stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons"}],
    };
  },
  mounted() {
    this.timer2 = setTimeout(this.init, 300);
  },
  methods: {
    gotoMap(){
      this.$router.push('/map');
    },
    gotoStar(){
      this.$router.push('/star');
    },
    init() {
      embedpano({
        target: "pano",
        html5: "only",
      });
    },
  },
};
</script>

<style scoped>
html,
body {
  height: 100%;
}
#pano {
  top: 0;
  position: fixed;
}
#subject {
  float: left;
  width: 360px;
  height: 190px;
  left: 42.5%;
  top: 30%;
  position: absolute;
  z-index: 70;
}
#subtext {
  color: gold;
  font-size: 70px;
  font-family: fz;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
}
#starbox {
  width: 150px;
  height: 75px;
  float: left;
  margin-left: 50%;
  position: absolute;
  z-index: 80;
}
#map {
  width: 150px;
  height: 75px;
  float: left;
  margin-left: 35%;
  position: absolute;
  z-index: 80;
}
.buttons
{
  z-index: 1000;
}
</style>
