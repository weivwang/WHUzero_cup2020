
<template>
<div>
  <div id="left" onclick="move()"></div>
      <div id="right" onclick="move()"></div>

</div>
</template>
<script>
export default {
  components: {},
  head() {
    return {
      script: [{ src: "/krpano.js" }, { src: "/scroll.js" }],
    };
  },
  // mounted() {
  //   setInterval(this.closepicture, 2000);
  //   embedpano({
  //     swf: "krpano.swf",
  //     xml: "krpano.xml",
  //     target: "pano",
  //     html5: "auto",
  //     mobilescale: 1.0,
  //     passQueryParameters: true,
  //   });
  // },
  // data() {
  //   return {
  //     show: false,
  //     showlayer: true,
  //     showpicture: true,
  //   };
  // },
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
