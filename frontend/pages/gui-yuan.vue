
<template>
  <div class="box">
    <div v-swiper:mySwiper="swiperOption" class="swiperWrap">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <i class="el-icon-star-on star" @click="star"></i>

          <!--          :style="{-->
          <!--          'color': isStarred ? '#64dd17' : 'white'-->
          <!--          }-->
          <home
            title="桂园"
            background-image-file-name="itemAndBackground/BgJiaoSanFront.JPG"
          ></home>
        </div>
        <div class="swiper-slide">
          <detail
            card-title="桂园"
            card-content="武汉大学桂园位于武汉大学文理学部（即老武大）的中心位置，因遍植桂花而闻名，与老武大的樱园、梅园、枫园和湖滨并称。
包括10栋宿舍楼、桂园食堂、桂园餐厅、桂园操场、桂园风雨操场、桂园网球场、桂园学生浴室、教三、WTO学院等。
当年的“老八舍”就是今天的桂园五舍。方方、陈文新、李卓钧等一批文学界名流、学者均从这里走出，留下足迹和故事。"
            :card-images-file-name="[
              'itemAndBackground/BgKunPengGuangChang.jpg',
            ]"
            card-swiper-change-time="3000"
            background-image-file-name="itemAndBackground/BgGuiCao.JPG"
          ></detail>
        </div>
        <div class="swiper-slide">
          <slide background-image-file-name="itemAndBackground/BgGui.JPG">
            <template slot="items">
              <item
                :from-x="64"
                :from-y="0"
                :to-x="8"
                :to-y="3"
                :width="36"
                :height="105"
                item-id="CSBuilding"
                image-file-name="itemAndBackground/ItemCSBuilding.png"
                :ani-time="0.3"
                card-title="计算机学院"
                card-content="武汉大学计算机学院是全国最早建立的计算机科学院系之一，教学与科研历史可追溯到1958年成立的计算技术专业。近年来，学院在国家《统筹推进世界一流大学和一流学科建设总体方案》的指引下，不断提升学科综合实力和核心竞争力，在人才培养、科学研究、社会服务等方面取得显著成效。在2017年教育部学科评估中，计算机科学与技术及软件工程两个一级学科均位列A档。学院的计算机科学学科也是我校进入ESI全球排名前2‰的学科之一。"
                :tags="['院办', '做实验']"
                card-image-file-name=""
                :end-scale="0.5"
                @showModal="showModal"
                @hideModal="hideModal"
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
              <item
                :from-x="0"
                :from-y="38"
                :to-x="-300"
                :to-y="30"
                :width="100"
                :height="23"
                item-id="JiaoSan"
                image-file-name="itemAndBackground/ItemJiaoSan.png"
                :ani-time="0.3"
                card-title="教三"
                card-content="热心的徐教授铺开武汉大学校园地图，指着桂园宿舍楼一一还原它们的前世今生：桂园五舍、桂园二舍、桂园三舍、桂园四舍建于上世纪50年代末，当时分别叫八舍、九舍、十舍、十一舍；今天的桂园一舍及桂园六舍、桂园七舍都是改革开放之后仿照此前桂舍风格所建，而“老八舍”一直文科学生所居住，其中，包括恢复高考首批77级和78级中文系学生。78级学子、现为武大著名学者的李卓钧教授当年也住在“老八舍”。他回忆说，当时他们中文系男生住在一二楼，三四楼住女生，他的同班同学、著名作家方方也住在楼上。当年女学生喻杉名震中国文坛的小说《女大学生宿舍》也诞生在“老八舍”。"
                :tags="['上课', '公选']"
                card-image-file-name=""
                :end-scale="1"
                @showModal="showModal"
                @hideModal="hideModal"
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
          <comment
            ref="comment"
            article-id="2"
            background-image-file-name="itemAndBackground/BgJiaoSan2.jpg"
          ></comment>
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
import slide from "../components/IntroductionSlide";
import home from "../components/IntroductionHome";
import item from "../components/IntroductionItem";
import detail from "../components/IntroductionDetail";
import comment from "../components/IntroductionComment";
import $ from "jquery";
import axios from "axios";

let _this;

export default {
  name: "Introduction",
  components: {
    slide,
    home,
    item,
    detail,
    comment,
  },
  data: function () {
    return {
      isStarred: false,
      introduction:
        "武汉大学（Wuhan University）简称“武大”，是中华人民共和国教育部直属的综合性全国重点大学；位列“世界一流大学和一流学科”、“985工程”、“211工程”；入选学位授权自主审核单位、“珠峰计划”、“强基计划”、“2011计划”、“111计划”、卓越工程师教育培养计划、卓越法律人才教育培养计划、卓越医生教育培养计划、国家建设高水平大学公派研究生项目、国家级新工科研究与实践项目、一流网络安全学院建设示范项目高校、中国政府奖学金来华留学生接收院校、全国深化创新创业教育改革示范高校、国家大学生文化素质教育基地、大众创业万众创新示范基地、基础学科拔尖学生培养计划2.0基地，为欧亚-太平洋大学联盟、大学通识教育联盟、中国高校行星科学联盟、法学教育创新联盟、医学“双一流”建设联盟成员。",
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
    };
  },
  methods: {
    notifyCommentNotAuthorized: function () {
      _this.$refs.comment.notifyNotAuthorized();
    },
    showModal: function () {
      $("#modal")
        .removeClass("animation-modal-state-B")
        .addClass("animation-modal-state-A");
    },
    hideModal: function () {
      $("#modal")
        .removeClass("animation-modal-state-A")
        .addClass("animation-modal-state-B");
    },
    star: function () {
      axios
        .post(
          "/star/create",
          {
            article_id: 1,
          },
          {
            headers: {
              token: this.$store.state.token,
            },
          }
        )
        .then((rep) => {
          console.log(rep.data.status);
          if (rep.data.status === 200) {
            this.isStarred = true;
            $(".star").css("color", "#64dd17");
          }
        });
    },
  },
  mounted() {
    _this = this;
  },
};
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

.swiperWrap {
  height: 100%;
}

@keyframes animation-state-A-modal {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.5;
  }
}

@keyframes animation-state-B-modal {
  from {
    opacity: 0.5;
  }
  to {
    opacity: 0;
  }
}

.animation-modal-state-B {
  animation: animation-state-A-modal 1s forwards;
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
