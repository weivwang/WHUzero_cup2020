<template>
  <div>
    <div id="pano" style="width: 100%; height: 100%"></div>
    <div id="subject">
      <p id="subtext">武大探险</p>
    </div>
    <div id="buttonrow">
      <a-row>
        <a-col :span="12">
          <a-button type="primary" id="starbox" size="large">
            我的收藏
          </a-button>
        </a-col>
        <a-col :span="12">
          <a-button type="primary" id="map" size="large"> 武大探险图 </a-button>
        </a-col>
      </a-row>
    </div>
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
    };
  },
  mounted() {
    this.timer2 = setTimeout(this.init, 300);
  },
  methods: {
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
  margin-left: 45%;
  margin-top: -10%;
  position: absolute;
  z-index: 70;
}
#subtext {
  color: white;
  font-size: 50px;
  font-family: Helvetica;
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
#buttonrow {
  margin-top: 30%;
}
</style>
