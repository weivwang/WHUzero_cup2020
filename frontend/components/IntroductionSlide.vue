<template>
  <div class="single-slide-div">
    <div class="float-image-div">
      <img src="~/static/WHUAdministrationBuilding.png" id="administration-building-image" ref="administrationBuildingImage"
           @click="onItemClick"
           @mouseenter="administrationBuildingImage.isShowShadow = true"
           @mouseleave="onItemMouseLeave"
           :style="{
             'opacity': administrationBuildingImage.isShowShadow ? '1' : '0',
         'cursor' : administrationBuildingImage.isShowShadow ? 'pointer' : ''
           }"/>
    </div>
    <img class="background-image" src="~/static/WHUDefault.jpg"/>


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

    <div id="modal"></div>
  </div>

</template>

<script>
//jquery做动画更方便一些23333
import $ from 'jquery'
export default {
  name: "IntroductionSlide",
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
        $('#administration-building-image').removeClass('animation-item-state-A').addClass('animation-item-state-B');
        $('#card-box').removeClass('animation-card-state-A').addClass('animation-card-state-B');
        $('#modal').removeClass('animation-modal-state-A').addClass('animation-modal-state-B');

        clearInterval(this.administrationBuildingImage.clearInterval);
        this.administrationBuildingImage.clearInterval = setInterval(() => {
          this.administrationBuildingImage.isShow = false;
        }, 800);



      }
      else{
        $('#administration-building-image').removeClass('animation-item-state-B').addClass('animation-item-state-A');
        $('#card-box').removeClass('animation-card-state-B').addClass('animation-card-state-A');
        $('#modal').removeClass('animation-modal-state-B').addClass('animation-modal-state-A');

        clearInterval(this.administrationBuildingImage.clearInterval);
        this.administrationBuildingImage.isShow = true;

      }


    },
  },
  data(){
    return{
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
  },
  mounted() {
    this.administrationBuildingImage.marginTop = window.innerHeight * this.administrationBuildingImage.setMarginTop;

    window.onresize = () => {
      return (() => {
        let administrationImage = this.$refs.administrationBuildingImage[0];
        let height = window.innerHeight;
        this.administrationBuildingImage.marginTop = height * this.administrationBuildingImage.setMarginTop;

        console.log(height * this.administrationBuildingImage.marginTop);

      })()
    }

    // let style = document.createElement('style');
    // style.setAttribute('type', 'text/css');
    // document.head.appendChild(style);
    // let sheet = style.sheet;
    // sheet.insertRule(
    //   `@keyframes pointermove` +(index + 1) +`{
  	// 		from {
		// 	    transform: rotate(300deg);
  	// 		}
 		// 	 to {
 		// 	 //注意：动态的计算需要先计算再赋值，不然浏览器会直接当字符串来解析
   	// 			 transform: rotate(` +(300 + element.pointerEnd) +`deg);}
		// 	}`,0
    // );
  }
}
</script>


<style scoped>
/*动画*/
@keyframes animation-state-A-item {
  from{
    margin-top: 4.5%;
    margin-left: 30%;
  }
  to{
    margin-top: 13%;
    margin-left: 5%;
  }
}

@keyframes animation-state-B-item {
  from{
    margin-top: 13%;
    margin-left: 5%;
  }
  to{
    margin-top: 4.5%;
    margin-left: 30%;
  }
}

@keyframes animation-state-A-card {
  from{
    opacity: 0;
    margin-right: -50%;
  }
  to{
    opacity: 1;
    margin-right: 10%;
  }
}

@keyframes animation-state-B-card {
  from{
    opacity: 1;
    margin-right: 10%;
  }
  to{
    opacity: 0;
    margin-right: -50%;
  }
}

@keyframes animation-state-A-modal {
  from{
    opacity: 0;
  }
  to{
    opacity: 0.5;
  }
}

@keyframes animation-state-B-modal {
  from{
    opacity: 0.5;
  }
  to{
    opacity: 0;
  }
}




.animation-item-state-A {
  animation: animation-state-A-item 1s forwards;
}

.animation-item-state-B {
  animation: animation-state-B-item 1s forwards;
}

.animation-card-state-A {
  animation: animation-state-A-card 1s forwards;
}

.animation-card-state-B {
  animation: animation-state-B-card 1s forwards;
}

.animation-modal-state-A {
  animation: animation-state-A-modal 1s forwards;
}

.animation-modal-state-B {
  animation: animation-state-B-modal 1s forwards;
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


#modal {
  height: 100%;
  width: 100%;
  background: black;
  opacity: 0;
}



.background-image, #administration-building-image {
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



#administration-building-image {
  width: 38%;
  height: 49%;

  margin-left: 30%;
  margin-top: 4.5%;

}

.float-image-div{
  position: absolute;
  z-index: 999;
}

.single-slide-div{
  position: relative;
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
