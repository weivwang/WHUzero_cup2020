<!--
 * @Date: 2020-12-03 23:35:31
 * @LastEditors: QiuJhao
 * @LastEditTime: 2020-12-03 23:48:28
-->
<template>
  <div>
<!--    <el-header style="position:fixed;top: 0; width: 100%; z-index: 99999">-->
<!--      <div>-->
<!--        <i class="el-icon-arrow-left back-btn" style="margin-right: 15px" @click="back"></i>-->
<!--        <i class="el-icon-map-location" style="margin-right: 5px"></i>-->
<!--        <span>Map</span>-->
<!--      </div>-->
<!--    </el-header>-->
    <div v-swiper:mySwiper="swiperOption" class="swiperWrap">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <slide background-image-file-name="map/1.jpg" :items-in="items"></slide>
        </div>
      </div>

    </div>

<!--    <item-->
<!--      :from-x="22"-->
<!--      :from-y="5"-->
<!--      :to-x="20"-->
<!--      :to-y="13"-->
<!--      :width="30"-->
<!--      :height="40"-->
<!--      item-id="administration"-->
<!--      image-file-name="map/1_7.png"-->
<!--      :ani-time="0.3"-->
<!--      card-title="樱花城堡"-->
<!--      card-content="樱花城堡是对武汉大学狮子山腰上老斋舍与樱花的合称。樱花城堡的建筑材料以花岗岩的灰色为主色调，尤显质朴大方、厚稳沉重，三座罗马式拱门和依山势而上的百步梯，与建筑前的樱花组成了一道会让人油然而生的美景。每年毕业生作画留念的背景是这里，樱花节时更吸引了无数的游客再次驻足留念。"-->
<!--      :tags="['老斋舍', '樱花城堡']"-->
<!--      card-image-file-name="map/1_7.png"-->
<!--      :end-scale="1.0"-->
<!--    >-->

<!--    </item>-->
<!--    <a href="" class="guiyuan"><p style="font-size:50px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></a>-->
<!--    <a href="" class="meiyuan"><p style="font-size:50px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></a>-->
<!--    <a href="" class="luojiashan"><p style="font-size:50px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></a>-->

<!--
    <item
      :from-x="10"
      :from-y="20"
      :to-x="20"
      :to-y="13"
      :width="20"
      :height="30"
      item-id="building"
      image-file-name="map/1_2.png"
      :ani-time="0.3"
      card-title="计算机学院"
      card-content="计算机学院"
      :tags="['计算机学院大楼', '卓尔体育馆']"
      card-image-file-name="map/1.jpg"
      :end-scale="1.0"
    >
    </item>
    <item
      :from-x="10"
      :from-y="20"
      :to-x="20"
      :to-y="13"
      :width="30"
      :height="40"
      item-id="building"
      image-file-name="map/1_3.png"
      :ani-time="0.3"
      card-title="计算机学院"
      card-content="计算机学院"
      :tags="['计算机学院大楼', '卓尔体育馆']"
      card-image-file-name="map/1.jpg"
      :end-scale="1.0"
    >
    </item>
     -->
  </div>

</template>

<script>
import slide from "../components/IntroductionSlide";
import home from "../components/IntroductionHome";
import item from "../components/item_new";
import detail from "../components/IntroductionDetail";
import comment from "../components/IntroductionComment";

export default {

  components: {
    slide,
    home,
    item,
    detail,
    comment,
  },
  data: function (){
    return {
      swiperOption: {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        mousewheel: true,
        direction: "vertical",
        // pagination: {
        //   el: '.introduction-swiper-pagination',
        //   dynamicBullets: true
        // },

        scrollbar: {
          el: ".introduction-swiper-scrollbar",
          hide: true,
        },

        // nextEl: '.introduction-swiper-button-next',
        // prevEl: '.introduction-swiper-button-prev',

        on: {
          slideChange() {
            if (this.activeIndex === 4) {
              _this.notifyCommentNotAuthorized();
            }
          },
          // tap() {
          //   console.log('onTap', this);
          // }
        },
      },
      items: [
        {
          fromX: 16,
          fromY: 7,
          toX: 13,
          toY: 13,
          itemId: 'yhcb',
          imageFileName: 'map/1_7.png',
          aniTime: 0.3,
          cardTitle: '樱花城堡',
          cardContent: '樱花城堡是对武汉大学狮子山腰上老斋舍与樱花的合称。樱花城堡的建筑材料以花岗岩的灰色为主色调，尤显质朴大方、厚稳沉重，三座罗马式拱门和依山势而上的百步梯，与建筑前的樱花组成了一道会让人油然而生的美景。每年毕业生作画留念的背景是这里，樱花节时更吸引了无数的游客再次驻足留念。',
          cardImageFileName: 'map/1_7.png',
          width: 38,
          height: 36,
          tags: ['老斋舍', '樱花城堡'],
          endScale: 1.0,
          item: {
            /**
             * 是否显示详情
             */
            isShow: false,

            /**
             * 是否展示阴影
             */
            isShowShadow: false,


            /**
             * 用于优化的计时器
             */
            clearInterval: null
          }
        },
      ],

    }
  },
  methods:{
    back(){
      alert("back")
      this.$router.go(-1);//返回上一层
    }
  }
};
</script>

<style scoped>

.el-header {
  background-color: #45494e5e;
  font-size: 20px;
  color: rgba(255,255,255,.8);
  display: flex;
  align-items: center;
}
.el-header div {
  display: flex;
  align-items: center;
  justify-items: center;
}

.back-btn:hover{
box-shadow: 0 0 2px 2px rgba(255, 221, 108, 1);
  /* transform: scale(1.01); */
  cursor: pointer;
}
.map {
  float: left;
  width: 100%;
  /* height: 40%; */
  /* margin-left: 10%; */
}
/*.guiyuan{*/
/*  float: left;*/
/*  margin-top: -32%;*/
/*  margin-left: 28%;*/
/*}*/
/*.meiyuan{*/
/*  float: left;*/
/*  margin-left: 56%;*/
/*  margin-top: -32%;*/
/*}*/
/*.luojiashan{*/
/*  float: left;*/
/*  margin-top: -10%;*/
/*  margin-left: 50%;*/

/*}*/
.swiperWrap {
  height: 100%;
}
</style>
