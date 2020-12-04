<!--
 * @Date: 2020-11-24 23:38:36
 * @LastEditors: QiuJhao
 * @LastEditTime: 2020-12-04 23:08:53
-->
<template>
  <div>
    <div id="pano" style="width: 100%; height: 100%"></div>
    <div id="subject">
      <p id="subtext">武大探险</p>
    </div>
    <!-- <div id="buttonrow">
      <a-row>
        <a-col :span="12">
          <a href="/star"><a-button type="primary" id="starbox" size="large">
            我的收藏
          </a-button>
          </a>
        </a-col>
        <a-col :span="12">
          <a href="/map"><a-button type="primary" id="map" size="large"> 武大探险图 </a-button></a>
        </a-col>
      </a-row> -->
      <div class="btn">
        <a class="btnName" href="/star">我的收藏</a>
      </div>
      <div class="btn2">
        <a class="btnName2" href="/map">探险图</a>
      </div>
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
  left: 42.5%;
  top:30%;
  position: absolute;
  z-index: 70;
}
#subtext {
  color: gold;
  font-size: 70px;
  font-family: fz;
  text-shadow: 0px 0px 10px rgba(0,0,0,.8);
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

.btn {
    position: absolute;
    display: inline-block;
    width: 250px;
    height: 50px;
    padding: 5px, 20px;
    margin: 0 20px;
    background-color: rgba(255, 69, 0, .6);
    /* border-radius: 10px; */
    box-shadow: 0 5px 10px 0 rgba(255, 69, 0, .35);
    transition: .7s;
    top: 60%;
    left: 20%;
}

.btn:hover {
    cursor: pointer;
    background-color: rgba(255, 0, 0, 0.8);
    box-shadow: 0 0 20px 10px rgba(255, 0, 0, 0.8);
}

.btnName {
    position: absolute;
    font-size: 1.8em;
    font-family: '微软雅黑';
    color: white;
    height: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -37.5%);
    text-decoration: none;
}

.btn2 {
    position: absolute;
    display: inline-block;
    width: 250px;
    height: 50px;
    padding: 5px, 20px;
    margin: 0 20px;
    background-color: rgba(255, 69, 0, .6);
    /* border-radius: 10px; */
    box-shadow: 0 5px 10px 0 rgba(255, 69, 0, .35);
    transition: .7s;
    top: 60%;
    right: 20%;
}

.btn:hover {
    cursor: pointer;
    background-color: rgba(255, 0, 0, 0.8);
    box-shadow: 0 0 20px 10px rgba(255, 0, 0, 0.8);
}

.btnName2 {
    position: absolute;
    font-size: 1.8em;
    font-family: '微软雅黑';
    color: white;
    height: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -37.5%);
    text-decoration: none;
}
</style>
