<template>
  <div class="root">
    <div class="card-box">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="font-size: 2rem">{{cardTitle}}</span>
        </div>
        <div class="card-content">

        </div>

        <div class="card-picture">
          <div v-swiper:mySwiper="swiperOption" style="width: 100%">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="fileName in cardImagesFileName">
                <el-image :src="require('../static/' + fileName)"/>
              </div>
              <div class="swiper-slide">
                <p>
                  {{cardContent}}
                </p>
              </div>
            </div>

            <div class="swiper-pagination swiper-pagination-bullets detail-swiper-pagination-bullets"></div>
            <div class="detail-swiper-pagination swiper-pagination"></div>

<!--            <div class="detail-swiper-button-prev swiper-button-prev"></div>-->
<!--            <div class="detail-swiper-button-next swiper-button-next"></div>-->

<!--            <div class="swiper-scrollbar"></div>-->
          </div>
        </div>
      </el-card>
    </div>
    <div class="detail-modal"></div>
    <img class="background-image" :src="require('../static/' + backgroundImageFileName)"/>

  </div>
</template>

<script>
import $ from "jquery";

let cardImagesFileName = [];
export default {
  props: ['backgroundImageFileName', 'cardTitle', 'cardContent', 'cardImagesFileName', 'cardSwiperChangeTime'],
  name: "IntroductionDetail",
  data(){
    return {
      swiperOption: {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        mousewheel: true,
        direction: 'horizontal',
        pagination: {
          el: '.detail-swiper-pagination',
          dynamicBullets: true
        },
        bullets: 'detail-swiper-pagination-bullets',

        // scrollbar: {
        //   el: '.detail-swiper-scrollbar',
        //   hide: true
        // },

        navigation: {
          nextEl: '.detail-swiper-button-next',
          prevEl: '.detail-swiper-button-prev',
        },

        autoplay: {
          delay: this.cardSwiperChangeTime,
          stopOnLastSlide: true,
          disableOnInteraction: true,
        },



        on: {
          slideChange() {
            console.log('onSlideChangeEnd', this);

            if(this.activeIndex === cardImagesFileName.length){
              $('.box-card').removeClass('card-size-state-A').addClass('card-size-state-B');
            }
            else{
              $('.box-card').removeClass('card-size-state-B').addClass('card-size-state-A');

            }
          },
          // tap() {
          //   console.log('onTap', this);
          // }
        }
      }

    }
  },
  mounted() {
    cardImagesFileName = this.cardImagesFileName;
  }
}
</script>

<style scoped>
.detail-modal {
  background: black;
  opacity: 0.5;
  position: absolute;

  width: 100%;
  height: 105%;
}

.background-image {
  width: 100%;
  height: 105%;
  object-fit: fill;
}

.root{
  position: relative;
  width: 100%;
  height: 100%;
}

.box-card {
  margin: auto;
  height: 80%;
  width: 900px;
  z-index: 99;


}

.card-box{
  position: absolute;
  margin: auto;
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
}

.card-size-state-A {
  animation: animation-card-size-B-to-A 0.5s forwards;
}

.card-size-state-B {
  animation: animation-card-size-A-to-B 0.5s forwards;
}

@keyframes animation-card-size-A-to-B {
  0% {
    height: 80%;
  }
  100%{
    height: 40%;
  }
}

@keyframes animation-card-size-B-to-A {
  0% {
    height: 40%;
  }
  100%{
    height: 80%;
  }
}

</style>
