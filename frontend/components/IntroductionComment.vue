<template>
  <div class="root">
    <div class="comment-box">
      <h2>评论</h2>
      <el-card class="box-card">
        <comment :article_id="articleId" @notAuthorized="notAuthorized" class="comment"></comment>
      </el-card>

    </div>
    <div class="comment-modal"></div>
    <img class="background-image" :src="require('../static/' + backgroundImageFileName)"/>
  </div>
</template>

<script>
import comment from '../components/Comment'
export default {
  name: "IntroductionComment",
  props: ['backgroundImageFileName', 'articleId'],
  components: {
    comment
  },
  data() {
    return {
      isAuthorized: false
    }
  },

  methods: {
    notifyNotAuthorized: function(){
      if(!this.$store.state.token){
        this.$confirm('您当前处于未登录状态，请登录。', '未登录', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'info'
        }).then(() => {
          this.$router.push('/login');
        }).catch(() => {

        });
      }
    },
    notAuthorized: function (){
      this.isAuthorized = false;
    },
  }
}
</script>

<style scoped>
.comment-box {
  position: absolute;

  margin-left: 15%;
  margin-top: 7%;

  height: 100%;
  width: 100%;


  z-index: 99;

}

.box-card {
  height: 70%;
  width: 70%;
}

h2 {
  color: white;
  font-size: 2.5rem;
}


.root{
  height: 100%;
  width: 100%;
  position: relative;

  display: flex;
  align-items: center;
}

.comment-modal {
  background: black;
  opacity: 0.5;
  position: absolute;

  width: 100%;
  height: 105%;
}

.background-image {
  width: 100%;
  height: 105%;
  object-fit: fill;
}
</style>
