<template>
  <div class="single-slide-div">
    <img class="background-image" :src="require('../static/' + backgroundImageFileName)"/>
    <slot name="items"></slot>
  </div>
</template>

<script>
//jquery做动画更方便一些23333
import $ from 'jquery'

import item from "@/components/IntroductionItem";
export default {
  name: "IntroductionSlide",
  props: ['backgroundImageFileName'],
  components: {
    item
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
  }
}
</script>


<style scoped>
.background-image {
  width: 100%;
  height: 100%;
  object-fit: fill;
}

.single-slide-div {
  width: 100%;
  height: 100%;

}

.background-image {
  position: absolute;
}

</style>
