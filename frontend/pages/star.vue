<!--
 * @Date: 2020-12-2 18:31:00
 * @LastEditors: CzYoL6
 * @LastEditTime: 2020-12-2 18:31:00
-->

<template>
    <el-container style="height:100%"
    >
      <el-header>
        <div>
          <span>Star</span>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
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
        </el-aside>
        <el-main class = "container">
          
            
              <div style="width: 300px ; margin:10px 10px;">
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <span style="font-size: 2rem;">行政楼</span>
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
              </div>
              <div style="width: 300px ; margin:10px 10px;">
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <span style="font-size: 2rem;">卓尔体育馆</span>
                  </div>

                  <el-row>
                    <el-col :span="16">
                      <p></p>
                    </el-col>

                     <el-col :span="24">
                      <el-image
                        :src="require('../static/itemAndBackground/itemZhuoer.png')"
                        class="card-image"
                      ></el-image>
                    </el-col>
                  </el-row>
                </el-card>
              </div>
              <div style="width: 300px ; margin:10px 10px;">
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <span style="font-size: 2rem;">计算机学院</span>
                  </div>

                  <el-row>
                    <el-col :span="16">
                      <p></p>
                    </el-col>

                     <el-col :span="24">
                      <el-image
                        :src="require('../static/itemAndBackground/itemCSBuilding.png')"
                        class="card-image"
                      ></el-image>
                    </el-col>
                  </el-row>
                </el-card>
              </div>
              

        </el-main>
      </el-container>
    </el-container>
</template>

<script>
export default {
  data: function () {
    return {};
  },
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
.el-aside {
  background-color: #8c946a70;
}
.el-main {
  background-color: rgba(255, 248, 220, 0.37);
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
  width: 10%;
  height: 20%;
}

/* 卡片 */
.introduction-item-root {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 9999;
}

.box-card {
  display: table-cell;
  vertical-align: center;
  height: 450px;
}

.float-image-div {
  position: absolute;
  z-index: 999;
  width: 100%;
  height: 100%;
}

.card-image {
  height: 100%;
}

.review-box {
  display: flex;
  flex-wrap: wrap;

  margin-bottom: 15px;
}

.review-bubble {
  border-radius: 50px;

  margin-bottom: 10px;
  margin-right: 10px;
}

.review-bubble-content {
  padding-top: 10px;
  padding-bottom: 10px;
}

.new-review-box {
  width: 100%;
}

.new-review-box-input-and-button {
  display: flex;
  flex-wrap: wrap;
}
</style>
