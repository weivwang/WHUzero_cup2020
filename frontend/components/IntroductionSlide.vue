<template>
  <div class="single-slide-div">
    <img class="background-image" :src="require('../static/' + backgroundImageFileName)"/>
    <div :id="'modal-' + itemsIn[0].itemId"></div>

    <img :src="require('~/static/' + item.imageFileName)" v-for="(item, i) in items" style="position: absolute"
         :id="'item-image-' + item.itemId"
         @click="onItemClick(item)"
         @mouseenter="item.item.isShowShadow = true"
         @mouseleave="onItemMouseLeave(item)"
         :style="{
             'opacity': item.item.isShowShadow ? '1' : '0',
         'cursor' : item.item.isShowShadow ? 'pointer' : ''
           }"/>

    <div :id="'card-box-' + item.itemId" v-for="item in items">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="font-size: 2rem">{{ item.cardTitle }}</span>
        </div>

        <el-row>
          <el-col :span="item.cardImageFileName ? 16 : 24">
            <p>{{item.cardContent}}</p>
          </el-col>

          <el-col :span="6" :offset="2" v-if="item.cardImageFileName">
            <el-image :src="require('~/static/' + item.cardImageFileName)" class="card-image"></el-image>

          </el-col>
        </el-row>
        <el-divider></el-divider>
        <div class="review-box">
          <div class="el-card review-bubble is-always-shadow" v-for="tag in item.tags">
            <div class="el-card__body review-bubble-content">
              <span>{{ tag }}</span>
            </div>
          </div>
        </div>

        <!--        <div class="new-review-box">-->
        <!--          &lt;!&ndash;          <div class="el-card review-bubble is-always-shadow">&ndash;&gt;-->
        <!--          &lt;!&ndash;            <div class="el-card__body review-bubble-content">&ndash;&gt;-->
        <!--          &lt;!&ndash;            </div>&ndash;&gt;-->
        <!--          &lt;!&ndash;          </div>&ndash;&gt;-->
        <!--          <div class="new-review-box-input-and-button">-->
        <!--            <el-input style="width: 75%; margin-right: 2%" placeholder="评论"></el-input>-->
        <!--            <el-button type="primary" style="width: 22%">发送</el-button>-->
        <!--          </div>-->

        <!--        </div>-->

      </el-card>
    </div>



    <slot name="items"></slot>
  </div>
</template>

<script>
//jquery做动画更方便一些23333
import $ from 'jquery'

import item from "@/components/IntroductionItem";
export default {
  name: "IntroductionSlide",
  props: ['backgroundImageFileName', 'itemsIn'],
  components: {
    item
  },
  methods: {
    /**
     * 初始化设置Css
     */
    setCss: function (){
      let style = document.createElement('style');
      style.setAttribute('type', 'text/css');
      document.head.appendChild(style);
      let sheet = style.sheet;
      this.items.forEach(item => {
        sheet.insertRule(
          `@keyframes animation-state-A-item-${item.itemId} {

  from{
        margin-top: ${item.fromY}%;
        margin-left: ${item.fromX}%;
        transform: scale(1);
      }
  to{
    margin-top: ${item.toY}%;
    margin-left: ${item.toX}%;
    transform: scale(${item.endScale});
  }
}`,
          0
        );

        sheet.insertRule(
          `
      @keyframes animation-state-B-item-${item.itemId} {
  from{
    margin-top: ${item.toY}%;
    margin-left: ${item.toX}%;
    transform: scale(${item.endScale});
  }
  to{
        margin-top: ${item.fromY}%;
        margin-left: ${item.fromX}%;
        transform: scale(1);

  }
}`,
          0
        );

        sheet.insertRule(
          `@keyframes animation-state-A-card-${item.itemId} {
  from{
    opacity: 0;
    margin-right: -50%;
  }
  to{
    opacity: 1;
    margin-right: 10%;
  }
}`,
          0
        );

        sheet.insertRule(
          `@keyframes animation-state-B-card-${item.itemId} {
  from{
    opacity: 1;
    margin-right: 10%;
  }
  to{
    opacity: 0;
    margin-right: -50%;
  }
}`,
          0
        );

        sheet.insertRule(
          `@keyframes animation-state-A-modal {
  from{
    opacity: 0;
  }
  to{
    opacity: 0.5;
  }
}`,
          0
        );

        sheet.insertRule(
          `@keyframes animation-state-B-modal {
  from{
    opacity: 0.5;
  }
  to{
    opacity: 0;
  }
}`,
          0
        );

        sheet.insertRule(
          `.animation-item-state-A-${item.itemId} {
  animation: animation-state-A-item-${item.itemId} ${item.aniTime}s forwards;
  z-index: 1000;
}`,0);
        sheet.insertRule(
          `.animation-item-state-B-${item.itemId} {
  animation: animation-state-B-item-${item.itemId} ${item.aniTime}s forwards;
  z-index: 996;
}`,0);
        sheet.insertRule(
          `.animation-card-state-A-${item.itemId} {
  animation: animation-state-A-card-${item.itemId} ${item.aniTime}s forwards;
}`,0);
        sheet.insertRule(
          `.animation-card-state-B-${item.itemId} {
  animation: animation-state-B-card-${item.itemId} ${item.aniTime}s forwards;
}`,0);
        sheet.insertRule(
          `.animation-modal-state-A {
          display: block;
  animation: animation-state-A-modal ${item.aniTime}s forwards;
  z-index: 999;
}`,0);
        sheet.insertRule(
          `.animation-modal-state-B {
          display: none;
  animation: animation-state-B-modal ${item.aniTime}s forwards;
  z-index: 995;
}`,
          0
        );

        sheet.insertRule(
          `#modal-${item.itemId}{
  height: 100%;
  width: 100%;
  background: black;
  opacity: 0;

      }`,
          0
        );

        sheet.insertRule(
          `#card-box-${item.itemId}{
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
          `#item-image-${item.itemId}{
  width: ${item.width}%;
  height: ${item.height}%;
  margin-left: ${item.fromX}%;
  margin-top: ${item.fromY}%;
  object-fit: fill;
      }`, 0)

      })

      sheet.insertRule(`
      #modal-${this.itemsIn[0].itemId}{
  position: fixed;
  height: 100%;
  width: 100%;
  background: black;
  opacity: 0;
}`, 0)

    },
    /**
     * 鼠标在图片上移走的响应方法
     */
    onItemMouseLeave: function(item){
      if(item.item.isShow){
        return;
      }

      item.item.isShowShadow = false;
    },

    /**
     * 图片被单击的响应方法
     */
    onItemClick: function (item, i){
      if(item.item.isShow){
        console.log('1')
        //开始展示动画
        $('#item-image-' + item.itemId).removeClass('animation-item-state-A-' + item.itemId).addClass('animation-item-state-B-' + item.itemId);
        $('#card-box-' + item.itemId).removeClass('animation-card-state-A-' + item.itemId).addClass('animation-card-state-B-' + item.itemId);
        $('#modal-' + this.itemsIn[0].itemId).removeClass('animation-modal-state-A').addClass('animation-modal-state-B');


        //设置计数器，防止动画进行一半后突然消失
        clearInterval(item.item.clearInterval);
        item.item.clearInterval = setInterval(() => {
          item.item.isShow = false;

        }, 800);




      }
      else{
        console.log('2')
        //开始展示动画
        $('#item-image-' + item.itemId).removeClass('animation-item-state-B-' + item.itemId).addClass('animation-item-state-A-' + item.itemId);
        $('#card-box-' + item.itemId).removeClass('animation-card-state-B-' + item.itemId).addClass('animation-card-state-A-' + item.itemId);
        $('#modal-' + this.itemsIn[0].itemId).removeClass('animation-modal-state-B').addClass('animation-modal-state-A');

        clearInterval(item.item.clearInterval);
        item.item.isShow = true;

      }
    },

    // onItemMouseLeave: function(){
    //   console.log(this.administrationBuildingImage.isShow)
    //
    //   if(this.administrationBuildingImage.isShow){
    //     return;
    //   }
    //
    //   this.administrationBuildingImage.isShowShadow = false;
    // },
    //
    // onItemClick: function (){
    //   if(this.administrationBuildingImage.isShow){
    //     $('#administration-building-image').removeClass('animation-item-state-A').addClass('animation-item-state-B');
    //     $('#card-box').removeClass('animation-card-state-A').addClass('animation-card-state-B');
    //     $('#modal').removeClass('animation-modal-state-A').addClass('animation-modal-state-B');
    //
    //     clearInterval(this.administrationBuildingImage.clearInterval);
    //     this.administrationBuildingImage.clearInterval = setInterval(() => {
    //       this.administrationBuildingImage.isShow = false;
    //     }, 800);
    //   }
    //   else{
    //     $('#administration-building-image').removeClass('animation-item-state-B').addClass('animation-item-state-A');
    //     $('#card-box').removeClass('animation-card-state-B').addClass('animation-card-state-A');
    //     $('#modal').removeClass('animation-modal-state-B').addClass('animation-modal-state-A');
    //
    //     clearInterval(this.administrationBuildingImage.clearInterval);
    //     this.administrationBuildingImage.isShow = true;
    //   }
    // },
  },
  mounted() {
    this.items = this.itemsIn
    this.setCss();
  },
  data(){
    return{
      items: [],
      administrationBuildingImage: {
        /**
         * style设置的marginTop，这里不改
         */
        marginTop: 500,

        /**
         * 改这里
         */
        setMarginTop: 0.08,

        /**
         * 是否显示详情
         */
        isShow: false,

        /**
         * 是否展示阴影
         */
        isShowShadow: false,

        clearInterval: null
      }
    }
  }
}
</script>


<style scoped>
.background-image {
  width: 100%;
  height: 105%;
  object-fit: fill;
}

.single-slide-div {
  width: 100%;
  height: 100%;

}

.background-image {
  position: absolute;
}


.box-card {
  display: table-cell;
  vertical-align: center;
  margin-top: 50%;
  transform: translateY(-50%);
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



</style>
