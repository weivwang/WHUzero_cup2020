<!--
 * @Date: 2020-11-23 9:57:17
 * @Author: orangeboy
-->
<template>
  <div id="box">
    <div v-swiper:mySwiper="swiperOption" class="swiperWrap">
      <div class="swiper-wrapper">
        <div class="swiper-slide">

<!--          <img class="background-image" src="~/static/WHUDefault.jpg"/>-->
          <home></home>
        </div>
        <div class="swiper-slide">
          <slide></slide>
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

export default {
  name: 'Introduction',
  components: {
    slide,
    home
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
  },
  mounted() {
    // new Swiper('#swiper-container', {
    //   direction: 'vertical',
    //   autoHeight: true,
    //   pagination: {
    //     el: '.swiper-pagination',
    //   },
    //
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
    //
    //   scrollbar: {
    //     el: '.swiper-scrollbar',
    //     hide: true
    //   },
    //
    //   mousewheel: {
    //     invert: false,
    //   },
    // })
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
/*.swiper-container {*/
/*  width: 100%;*/
/*  height: 100%;*/
/*}*/
/*.swiper-slide {*/
/*  text-align: center;*/
/*  font-size: 18px;*/
/*  background: #fff;*/

/*  !* Center slide text vertically *!*/
/*  display: -webkit-box;*/
/*  display: -ms-flexbox;*/
/*  display: -webkit-flex;*/
/*  display: flex;*/
/*  -webkit-box-pack: center;*/
/*  -ms-flex-pack: center;*/
/*  -webkit-justify-content: center;*/
/*  justify-content: center;*/
/*  -webkit-box-align: center;*/
/*  -ms-flex-align: center;*/
/*  -webkit-align-items: center;*/
/*  align-items: center;*/
/*}*/





</style>
