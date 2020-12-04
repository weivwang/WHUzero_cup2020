
<template>
  <div class="box">
    <div v-swiper:mySwiper="swiperOption" class="swiperWrap">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <i class="el-icon-star-on star"
             @click="star"></i>

<!--          :style="{-->
<!--          'color': isStarred ? '#64dd17' : 'white'-->
<!--          }-->
          <home title="桂园" background-image-file-name="itemAndBackground/BgJiaoSanFront.JPG"></home>
        </div>
        <div class="swiper-slide">
          <detail
            card-title="桂园"
            :card-content="introduction"
            :card-images-file-name="['itemAndBackground/BgKunPengGuangChang.jpg']"
            card-swiper-change-time="3000"
            background-image-file-name="itemAndBackground/BgGuiCao.JPG"></detail>
        </div>
        <div class="swiper-slide">
          <slide background-image-file-name="itemAndBackground/BgGui.JPG">
            <template slot="items">
              <item :from-x="64"
                    :from-y="0"
                    :to-x="8"
                    :to-y="3"
                    :width="36"
                    :height="105"
                    item-id="CSBuilding"
                    image-file-name="itemAndBackground/ItemCSBuilding.png"
                    :ani-time="0.3"
                    card-title="计算机学院"
                    :card-content="introduction"
                    :tags="['院办', '做实验']"
                    card-image-file-name=""
                    :end-scale="0.5"
                    @showModal = "showModal"
                    @hideModal = "hideModal"
              >
              </item>

<!--              <item :from-x="0"-->
<!--                    :from-y="20"-->
<!--                    :to-x="2"-->
<!--                    :to-y="17"-->
<!--                    :width="50"-->
<!--                    :height="35"-->
<!--                    item-id="Zhuoer"-->
<!--                    image-file-name="itemAndBackground/ItemZhuoer.png"-->
<!--                    :ani-time="0.3"-->
<!--                    card-title="卓尔体育馆"-->
<!--                    :card-content="introduction"-->
<!--                    :tags="['羽毛球体育课', '开学典礼']"-->
<!--                    card-image-file-name="WHUDefault.jpg"-->
<!--                    :end-scale="0.8"-->
<!--              >-->
<!--              </item>-->
            </template>
          </slide>
        </div>
        <div class="swiper-slide">
          <slide background-image-file-name="itemAndBackground/BgGui2.png">
            <template slot="items">
              <item :from-x="0"
                    :from-y="38"
                    :to-x="-300"
                    :to-y="30"
                    :width="100"
                    :height="23"
                    item-id="JiaoSan"
                    image-file-name="itemAndBackground/ItemJiaoSan.png"
                    :ani-time="0.3"
                    card-title="教三"
                    :card-content="introduction"
                    :tags="['上课', '公选']"
                    card-image-file-name=""
                    :end-scale="1"
                    @showModal = "showModal"
                    @hideModal = "hideModal"
              >
              </item>

              <!--              <item :from-x="0"-->
              <!--                    :from-y="20"-->
              <!--                    :to-x="2"-->
              <!--                    :to-y="17"-->
              <!--                    :width="50"-->
              <!--                    :height="35"-->
              <!--                    item-id="Zhuoer"-->
              <!--                    image-file-name="itemAndBackground/ItemZhuoer.png"-->
              <!--                    :ani-time="0.3"-->
              <!--                    card-title="卓尔体育馆"-->
              <!--                    :card-content="introduction"-->
              <!--                    :tags="['羽毛球体育课', '开学典礼']"-->
              <!--                    card-image-file-name="WHUDefault.jpg"-->
              <!--                    :end-scale="0.8"-->
              <!--              >-->
              <!--              </item>-->
            </template>
          </slide>
        </div>

        <div class="swiper-slide">
          <comment ref="comment" article-id="99" background-image-file-name="itemAndBackground/BgJiaoSan2.jpg"></comment>
        </div>
      </div>
      <!--      <div class="swiper-pagination swiper-pagination-bullets"></div>-->
      <!--      <div class="swiper-pagination"></div>-->

      <!--      <div class="swiper-button-prev"></div>-->
      <!--      <div class="swiper-button-next"></div>-->

      <div class="introduction-swiper-scrollbar swiper-scrollbar"></div>

    </div>
<!--    <div id="modal"></div>-->
  </div>
</template>

<script>

// import 'swiper/swiper-bundle.css';
import slide from '../components/IntroductionSlide'
import home from '../components/IntroductionHome'
import item from '../components/IntroductionItem'
import detail from '../components/IntroductionDetail'
import comment from '../components/IntroductionComment'
import $ from "jquery";
import axios from "axios";

let _this;

export default {
  name: 'Introduction',
  components: {
    slide,
    home,
    item,
    detail,
    comment,
  },
  data: function(){
    return {
      isStarred: false,
      introduction: '武汉大学（Wuhan University）简称“武大”，是中华人民共和国教育部直属的综合性全国重点大学；位列“世界一流大学和一流学科”、“985工程”、“211工程”；入选学位授权自主审核单位、“珠峰计划”、“强基计划”、“2011计划”、“111计划”、卓越工程师教育培养计划、卓越法律人才教育培养计划、卓越医生教育培养计划、国家建设高水平大学公派研究生项目、国家级新工科研究与实践项目、一流网络安全学院建设示范项目高校、中国政府奖学金来华留学生接收院校、全国深化创新创业教育改革示范高校、国家大学生文化素质教育基地、大众创业万众创新示范基地、基础学科拔尖学生培养计划2.0基地，为欧亚-太平洋大学联盟、大学通识教育联盟、中国高校行星科学联盟、法学教育创新联盟、医学“双一流”建设联盟成员。',
      swiperOption: {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        mousewheel: true,
        direction: 'vertical',
        // pagination: {
        //   el: '.introduction-swiper-pagination',
        //   dynamicBullets: true
        // },

        scrollbar: {
          el: '.introduction-swiper-scrollbar',
          hide: true
        },

        // nextEl: '.introduction-swiper-button-next',
        // prevEl: '.introduction-swiper-button-prev',

        on: {
          slideChange() {
            if(this.activeIndex === 4){
              _this.notifyCommentNotAuthorized();
            }
          },
          // tap() {
          //   console.log('onTap', this);
          // }
        }
      }
    }
  },
  methods: {
    notifyCommentNotAuthorized: function () {
      _this.$refs.comment.notifyNotAuthorized();
    },
    showModal: function () {
      $('#modal').removeClass('animation-modal-state-B').addClass('animation-modal-state-A');
    },
    hideModal: function (){
      $('#modal').removeClass('animation-modal-state-A').addClass('animation-modal-state-B');
    },
    star: function () {
      this.$axios
        .get('/star/create/' + 1, {
          headers: { token: this.$store.state.token },
        })
        .then((rep) => {
          console.log(rep.data.status);
          if (rep.data.status === 200) {
            this.isStarred = true;
            $('.star').css('color', '#64dd17')
          }
        });
    }
  },
  mounted() {
    _this = this;
  }
}
</script>

<style scoped>
#modal {
  height: 100%;
  width: 100%;
  background: black;
  opacity: 0;
  z-index: 10;
}

.box {
  height: 100%;
}

.swiperWrap{
  height: 100%;
}

@keyframes animation-state-A-modal {
  from{
    opacity: 0;
  }
  to{
    opacity: 0.5;
  }
}

@keyframes animation-state-B-modal {
  from{
    opacity: 0.5;
  }
  to{
    opacity: 0;
  }
}

.animation-modal-state-B {
  animation:  animation-state-A-modal 1s forwards;
}

.animation-modal-state-A {
  animation: animation-state-B-modal 1s forwards;
}

.star {
  color: white;
  z-index: 9999;
  position: absolute;
  right: 3%;
  top: 3%;
  font-size: 3rem;
  cursor: pointer;

}

.star:hover {
  color: #64dd17;
}

</style>
