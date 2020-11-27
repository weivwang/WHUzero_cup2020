<template>
  <div id="component-root">
    <img class="background-image" src="~/static/WHUDefault.jpg"/>
    <div id="home-modal"></div>
    <span id="home-title">行政楼</span>
  </div>
</template>

<script>
export default {
  name: "IntroductionHome"
}
</script>

<style scoped>
#component-root {
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

#home-modal {
  background: black;
  opacity: 0.5;
  position: absolute;

  width: 100%;
  height: 105%;
}

#home-title {
  z-index: 9999;
  position: absolute;


  color: white;

  font-size: 5rem;

  margin: auto;


}

</style>
