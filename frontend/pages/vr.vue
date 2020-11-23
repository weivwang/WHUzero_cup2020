<template>
  <div>
    <div id="scroll">
      <div id="left" v-on:click="start = true"></div>
      <div id="right" v-on:click="start = true"></div>
    </div>
    <div id="subject">
      <p id="subtext">武大探险</p>
    </div>
    <div class="title" style="width: 100%; height: 100%">
      <div id="pano" style="width: 100%; height: 100%"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      showlayer: true,
      showpicture: true,
      width: 32,
    };
  },
  props: {
    start: {
      type: Boolean,
      default: false, // 控制卷轴开始
    },
  },
  head() {
    return {
      script: [{ src: "/krpano.js" }],
    };
  },
  mounted() {
    setInterval(this.closepicture, 2000);
    embedpano({
      swf: "krpano.swf",
      xml: "krpano.xml",
      target: "pano",
      html5: "auto",
      mobilescale: 1.0,
      passQueryParameters: true,
    });
  },
  //TODO:使用rem适配不同的分辨率设备
  //TODO:this.$refs.reel.clientWidth获取展开卷轴的宽度
  methods: {
    move() {
      if (wid < 368) {
        var right = document.getElementById("right");
        wid += 20;
        right.style.width = wid + "px";
        var t = setTimeout("move()", 100);
        if (wid > 368) clearTimeout(t);
      }
    },
  },
  watch: {
    start: function (e) {
      if (e == true) {
        this.move();
      }
    },
  },
};
</script>

<style scoped>
html,
body {
  margin: 0;
  height: 100%;
}
.title {
  position: absolute;
  z-index: 50;
}
.layer {
  position: absolute;
  bottom: 0;
  left: 1%;
  width: 270px;
  height: 50%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
  color: rgba(255, 255, 255, 0.95);
  font-family: "Yu Gothic UI";
  font-weight: bold;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.icon {
  position: absolute;
  z-index: 2;
  right: 1%;
  top: 3%;
}

.layer_info {
  margin-left: 10%;
}
.layer_title {
  font-size: 24px;
  margin-top: 7%;
}
.layer_child {
  font-size: 16px;
  margin-top: 8%;
}
.farm_information {
  border: 1px rgba(0, 0, 0, 0.8) solid;
  width: 300px;
  height: 350px;
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  margin-left: -150px;
  margin-top: -175px;
  background: rgba(0, 0, 0, 0.75);
  color: rgba(255, 255, 255, 0.9);
  font-family: 楷体;
  font-weight: bold;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.farm_picture {
  background: url("../static/picture1.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 100%;
  height: 60%;
}
.farm_text_title {
  height: 40%;
  text-align: center;
  font-size: 20px;
  margin-top: 8%;
}
.farm_hostname {
  text-align: center;
  font-size: 14px;
  margin-top: 5%;
  color: rgba(255, 255, 255, 0.6);
}
.farm_button {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6%;
  background: rgba(0, 0, 0, 0.65);
  width: 50%;
  height: 30px;
  border-color: aquamarine;
  border-radius: 25px;
  font-size: 16px;
  font-family: 楷体;
  color: rgba(255, 255, 255, 0.9);
}
.mouse {
  position: absolute;
  width: 150px;
  height: 150px;
  top: 50%;
  left: 50%;
  margin-top: -75px;
  margin-left: -75px;
  z-index: 2;
}
.mouse_title {
  color: rgba(255, 255, 255, 0.9);
  font-size: 13px;
  position: absolute;
  bottom: 20px;
  left: 25px;
}
.farm_mouse_picture {
  width: 150px;
  height: 150px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.layer_fade-enter-active {
  transition: all 0.2s ease;
}
.layer_fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.layer_fade-enter,
.layer_fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

.text {
  width: 50px;
  height: 50px;
  background: rgb(231, 220, 220);
  float: left;
  margin-left: 50%;
}

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
#subject {
  float: left;
  width: 360px;
  height: 190px;
  margin-left: 45%;
  margin-top: 23%;
  position: absolute;
  z-index: 70;
}
#subtext {
  color: white;
  font-size: 50px;
  font-family: Helvetica;
}
</style>
