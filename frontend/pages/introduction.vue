<!--
 * @Date: 2020-11-23 9:57:17
 * @Author: orangeboy
-->

<template>
  <div class="box">
    <div v-swiper:mySwiper="swiperOption" class="swiperWrap">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <home title="行政楼" background-image-file-name="WHUDefault.jpg"></home>
        </div>
        <div class="swiper-slide">
          <detail
            card-title="行政楼"
            :card-content="administrationIntroduction"
            :card-images-file-name="['WHUDefault.jpg']"
            card-swiper-change-time="2000"
            background-image-file-name="WHUDefault.jpg"></detail>
        </div>
        <div class="swiper-slide">
          <slide :items-in="items" background-image-file-name="WHUDefault.jpg">
<!--            <template slot="items">-->
<!--              <item :from-x="30"-->
<!--                    :from-y="4.5"-->
<!--                    :to-x="8"-->
<!--                    :to-y="10"-->
<!--                    :width="38"-->
<!--                    :height="49"-->
<!--                    item-id="administration"-->
<!--                    image-file-name="WHUAdministrationBuilding.png"-->
<!--                    :ani-time="0.3"-->
<!--                    card-title="行政楼"-->
<!--                    :card-content="administrationIntroduction"-->
<!--                    :tags="['武汉大学', '珞珈山职业学院']"-->
<!--                    card-image-file-name="WHUDefault.jpg"-->
<!--                    :end-scale="1.0"-->
<!--                    :items="items"-->
<!--              >-->
<!--              </item>-->
<!--            </template>-->
          </slide>
        </div>
        <div class="swiper-slide">
          <comment ref="comment" articleId="99" background-image-file-name="WHUDefault.jpg"></comment>
        </div>
      </div>
<!--      <div class="swiper-pagination swiper-pagination-bullets"></div>-->
      <!--      <div class="swiper-pagination"></div>-->

      <!--      <div class="swiper-button-prev"></div>-->
      <!--      <div class="swiper-button-next"></div>-->

            <div class="introduction-swiper-scrollbar swiper-scrollbar"></div>
    </div>

  </div>
</template>

<script>

// import 'swiper/swiper-bundle.css';
import slide from '../components/IntroductionSlide'
import home from '../components/IntroductionHome'
import item from '../components/IntroductionItem'
import detail from '../components/IntroductionDetail'
import comment from '../components/IntroductionComment'

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
      items: [
        {
          fromX: 30,
          fromY: 4.5,
          toX: 8,
          toY: 10,
          itemId: 'administration',
          imageFileName: 'WHUAdministrationBuilding.png',
          aniTime: 0.3,
          cardTitle: '行政楼',
          cardContent: '武汉大学（Wuhan University）简称“武大”，是中华人民共和国教育部直属的综合性全国重点大学；位列“世界一流大学和一流学科”、“985工程”、“211工程”；入选学位授权自主审核单位、“珠峰计划”、“强基计划”、“2011计划”、“111计划”、卓越工程师教育培养计划、卓越法律人才教育培养计划、卓越医生教育培养计划、国家建设高水平大学公派研究生项目、国家级新工科研究与实践项目、一流网络安全学院建设示范项目高校、中国政府奖学金来华留学生接收院校、全国深化创新创业教育改革示范高校、国家大学生文化素质教育基地、大众创业万众创新示范基地、基础学科拔尖学生培养计划2.0基地，为欧亚-太平洋大学联盟、大学通识教育联盟、中国高校行星科学联盟、法学教育创新联盟、医学“双一流”建设联盟成员。',
          cardImageFileName: 'WHUDefault.jpg',
          width: 38,
          height: 49,
          tags: ['武汉大学', '珞珈山职业学院'],
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
        // {
        //   fromX: 0,
        //   fromY: 0,
        //   toX: 8,
        //   toY: 10,
        //   itemId: 'administration2',
        //   imageFileName: 'WHUAdministrationBuilding.png',
        //   aniTime: 0.3,
        //   cardTitle: '行政楼',
        //   cardContent: 'this.administrationIntroduction',
        //   cardImageFileName: 'WHUDefault.jpg',
        //   width: 38,
        //   height: 49,
        //   tags: ['武汉大学', '珞珈山职业学院'],
        //   endScale: 1.0,
        //   item: {
        //     /**
        //      * 是否显示详情
        //      */
        //     isShow: false,
        //
        //     /**
        //      * 是否展示阴影
        //      */
        //     isShowShadow: false,
        //
        //
        //     /**
        //      * 用于优化的计时器
        //      */
        //     clearInterval: null
        //   }
        // }
      ],
      administrationIntroduction: '武汉大学（Wuhan University）简称“武大”，是中华人民共和国教育部直属的综合性全国重点大学；位列“世界一流大学和一流学科”、“985工程”、“211工程”；入选学位授权自主审核单位、“珠峰计划”、“强基计划”、“2011计划”、“111计划”、卓越工程师教育培养计划、卓越法律人才教育培养计划、卓越医生教育培养计划、国家建设高水平大学公派研究生项目、国家级新工科研究与实践项目、一流网络安全学院建设示范项目高校、中国政府奖学金来华留学生接收院校、全国深化创新创业教育改革示范高校、国家大学生文化素质教育基地、大众创业万众创新示范基地、基础学科拔尖学生培养计划2.0基地，为欧亚-太平洋大学联盟、大学通识教育联盟、中国高校行星科学联盟、法学教育创新联盟、医学“双一流”建设联盟成员。',
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
            if(this.activeIndex === 3){
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
    }
  },
  mounted() {
    _this = this;
  }
}
</script>

<style scoped>
.box {
  height: 100%;
}

.swiperWrap{
  height: 100%;
}







</style>
