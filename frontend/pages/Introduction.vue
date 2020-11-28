<!--
 * @Date: 2020-11-23 9:57:17
 * @Author: orangeboy
-->
<template>
  <div id="box">
    <div v-swiper:mySwiper="swiperOption" class="swiperWrap">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <home title="行政楼" background-image-file-name="WHUDefault.jpg"></home>
        </div>
        <div class="swiper-slide">
          <slide background-image-file-name="WHUDefault.jpg">
            <template slot="item">
              <item from-x="30" from-y="4.5" to-x="8" to-y="10" item-id="administration" image-file-name="WHUAdministrationBuilding.png" ani-time="0.3"></item>
            </template>
          </slide>
        </div>
      </div>
<!--      <div class="swiper-pagination swiper-pagination-bullets"></div>-->
      <!--      <div class="swiper-pagination"></div>-->

      <!--      <div class="swiper-button-prev"></div>-->
      <!--      <div class="swiper-button-next"></div>-->

            <div class="swiper-scrollbar"></div>
    </div>

  </div>
</template>

<script>

// import 'swiper/swiper-bundle.css';
import slide from '../components/IntroductionSlide'
import home from '../components/IntroductionHome'
import item from '../components/IntroductionItem'

export default {
  name: 'Introduction',
  components: {
    slide,
    home,
    item
  },
  data: function(){
    return {
      swiperOption: {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        mousewheel: true,
        direction: 'vertical',
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },

        scrollbar: {
          el: '.swiper-scrollbar',
          hide: true
        },

        on: {
          slideChange() {
            console.log('onSlideChangeEnd', this);
          },
          tap() {
            console.log('onTap', this);
          }
        }
      }
    }
  }
}
</script>

<style scoped>
#box {
  height: 100%;
}

.swiperWrap{
  height: 100%;
}


</style>
