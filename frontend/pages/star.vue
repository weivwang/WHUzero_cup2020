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
        <i class="el-icon-arrow-left back-btn" style="margin-right: 15px" @click="back"></i>
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
          img:  require("../static/itemAndBackground/BgJiaoSanFront.jpg"),
          name: "教三",
          width: 300,
          height: 200,
          id: 1,
        },
        // {
        //   width: 300,
        //   height: 100,
        //   id: 2,
        // },
        // {
        //   width: 300,
        //   height: 300,
        //   id: 3,
        // },
        // {
        //   width: 300,
        //   height: 250,
        //   id: 4,
        // },
        // {
        //   width: 300,
        //   height: 50,
        //   id: 5,
        // },
        // {
        //   width: 300,
        //   height: 200,
        //   id: 6,
        // },
        // {
        //   width: 300,
        //   height: 100,
        //   id: 7,
        // },
        // {
        //   width: 300,
        //   height: 300,
        //   id: 8,
        // },
        // {
        //   width: 300,
        //   height: 250,
        //   id: 9,
        // },
        // {
        //   width: 300,
        //   height: 50,
        //   id: 10,
        // },
        // {
        //   width: 300,
        //   height: 200,
        //   id: 11,
        // },
        // {
        //   width: 300,
        //   height: 100,
        //   id: 12,
        // },
        // {
        //   width: 300,
        //   height: 300,
        //   id: 13,
        // },
        // {
        //   width: 300,
        //   height: 250,
        //   id: 14,
        // },
        // {
        //   width: 300,
        //   height: 50,
        //   id: 15,
        // },
        // {
        //   width: 300,
        //   height: 200,
        //   id: 16,
        // },
        // {
        //   width: 300,
        //   height: 100,
        //   id: 17,
        // },
        // {
        //   width: 300,
        //   height: 300,
        //   id: 18,
        // },
        // {
        //   width: 300,
        //   height: 250,
        //   id: 19,
        // },
        // {
        //   width: 300,
        //   height: 50,
        //   id: 20,
        // },
        // {
        //   width: 300,
        //   height: 200,
        //   id: 21,
        // },
        // {
        //   width: 300,
        //   height: 100,
        //   id: 22,
        // },
        // {
        //   width: 300,
        //   height: 300,
        //   id: 23,
        // },
        // {
        //   width: 300,
        //   height: 250,
        //   id: 24,
        // },
        // {
        //   width: 300,
        //   height: 50,
        //   id: 25,
        // },
        // {
        //   width: 300,
        //   height: 200,
        //   id: 26,
        // },
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
