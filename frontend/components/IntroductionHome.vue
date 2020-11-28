<template>
  <div class="component-root">
    <img class="background-image" src="~/static/WHUDefault.jpg"/>
    <div class="home-modal"></div>
    <span class="home-title">行政楼</span>

    <div class="scroll-down">
      <span class="scroll-text">向下滑动</span>
      <div class="scroll-here">
        <i class="el-icon-arrow-down" style="color: white; font-size: 25px" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroductionHome"
}
</script>

<style scoped>
.scroll-text {
  color: white;
  text-align: center;
  display: block;
  letter-spacing: 5px;

  padding-left: 3px;
  margin-bottom: -7px;
}
.scroll-down {
  position: absolute;
  bottom: 50px;
  text-align: center;
}

.scroll-here {
  text-align: center;
  animation: arrow-jump 1s infinite;
}

.component-root {
  width: 100%;
  height: 105%;

  display: flex;
  align-items:center;
  justify-content:center;
}

.background-image {
  width: 100%;
  height: 105%;
  object-fit: cover;

  position: absolute;
}

.home-modal {
  background: black;
  opacity: 0.5;
  position: absolute;

  width: 100%;
  height: 105%;
}

.home-title {
  z-index: 9999;
  position: absolute;


  color: white;

  font-size: 5rem;

  margin: auto;

  font-weight: lighter;
}

@keyframes arrow-jump {
  0% {
    opacity: 1;
    /* -webkit-transform: translateY(10px); */
    -moz-transform: translateY(10px);
    -o-transform: translateY(10px);
    transform: translateY(10px);
  }
  50% {
    opacity: 1;
    -webkit-transform: translateY(20px);
    -moz-transform: translateY(20px);
    -o-transform: translateY(20px);
    /* transform: translateY(20px); */
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(10px);
    -moz-transform: translateY(10px);
    -o-transform: translateY(10px);
    transform: translateY(10px);
  }
}

</style>
