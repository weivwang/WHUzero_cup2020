<template>
  <div class="introduction-item-root">
    <div class="float-image-div">
      <img :src="require('~/static/' + imageFileName)"
           :id="'item-image-' + this.itemId"
           @click="onItemClick"
           @mouseenter="item.isShowShadow = true"
           @mouseleave="onItemMouseLeave"
           :style="{
             'opacity': item.isShowShadow ? '1' : '0',
         'cursor' : item.isShowShadow ? 'pointer' : ''
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

          <el-col :span="6" :offset="2">
            <el-image :src="require('~/static/' + cardImageFileName)" class="card-image"></el-image>
          </el-col>
        </el-row>
        <el-divider></el-divider>
        <div class="review-box">
          <div class="el-card review-bubble is-always-shadow" v-for="tag in tags">
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

    <div :id="'modal-' + itemId"></div>

  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "IntroductionItem",
  props:
  /**
   * @from-X 开始时，图片左上角的点距离左边的百分比
   * @from-Y 开始时，图片左上角的点距离上边的百分比
   * @to-X 结束时，图片左上角的点距离左边的百分比
   * @to-Y 结束时，图片左上角的点距离上边的百分比
   * @item-id 元素唯一标识符
   * @image-file-name 抠出来图像的文件名。图片需位于static文件夹或其下级目录下
   * @ani-time 动画执行时间
   * @card-title 卡片标题
   * @card-content 卡片内容
   * @card-image-file-name 卡片右上角缩略图的图片地址
   * @width 图片长度百分比
   * @height 图片宽度百分比
   * @tags 标签数组
   * @end-scale 结束动画后的缩放比例
   */
    {
      'fromX': Number,
      'fromY': Number,
      'toX': Number,
      'toY': Number,
      'itemId': String,
      'imageFileName': String,
      'aniTime': Number,
      'cardTitle': String,
      'cardContent': String,
      'cardImageFileName': String,
      'width': Number,
      'height': Number,
      'tags': Array,
      'endScale': Number
    },
  data() {
    return {
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
      },

    }
  },
  mounted() {
    this.setCss();
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

      sheet.insertRule(
        `@keyframes animation-state-A-item-${this.itemId} {
  from{
        margin-top: ${this.fromY}%;
        margin-left: ${this.fromX}%;
        transform: scale(1);
      }
  to{
    margin-top: ${this.toY}%;
    margin-left: ${this.toX}%;
    transform: scale(${this.endScale});
  }
}`,0);

      sheet.insertRule(
        `
      @keyframes animation-state-B-item-${this.itemId} {
  from{
    margin-top: ${this.toY}%;
    margin-left: ${this.toX}%;
    transform: scale(${this.endScale});
  }
  to{
        margin-top: ${this.fromY}%;
        margin-left: ${this.fromX}%;
        transform: scale(1);

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

    /**
     * 鼠标在图片上移走的响应方法
     */
    onItemMouseLeave: function(){
      if(this.item.isShow){
        return;
      }

      this.item.isShowShadow = false;
    },

    /**
     * 图片被单击的响应方法
     */
    onItemClick: function (){



      if(this.item.isShow){
        //开始展示动画
        $('#item-image-' + this.itemId).removeClass('animation-item-state-A-' + this.itemId).addClass('animation-item-state-B-' + this.itemId);
        $('#card-box-' + this.itemId).removeClass('animation-card-state-A-' + this.itemId).addClass('animation-card-state-B-' + this.itemId);
        $('#modal-' + this.itemId).removeClass('animation-modal-state-A-' + this.itemId).addClass('animation-modal-state-B-' + this.itemId);

        //设置计数器，防止动画进行一半后突然消失
        clearInterval(this.item.clearInterval);
        this.item.clearInterval = setInterval(() => {
          this.item.isShow = false;
        }, 800);



      }
      else{
        //开始展示动画
        $('#item-image-' + this.itemId).removeClass('animation-item-state-B-' + this.itemId).addClass('animation-item-state-A-' + this.itemId);
        $('#card-box-' + this.itemId).removeClass('animation-card-state-B-' + this.itemId).addClass('animation-card-state-A-' + this.itemId);
        $('#modal-' + this.itemId).removeClass('animation-modal-state-B-' + this.itemId).addClass('animation-modal-state-A-' + this.itemId);

        clearInterval(this.item.clearInterval);
        this.item.isShow = true;

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

/*.new-review-box {*/
/*  width: 100%;*/
/*}*/

/*.new-review-box-input-and-button {*/
/*  display: flex;*/
/*  flex-wrap: wrap*/
/*}*/

</style>
