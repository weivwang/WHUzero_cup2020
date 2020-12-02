<!--
 * @Date: 2020-12-2 18:31:00
 * @LastEditors: CzYoL6
 * @LastEditTime: 2020-12-2 18:31:00
-->

<template>
  <div style="width: 100%; height: 100%">
    <el-container
      class="star_body"
      style="height: 100%; width: 100%"
      :style="note"
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
        <el-main> 
            
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      note: {
        backgroundImage: "url(" + require("../static/star_bg.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize:'100% 100%'
        
      },
    };
  },
};
</script>

<style scoped>
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
}

.float-image-div {
  position: absolute;
  z-index: 999;
  width: 100%;
  height: 100%;
}

.card-image {
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
