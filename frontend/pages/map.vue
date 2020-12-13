<!--
 * @Date: 2020-11-23 9:57:17
 * @Author: orangeboy
-->

<template>
  <div class="box">
        <el-header style="position:fixed;top: 0; width: 100%; z-index: 99">
          <div>
            <i class="el-icon-arrow-left back-btn" style="margin-right: 15px; cursor: pointer" @click="back"></i>
            <i class="el-icon-map-location" style="margin-right: 5px"></i>
            <span>探险图</span>
          </div>
        </el-header>
    <div v-swiper:mySwiper="swiperOption" class="swiperWrap">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <slide :items-in="items" background-image-file-name="map/1.jpg">
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
          <a href="" class="guiyuan"><p style="font-size:50px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></a>
          <a href="" class="meiyuan"><p style="font-size:50px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></a>
          <a href="" class="luojiashan"><p style="font-size:50px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></a>

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
  name: 'map2',
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
          fromX: 16,
          fromY: 7,
          toX: 10,
          toY: 14,
          itemId: 'yhcb',
          imageFileName: 'map/1_7.png',
          aniTime: 0.3,
          cardTitle: '樱花城堡',
          cardContent: '樱花城堡是对武汉大学狮子山腰上老斋舍与樱花的合称。樱花城堡的建筑材料以花岗岩的灰色为主色调，尤显质朴大方、厚稳沉重，三座罗马式拱门和依山势而上的百步梯，与建筑前的樱花组成了一道会让人油然而生的美景。每年毕业生作画留念的背景是这里，樱花节时更吸引了无数的游客再次驻足留念。',
          cardImageFileName: 'map/1_7.png',
          width: 38,
          height: 36,
          url: '/introduction',
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
        {
          fromX: 4,
          fromY: 24,
          toX: 15,
          toY: 22,
          itemId: 'gy',
          imageFileName: 'map/1_2.png',
          aniTime: 0.3,
          cardTitle: '桂园',
          cardContent: '桂园是武大的腹地，地理位置极好。由于重建，桂园现阶段只剩桂园七舍、八舍和九舍。桂园有很多桂花树，每年九月，整个桂园都弥漫着桂花的香，住在桂园的同学可以有花香伴着入眠。',
          cardImageFileName: 'map/1_2.png',
          width: 18,
          height: 18,
          tags: ['卓尔', '食堂难吃'],
          endScale: 1.5,
          url: '/gui-yuan',
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
        {
          fromX: 49,
          fromY: 10,
          toX: 15,
          toY: 14,
          itemId: 'ljs',
          imageFileName: 'map/1_5.png',
          aniTime: 0.3,
          cardTitle: '珞珈山',
          cardContent: '珞珈山位于中国湖北省武汉市武昌中部，东湖西南岸边，由十几个相连的小山组成，中国著名的高等学府武汉大学就坐落在此。\n' +
            '珞珈山山顶海拔118.5米，为东湖南岸临湖最高峰，山顶可远眺东湖全景和武汉景色。珞珈山属亚热带湿润季风气候，四季明显，植物茂盛，大部分植物由国立武汉大学引种。珞珈山名副其实遍地是名胜，现有周恩来故居，郭沫若、郁达夫、蒋介石别墅。',
          cardImageFileName: 'map/1_5.png',
          width: 25,
          height: 45,
          tags: ['爬山', '长跑'],
          endScale: 1.3,
          url: '/zhou-en-lai',
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
        {
          fromX: 24,
          fromY: 25,
          toX: 15,
          toY: 14,
          itemId: 'my',
          imageFileName: 'map/1_13.png',
          aniTime: 0.3,
          cardTitle: '梅园',
          cardContent: '在梅园的中心有着梅园的标志性的梅园小花园，其中一块石头上刻着大大的”梅“字，梅园多梅花，周围还有一圈的石凳，不少梅园的同学都会早上来这里早读，冬天的中午在这里晒太阳也是很多同学的选择，而且梅园也是距武汉大学图书馆总馆最近的地方，对于喜欢图书馆的同学，能住在梅园绝对是一种幸福。每年冬季当其它花儿已经不在灿烂的时候，唯有梅花开放在冬季，愈是寒冷，愈是风欺雪压，花开得愈精神，愈秀气梅花是中华民族的精神象征，具有强大而普遍的感染力和推动力。梅花坚韧不拔，不屈不挠，奋勇当先，自强不息的精神品质潜移默化的影响着住在梅园的同学。',
          cardImageFileName: 'map/1_13.png',
          width: 15,
          height: 38,
          tags: ['爬山', '长跑'],
          endScale: 1.5,
          url: '/mei-yuan',
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
    },
    back(){
      this.$router.go(-1);//返回上一层
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

.guiyuan{
  float: left;
  margin-top: -32%;
  margin-left: 28%;
}
.meiyuan{
  float: left;
  margin-left: 56%;
  margin-top: -32%;
}
.luojiashan{
  float: left;
  margin-top: -10%;
  margin-left: 50%;

}






</style>
