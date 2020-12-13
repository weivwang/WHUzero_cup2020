<!--
 * @Date: 2020-11-27 00:18:55
 * @LastEditors: QiuJhao
 * @LastEditTime: 2020-11-29 01:00:11
-->
<template>
  <div>
    <img src="../static/wanlin.jpg" class="backimg" />
    <transition name="el-zoom-in-center">
      <div v-show="true">
        <el-card class="registercard">
          <el-form
            :model="ruleForm"
            :rules="rules"
            label-width="100px"
            ref="ruleForm"
          >
            <el-form-item
              label="用户名"
              prop="username"
              id="username"
              class="formlable"
            >
              <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item
              label="密码"
              prop="password"
              id="psw"
              class="formlable"
            >
              <el-input
                autocomplete="off"
                type="password"
                v-model="ruleForm.password"
              ></el-input>
            </el-form-item>
            <el-form-item
              label="确认密码"
              prop="passwordConfirm"
              id="confirm"
              class="formlable"
            >
              <el-input
                autocomplete="off"
                type="password"
                v-model="ruleForm.passwordConfirm"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button @click="resetForm('ruleForm')" class="regisbtn"
                >重置</el-button
              >
              <el-button @click="submitForm('ruleForm')" type="primary"
                >立即注册</el-button
              >
            </el-form-item>
          </el-form>
        </el-card>
      </div>
    </transition>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "register",
  data() {
    const validatePass = (rule, value, callback) => {
      if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        password: "",
        passwordConfirm: ""
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          },
          {
            min: 3,
            max: 20,
            message: "长度在 3 到 20 个字符",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          },
          {
            min: 6,
            max: 20,
            message: "长度在 6 到 20 个字符",
            trigger: "blur"
          }
        ],
        passwordConfirm: [
          {
            required: true,
            message: "请再次输入密码",
            trigger: "blur"
          },
          {
            min: 6,
            max: 20,
            message: "长度在 6 到 20 个字符",
            trigger: "blur"
          },
          {
            validator: validatePass,
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          axios
            .post("/register", {
              username: this.ruleForm.username,
              password: this.ruleForm.password,
              passwordConfirm: this.ruleForm.passwordConfirm
            })
            .then(rep => {
              console.log(rep);
              if (rep.data.status === 200) {
                this.$message.success("注册成功，转到登陆界面");
                setTimeout(() => {
                  location.href = "/login";
                }, 2000);
              } else if (rep.data.status === 40002) {
                this.$message.error("用户名已被注册");
              } else if (rep.data.status === 40003) {
                this.$message.error("密码设置失败");
              } else {
                this.$message.error("注册失败");
              }
            });
        } else {
          console.log("输入错误");
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
.formlable {
  margin-top: 10%;
}
.regisbtn {
  margin-top: 2%;
  margin-left: 10%;
}
.registercard {
  float: left;
  width: 30%;
  height: 40%;
  margin-left: 35%;
  margin-top: -40%;
}
.backimg {
  float: left;
  width: 100%;
  height: 100%;
}

</style>
