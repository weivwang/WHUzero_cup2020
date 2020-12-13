<!--
 * @Date: 2020-12-2 18:31:00
 * @LastEditors: CzYoL6
 * @LastEditTime: 2020-12-2 18:31:00
-->


<template>
  <el-container style="height: 100%">
    <div class="bg"></div>
    <el-header>
      <div>
        <i class="el-icon-arrow-left back-btn" style="margin-right: 15px" ></i>
        <i class="el-icon-star-off" style="margin-right: 5px"></i>
        <span>Star</span>
      </div>
    </el-header>
    <el-container>
      <!-- <el-aside width="200px">
        <el-row class="tac">
          <el-col>
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
            >
              <el-menu-item>
                <i class="el-icon-setting"></i>
                <span slot="title">卡片</span>
              </el-menu-item>
              <el-menu-item>
                <i class="el-icon-setting"></i>
                <span slot="title">图片</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside> -->
      <el-main>
        <!-- <el-row gutter="20" class="cardRow">
          <el-col
            :span="6"
            v-for="(o, index) in 6"
            :key="o"

          >
            <el-card class="box-card" shadow="hover">
              <div slot="header" class="clearfix" style="display: flex">
                <a
                  style="font-size: 2rem; text-align: center; width: 100%"
                  href="/introduction"
                  >行政楼</a
                >
              </div>

              <el-row>
                <el-col :span="16">
                  <p></p>
                </el-col>

                <el-col :span="24">
                  <el-image
                    :src="require('../static/WHUAdministrationBuilding.png')"
                    class="card-image"
                  ></el-image>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
        </el-row> -->
        <waterfall :line-gap="300" :watch="items">
          <!-- each component is wrapped by a waterfall slot -->
          <waterfall-slot
            v-for="(item, index) in items"
            :width="item.width"
            :height="item.height"
            :order="index"
            :key="item.id"
            move-class="waterslot"
          >
            <!-- <el-card class="box-card" shadow="hover">
              <div slot="header" class="clearfix" style="display: flex">
                <a
                  style="font-size: 2rem; text-align: center; width: 100%"
                  href="/introduction"
                  >行政楼</a
                >
              </div>

              <el-row>
                <el-col :span="16">
                  <p></p>
                </el-col>

                <el-col :span="24">
                  <el-image
                    :src="require('../static/WHUAdministrationBuilding.png')"
                    class="card-image"
                  ></el-image>
                </el-col>
              </el-row>
            </el-card> -->
            <div class="item">
              <div
                class="card"
                :style="{ backgroundImage:'url('+item.img+')' }"
                @click="onClick(item.url)"
              >
                <span class="title">{{item.name}}</span>
              </div>
            </div>
          </waterfall-slot>
        </waterfall>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Waterfall from "vue-waterfall/lib/waterfall";
import WaterfallSlot from "vue-waterfall/lib/waterfall-slot";
import VueAnimatedList from 'vue-animated-list'
export default {
  data: function () {
    return {
      items: [
        {
          img:  require("../static/cover/DSC00711.png"),
          name: "牌坊",
          width: 300,
          height: 400,
          id: 1,
          url: "https://baike.baidu.com/item/%E6%AD%A6%E6%B1%89%E5%A4%A7%E5%AD%A6%E7%89%8C%E6%A5%BC/3271452?fr=aladdin"
        },
        {
          img:  require("../static/cover/DSC00764.png"),
          name: "城设学院",
          width: 300,
          height: 300,
          id: 2,
          url: "http://sud.whu.edu.cn/cmfx/index.html"
        },
        {
          img:  require("../static/cover/DSC00766.png"),
          name: "樱花大道附近",
          width: 300,
          height: 300,
          id: 3,
          url: "https://baike.baidu.com/item/%E6%A8%B1%E8%8A%B1%E5%A4%A7%E9%81%93/18656782?fr=aladdin"
        },
        {
          img:  require("../static/cover/DSC00783.png"),
          name: "计算机学院",
          width: 300,
          height: 600,
          id: 4,
          url: "http://cs.whu.edu.cn/"
        },
        {
          img:  require("../static/cover/DSC00768.png"),
          name: "樱花大道附近",
          width: 300,
          height: 500,
          id: 5,
          url: "https://baike.baidu.com/item/%E6%A8%B1%E8%8A%B1%E5%A4%A7%E9%81%93/18656782?fr=aladdin"
        },
        {
          img:  require("../static/cover/DSC00773.png"),
          name: "桂操",
          width: 300,
          height: 400,
          id: 6,
          url: "https://baike.baidu.com/item/%E6%A1%82%E5%9B%AD/12428175?fr=aladdin"
        },
        {
          img:  require("../static/cover/DSC00672.png"),
          name: "梅操附近",
          width: 300,
          height: 600,
          id: 7,
          url: ""
        },
        {
          img:  require("../static/cover/DSC00693.png"),
          name: "珞珈山",
          width: 300,
          height: 300,
          id: 8,
          url: "https://baike.baidu.com/item/%E7%8F%9E%E7%8F%88%E5%B1%B1/446864?fr=aladdin"
        },
        {
          img:  require("../static/cover/DSC00698.png"),
          name: "珞珈山",
          width: 300,
          height: 400,
          id: 9,
          url: "https://baike.baidu.com/item/%E7%8F%9E%E7%8F%88%E5%B1%B1/446864?fr=aladdin"
        },
        {
          img:  require("../static/cover/DSC00694.png"),
          name: "珞珈山",
          width: 300,
          height: 200,
          id: 10,
          url: "https://baike.baidu.com/item/%E7%8F%9E%E7%8F%88%E5%B1%B1/446864?fr=aladdin"
        },
         {
          img:  require("../static/cover/DSC00696.png"),
          name: "珞珈山",
          width: 300,
          height: 200,
          id: 11,
          url: "https://baike.baidu.com/item/%E7%8F%9E%E7%8F%88%E5%B1%B1/446864?fr=aladdin"
        },
        {
          img:  require("../static/cover/DSC00662.png"),
          name: "樱顶",
          width: 300,
          height: 500,
          id: 12,
          url: "https://baike.baidu.com/item/%E6%A8%B1%E9%A1%B6"
        },
        {
          img:  require("../static/cover/DSC00675.png"),
          name: "行政楼",
          width: 300,
          height: 300,
          id: 13,
          url: "https://baike.baidu.com/item/%E6%AD%A6%E6%B1%89%E5%A4%A7%E5%AD%A6%E8%A1%8C%E6%94%BF%E6%A5%BC"
        },
        {
          img:  require("../static/cover/DSC00661.png"),
          name: "樱顶宿舍",
          width: 300,
          height: 600,
          id: 14,
          url: "https://baike.baidu.com/item/%E6%A8%B1%E9%A1%B6"
        },
        {
          img:  require("../static/cover/DSC00778.png"),
          name: "鲲鹏广场",
          width: 300,
          height: 300,
          id: 15,
          url: "https://baike.baidu.com/item/%E9%B2%B2%E9%B9%8F%E5%B9%BF%E5%9C%BA/3271962"
        },
      ],
    };
  },
  components: {
    Waterfall,
    WaterfallSlot,
  },
  methods: {
    back(){
      alert("back")
      this.$router.go(-1);//返回上一层
    },
    onClick(url){
      if(url == "") {
        this.$notify({
          title: '抱歉',
          message: '暂未收录T_T',
          position: 'top-left'
        });
      }
      else
        window.location.href = url;
    }
  }
};
</script>

<style scoped>
.container {
  /* background-color: black; */
  position: relative;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  justify-items: flex-start;
  /*align-content: space-around;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  text-align: center;
  /* opacity: 0; */
}
.star_body {
  height: 100%;
}
.el-header {
  background-color: #45494e5e;
  font-size: 20px;
  color: white;
  display: flex;
  align-items: center;
}
.el-header div {
  display: flex;
  align-items: center;
  justify-items: center;
}
.el-main {
  /* background: url(https://p0.meituan.net/movie/dbc7ef7ade6ee49ff25bbc7fd7620fd9528767.jpg@464w_644h_1e_1c);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover; */
  /* text-align: center; */
  /* filter: blur(15px); */
}
.bg{
  position: fixed;
  background: url(../static/star_bg.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100%;
  width: 100%;
  filter: blur(10px);
  z-index: -9;
}

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.card {
  /* background-image: url(../static/itemAndBackground/BgJiaoSanFront.jpg); */
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding: 20px 20px 20px 20px;
  /* top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px; */
}

.item {
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  font-size: 1.2em;
  color: rgb(0, 158, 107);
  border-radius: 15px;
}

.card .movie {
  color: white;
  font-weight: bold;
  position: absolute;
  display: block;
  width: 50px;
  left: -1%;
  top: 10%;
  box-shadow: 0 0 10px 0 gray;
  background-color: rgb(77, 129, 233);
}

.card .title {
  color: #ededed;
  position: absolute;
  left: 0%;
  top: 100%;
  text-align: center;
  transform: translate(0, -100%);
  width: 100%;
  padding: 10px 0;
  border-radius: 10px;
  background-image: linear-gradient(
    0deg,
    rgba(255, 205, 130, 0.575),
    rgba(255, 221, 108, 0)
  );
}

.card:hover {
  box-shadow: 0 0 2px 2px rgba(255, 221, 108, 1);
  /* transform: scale(1.01); */
  cursor: pointer;
}

.waterslot{
  /* applied to the element when moving */
  transition: transform .5s cubic-bezier(.55,0,.1,1);

}

.back-btn:hover{
box-shadow: 0 0 2px 2px rgba(255, 221, 108, 1);
  /* transform: scale(1.01); */
  cursor: pointer;
}
</style>
