<template>
  <div class="root">
    <div class="float-image-div">
      <el-popover
        :placement="placement"
        trigger="hover"
        :width="450"

      >
        <h2>{{ cardTitle }}</h2>
        <p>{{ cardContent }}</p>
        <img :src="require('~/static/' + imageFileName)"
             @click="onItemClick"
             @mouseenter="item.isShowShadow = true"
             @mouseleave="onItemMouseLeave"
             :style="{
             'opacity': item.isShowShadow ? '1' : '0',
         'cursor' : item.isShowShadow ? 'pointer' : '',
         'marginLeft': fromX + '%',
         'marginTop': fromY + '%',
         'width': width + '%',
         'height': height + '%'

           }"
             slot="reference"/>
      </el-popover>

    </div>


  </div>

</template>

<script>
export default {
  name: "MapItem",
  props: {
    /**
     * @imageFileName 图像在static文件夹的文件名
     * @targetUri 点击后要跳转的Uri
     * @fromX 图像左上角距离左边的百分比
     * @fromY 图像左上角距离上边的百分比
     * @width 宽度百分比
     * @height 高度百分比
     * @placement 弹出框模式（可选：top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end）
     * @cardTitle 弹出框标题
     * @cardContent 弹出框内容
     */
    'imageFileName': String,
    'targetUri': String,
    'fromX': Number,
    'fromY': Number,
    'width': Number,
    'height': Number,
    'placement': String,
    'cardTitle': String,
    'cardContent': String
  },
  data(){
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
      },
    }
  },
  methods: {
    onItemClick: function () {
      this.$router.push(this.targetUri);
    },
    onItemMouseLeave: function(){
      if(this.item.isShow){
        return;
      }

      this.item.isShowShadow = false;
    },

  }
}
</script>

<style scoped>
.root {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 9999;
}

.float-image-div{
  position: absolute;
  z-index: 999;
  width: 100%;
  height: 100%;
}
</style>
