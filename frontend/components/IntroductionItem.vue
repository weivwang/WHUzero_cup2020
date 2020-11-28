<template>
  <div class="introduction-item-root">
    <div class="float-image-div">
      <img :src="require('~/static/' + imageFileName)" id="item-image" ref="administrationBuildingImage"
           @click="onItemClick"
           @mouseenter="administrationBuildingImage.isShowShadow = true"
           @mouseleave="onItemMouseLeave"
           :style="{
             'opacity': administrationBuildingImage.isShowShadow ? '1' : '0',
         'cursor' : administrationBuildingImage.isShowShadow ? 'pointer' : ''
           }"/>
    </div>

    <div id="card-box">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="font-size: 2rem">行政楼</span>
        </div>

        <el-row>
          <el-col :span="16">
            <p>
              武汉大学（Wuhan University）简称“武大”，是中华人民共和国教育部直属的综合性全国重点大学；位列“世界一流大学和一流学科”、“985工程”、“211工程”；入选学位授权自主审核单位、“珠峰计划”、“强基计划”、“2011计划”、“111计划”、卓越工程师教育培养计划、卓越法律人才教育培养计划、卓越医生教育培养计划、国家建设高水平大学公派研究生项目、国家级新工科研究与实践项目、一流网络安全学院建设示范项目高校、中国政府奖学金来华留学生接收院校、全国深化创新创业教育改革示范高校、国家大学生文化素质教育基地、大众创业万众创新示范基地、基础学科拔尖学生培养计划2.0基地，为欧亚-太平洋大学联盟、大学通识教育联盟、中国高校行星科学联盟、法学教育创新联盟、医学“双一流”建设联盟成员。
            </p>
          </el-col>

          <el-col :span="6" offset="2">
            <el-image :src="require('~/static/WHUDefault.jpg')" class="card-image"></el-image>
          </el-col>
        </el-row>
        <el-divider></el-divider>
        <div id="review-box">
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

        <div id="new-review-box">
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
  props: ['fromX', 'fromY', 'toX', 'toY', 'itemId', 'imageFileName', 'aniTime'],
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

      }`
    )


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
        $('#item-image').removeClass('animation-item-state-A-' + this.itemId).addClass('animation-item-state-B-' + this.itemId);
        $('#card-box').removeClass('animation-card-state-A-' + this.itemId).addClass('animation-card-state-B-' + this.itemId);
        $('#modal-' + this.itemId).removeClass('animation-modal-state-A-' + this.itemId).addClass('animation-modal-state-B-' + this.itemId);

        clearInterval(this.administrationBuildingImage.clearInterval);
        this.administrationBuildingImage.clearInterval = setInterval(() => {
          this.administrationBuildingImage.isShow = false;
        }, 800);



      }
      else{
        $('#item-image').removeClass('animation-item-state-B-' + this.itemId).addClass('animation-item-state-A-' + this.itemId);
        $('#card-box').removeClass('animation-card-state-B-' + this.itemId).addClass('animation-card-state-A-' + this.itemId);
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





#card-box{
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


}

.box-card {
  display: table-cell;
  vertical-align: center;
}






.background-image, #item-image {
  width: 100%;
  height: 100%;
  object-fit: fill;
}

.single-slide-div, .float-image-div {
  width: 100%;
  height: 100%;

}

.background-image {
  position: absolute;
}



#item-image {
  width: 38%;
  height: 49%;

  margin-left: 30%;
  margin-top: 4.5%;

}

.float-image-div{
  position: absolute;
  z-index: 999;
}

.card-image{

}

#review-box {
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

#new-review-box {
  width: 100%;
}

.new-review-box-input-and-button {
  display: flex;
  flex-wrap: wrap
}
</style>
