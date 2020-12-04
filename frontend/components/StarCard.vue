<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="font-size: 2rem">cardTitle</span>
      </div>

      <el-row>
        <el-col :span="16">
          <p></p>
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
</template>

<script>
import axios from "axios";

export default {
  name: "StarCard",
  props: {
    'cardImageFileName': String
  },
  mounted() {
    axios
      .get("/star/list",
        {
        headers: {token: this.$store.state.token },
        })
      .then((rep) => {
        console.log(rep.data.data);
        if (rep.data.status === 200) {

        }
      });
  }
}
</script>

<style scoped>

</style>
