<!--
 * @Date: 2020-12-03 23:35:31
 * @LastEditors: QiuJhao
 * @LastEditTime: 2020-12-03 23:48:28
-->
<template>
  <div>
    <img src="../static/map/1.jpg" class="map" />
    <item
      :from-x="30"
      :from-y="4.5"
      :to-x="8"
      :to-y="10"
      :width="38"
      :height="49"
      item-id="administration"
      image-file-name="map/1_7.png"
      :ani-time="0.3"
      card-title="wtf"
      card-content="12345"
      :tags="['武汉大学', '珞珈山职业学院']"
      card-image-file-name="map/1.jpg"
      :end-scale="1.0"
    >
    </item>
  </div>
</template>

<script>
import slide from "../components/IntroductionSlide";
import home from "../components/IntroductionHome";
import item from "../components/IntroductionItem";
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
.map {
  float: left;
  width: 80%;
  height: 40%;
  margin-left: 10%;
}
</style>
