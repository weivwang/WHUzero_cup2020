<template>
  <div class="introduction-item-root">
    <div class="float-image-div">
      <img :src="require('~/static/' + imageFileName)" :id="'item-image-' + this.itemId" ref="administrationBuildingImage"
           @click="onItemClick"
           @mouseenter="administrationBuildingImage.isShowShadow = true"
           @mouseleave="onItemMouseLeave"
           :style="{
             'opacity': administrationBuildingImage.isShowShadow ? '1' : '0',
         'cursor' : administrationBuildingImage.isShowShadow ? 'pointer' : ''
           }"/>
    </div>

    <div :id="'card-box-' + this.itemId">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="font-size: 2rem">{{cardTitle}}</span>
        </div>

        <el-row>
          <el-col :span="16">
            <p>{{cardContent}}</p>
          </el-col>

          <el-col :span="6" offset="2">
            <el-image :src="require('~/static/' + cardImageFileName)" class="card-image"></el-image>
          </el-col>
        </el-row>
        <el-divider></el-divider>
        <div class="review-box">
          <div class="el-card review-bubble is-always-shadow">
            <div class="el-card__body review-bubble-content">
              <span>好好好</span>
            </div>
          </div>

          <div class="el-card review-bubble is-always-shadow">
            <div class="el-card__body review-bubble-content">
              <span>好好好</span>
            </div>
          </div>
        </div>

        <div class="new-review-box">
          <!--          <div class="el-card review-bubble is-always-shadow">-->
          <!--            <div class="el-card__body review-bubble-content">-->
          <!--            </div>-->
          <!--          </div>-->
          <div class="new-review-box-input-and-button">
            <el-input style="width: 75%; margin-right: 2%" placeholder="评论"></el-input>
            <el-button type="primary" style="width: 22%">发送</el-button>
          </div>

        </div>
      </el-card>


    </div>

    <div :id="'modal-' + itemId"></div>

  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "IntroductionItem",
  props: ['fromX', 'fromY', 'toX', 'toY', 'itemId', 'imageFileName', 'aniTime', 'cardTitle', 'cardContent', 'cardImageFileName', 'width', 'height'],
  data() {
    return {
      administrationBuildingImage: {
        /**
         * 是否显示详情
         */
        isShow: false,

        /**
         * 是否展示阴影
         */
        isShowShadow: false,

        clearInterval: null
      },

    }
  },
  mounted() {
    let style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    document.head.appendChild(style);
    let sheet = style.sheet;

    sheet.insertRule(
      `@keyframes animation-state-A-item-${this.itemId} {
  from{
        margin-top: ${this.fromY}%;
        margin-left: ${this.fromX}%;
      }
  to{
    margin-top: ${this.toY}%;
    margin-left: ${this.toX}%;
  }
}`,0);

    sheet.insertRule(
      `
      @keyframes animation-state-B-item-${this.itemId} {
  from{
    margin-top: ${this.toY}%;
    margin-left: ${this.toX}%;
  }
  to{
        margin-top: ${this.fromY}%;
        margin-left: ${this.fromX}%;
  }
}`,0);

    sheet.insertRule(
      `@keyframes animation-state-A-card-${this.itemId} {
  from{
    opacity: 0;
    margin-right: -50%;
  }
  to{
    opacity: 1;
    margin-right: 10%;
  }
}`,0);

    sheet.insertRule(
      `@keyframes animation-state-B-card-${this.itemId} {
  from{
    opacity: 1;
    margin-right: 10%;
  }
  to{
    opacity: 0;
    margin-right: -50%;
  }
}`,0);

    sheet.insertRule(
      `@keyframes animation-state-A-modal-${this.itemId} {
  from{
    opacity: 0;
  }
  to{
    opacity: 0.5;
  }
}`,0);

    sheet.insertRule(
      `@keyframes animation-state-B-modal-${this.itemId} {
  from{
    opacity: 0.5;
  }
  to{
    opacity: 0;
  }
}`,0);


    sheet.insertRule(
      `.animation-item-state-A-${this.itemId} {
  animation: animation-state-A-item-${this.itemId} ${this.aniTime}s forwards;
}`,0);
    sheet.insertRule(
      `.animation-item-state-B-${this.itemId} {
  animation: animation-state-B-item-${this.itemId} ${this.aniTime}s forwards;
}`,0);
    sheet.insertRule(
      `.animation-card-state-A-${this.itemId} {
  animation: animation-state-A-card-${this.itemId} ${this.aniTime}s forwards;
}`,0);
    sheet.insertRule(
      `.animation-card-state-B-${this.itemId} {
  animation: animation-state-B-card-${this.itemId} ${this.aniTime}s forwards;
}`,0);
    sheet.insertRule(
      `.animation-modal-state-A-${this.itemId} {
  animation: animation-state-A-modal-${this.itemId} ${this.aniTime}s forwards;
}`,0);
    sheet.insertRule(
      `.animation-modal-state-B-${this.itemId} {
  animation: animation-state-B-modal-${this.itemId} ${this.aniTime}s forwards;
}`,0);

    sheet.insertRule(
      `#modal-${this.itemId}{
  height: 100%;
  width: 100%;
  background: black;
  opacity: 0;

      }`, 0)

    sheet.insertRule(
      `#card-box-${this.itemId}{
  position: relative;
  float: right;

  vertical-align: middle;

  /*margin-right: 10%;*/

  opacity: 0;
  margin-right: -50%;


  width: 40%;


  z-index: 9999;

  height: 100%;

  display: flex;
  align-items:center;
  justify-content:center;

      }`, 0);


    sheet.insertRule(
      `#item-image-${this.itemId}{
  width: ${this.width}%;
  height: ${this.height}%;
  margin-left: ${this.fromX}%;
  margin-top: ${this.fromY}%;
  object-fit: fill;
      }`, 0)

  },
  methods: {
    onItemMouseLeave: function(){
      console.log(this.administrationBuildingImage.isShow)

      if(this.administrationBuildingImage.isShow){
        return;
      }

      this.administrationBuildingImage.isShowShadow = false;
    },

    onItemClick: function (){

      let item = this.$refs.administrationBuildingImage;


      if(this.administrationBuildingImage.isShow){
        $('#item-image-' + this.itemId).removeClass('animation-item-state-A-' + this.itemId).addClass('animation-item-state-B-' + this.itemId);
        $('#card-box-' + this.itemId).removeClass('animation-card-state-A-' + this.itemId).addClass('animation-card-state-B-' + this.itemId);
        $('#modal-' + this.itemId).removeClass('animation-modal-state-A-' + this.itemId).addClass('animation-modal-state-B-' + this.itemId);

        clearInterval(this.administrationBuildingImage.clearInterval);
        this.administrationBuildingImage.clearInterval = setInterval(() => {
          this.administrationBuildingImage.isShow = false;
        }, 800);



      }
      else{
        $('#item-image-' + this.itemId).removeClass('animation-item-state-B-' + this.itemId).addClass('animation-item-state-A-' + this.itemId);
        $('#card-box-' + this.itemId).removeClass('animation-card-state-B-' + this.itemId).addClass('animation-card-state-A-' + this.itemId);
        $('#modal-' + this.itemId).removeClass('animation-modal-state-B-' + this.itemId).addClass('animation-modal-state-A-' + this.itemId);

        clearInterval(this.administrationBuildingImage.clearInterval);
        this.administrationBuildingImage.isShow = true;

      }


    },
  },

}
</script>

<style scoped>
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

.float-image-div{
  position: absolute;
  z-index: 999;
  width: 100%;
  height: 100%;
}

.card-image{

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
  flex-wrap: wrap
}

</style>
