<!--
 * @Date: 2020-12-03 23:35:31
 * @LastEditors: QiuJhao
 * @LastEditTime: 2020-12-03 23:48:28
-->
<template>
  <div>
    <el-header>
      <div>
        <i class="el-icon-arrow-left back-btn" style="margin-right: 15px" @click="back"></i>
        <i class="el-icon-map-location" style="margin-right: 5px"></i>
        <span>Map</span>
      </div>
    </el-header>
    <img src="../static/map/1.jpg" class="map" />

    <item
      :from-x="22"
      :from-y="5"
      :to-x="20"
      :to-y="13"
      :width="30"
      :height="40"
      item-id="administration"
      image-file-name="map/1_7.png"
      :ani-time="0.3"
      card-title="樱花城堡"
      card-content="樱花城堡是对武汉大学狮子山腰上老斋舍与樱花的合称。樱花城堡的建筑材料以花岗岩的灰色为主色调，尤显质朴大方、厚稳沉重，三座罗马式拱门和依山势而上的百步梯，与建筑前的樱花组成了一道会让人油然而生的美景。每年毕业生作画留念的背景是这里，樱花节时更吸引了无数的游客再次驻足留念。"
      :tags="['老斋舍', '樱花城堡']"
      card-image-file-name="map/1_7.png"
      :end-scale="1.0"
    >

    </item>
    <a href="" class="guiyuan"><p style="font-size:50px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></a>
    <a href="" class="meiyuan"><p style="font-size:50px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></a>
    <a href="" class="luojiashan"><p style="font-size:50px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></a>

<!--
    <item
      :from-x="10"
      :from-y="20"
      :to-x="20"
      :to-y="13"
      :width="20"
      :height="30"
      item-id="building"
      image-file-name="map/1_2.png"
      :ani-time="0.3"
      card-title="计算机学院"
      card-content="计算机学院"
      :tags="['计算机学院大楼', '卓尔体育馆']"
      card-image-file-name="map/1.jpg"
      :end-scale="1.0"
    >
    </item>
    <item
      :from-x="10"
      :from-y="20"
      :to-x="20"
      :to-y="13"
      :width="30"
      :height="40"
      item-id="building"
      image-file-name="map/1_3.png"
      :ani-time="0.3"
      card-title="计算机学院"
      card-content="计算机学院"
      :tags="['计算机学院大楼', '卓尔体育馆']"
      card-image-file-name="map/1.jpg"
      :end-scale="1.0"
    >
    </item>
     -->
  </div>

</template>

<script>
import slide from "../components/IntroductionSlide";
import home from "../components/IntroductionHome";
import item from "../components/item_new";
import detail from "../components/IntroductionDetail";
import comment from "../components/IntroductionComment";

export default {
  components: {
    slide,
    home,
    item,
    detail,
    comment,
  },
  data: {
    administrationIntroduction:
      "武汉大学（Wuhan University）简称“武大”，是中华人民共和国教育部直属的综合性全国重点大学；位列“世界一流大学和一流学科”、“985工程”、“211工程”；入选学位授权自主审核单位、“珠峰计划”、“强基计划”、“2011计划”、“111计划”、卓越工程师教育培养计划、卓越法律人才教育培养计划、卓越医生教育培养计划、国家建设高水平大学公派研究生项目、国家级新工科研究与实践项目、一流网络安全学院建设示范项目高校、中国政府奖学金来华留学生接收院校、全国深化创新创业教育改革示范高校、国家大学生文化素质教育基地、大众创业万众创新示范基地、基础学科拔尖学生培养计划2.0基地，为欧亚-太平洋大学联盟、大学通识教育联盟、中国高校行星科学联盟、法学教育创新联盟、医学“双一流”建设联盟成员。",
  },
};
</script>

<style scoped>

.el-header {
  background-color: #45494e5e;
  font-size: 20px;
  color: rgba(255,255,255,.8);
  display: flex;
  align-items: center;
}
.el-header div {
  display: flex;
  align-items: center;
  justify-items: center;
}

.back-btn:hover{
box-shadow: 0 0 2px 2px rgba(255, 221, 108, 1);
  /* transform: scale(1.01); */
  cursor: pointer;
}
.map {
  float: left;
  width: 100%;
  /* height: 40%; */
  /* margin-left: 10%; */
}
.guiyuan{
  float: left;
  margin-top: -32%;
  margin-left: 28%;
}
.meiyuan{
  float: left;
  margin-left: 56%;
  margin-top: -32%;
};
.luojiashan{
  float: left;
  margin-top: -10%;
  margin-left: 50%;

}
</style>
