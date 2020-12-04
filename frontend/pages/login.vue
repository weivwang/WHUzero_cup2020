<!--
 * @Date: 2020-11-28 13:45:02
 * @LastEditors: QiuJhao
 * @LastEditTime: 2020-12-04 22:57:22
 -->
<template>
  <div class="login">
    <img src="../static/wanlin.jpg" class="backimg" />
    <el-card class="registercard">
      <el-form
        ref="ruleForm"
        :model="ruleForm"
        :rules="rules"
        label-width="80px"
      >
      <el-row>
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username" />
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="ruleForm.password"
            autocomplete="off"
            type="password"
          />
        </el-form-item>
        </el-row>
        <el-form-item>
          <el-row>
            <el-col :span="8">
              <el-button type="primary" @click="submitForm('ruleForm')">
                登录
              </el-button>
            </el-col>
            <el-col :span="8">
              <el-button @click="resetForm('ruleForm')">
                重置
              </el-button>
            </el-col>
            <el-col :span="8">
              <el-button type="warning" @click="gotoregister">
                注册
              </el-button>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
import axios from "axios";
import Cookies from "js-cookie";

export default {
  name: "Login",
  data() {
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 20,
            message: "长度在 3 到 20 个字符",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 20,
            message: "长度在 6 到 20 个字符",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    gotoregister() {
      window.location.href = "/register";
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          axios
            .post("/login", {
              username: this.ruleForm.username,
              password: this.ruleForm.password
            })
            .then(rep => {
              if (rep.data.status === 200) {
                const token = rep.data.data.token;
                this.$store.commit("setToken", token);
                Cookies.set("token", token, { expires: 30 });
                Cookies.set("name", this.ruleForm.username, { expires: 30 });
                location.href = "/map";
              } else {
                this.$message.error("用户名或密码不正确");
              }
            });
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped>
.el-row{
  margin-top: 5%;
}
.backimg {
  float: left;
  width: 100%;
  height: 100%;
}
.registercard {
  float: left;
  width: 30%;
  height: 40%;
  margin-left: 35%;
  margin-top: -40%;
}
</style>
