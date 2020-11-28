<!--
 * @Date: 2020-11-28 13:45:02
 * @LastEditors: QiuJhao
 * @LastEditTime: 2020-11-29 00:23:07
 -->
<template>
  <div class="login">
    <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="80px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="ruleForm.password"
          autocomplete="off"
          type="password"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('ruleForm')"
        >
          登录
        </el-button>
        <el-button @click="resetForm('ruleForm')">
          重置
        </el-button>
      </el-form-item>
    </el-form>
    <br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    <el-button type="warning" @click="gotoregister">
      注册
    </el-button>
  </div>
</template>
<script>
import axios from 'axios'
import Cookies from 'js-cookie'

export default {
  name: 'Login',
  data () {
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          {
            min: 3,
            max: 20,
            message: '长度在 3 到 20 个字符',
            trigger: 'blur'
          }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 6,
            max: 20,
            message: '长度在 6 到 20 个字符',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    gotoregister () {
      window.location.href = '/register'
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios
            .post('/login', {
              username: this.ruleForm.username,
              password: this.ruleForm.password
            })
            .then((rep) => {
              if (rep.data.status === 200) {
                const token = rep.data.data.token
                this.$store.commit('setToken', token)
                Cookies.set('token', token, { expires: 30 })
                Cookies.set('name', this.ruleForm.username, { expires: 30 })
                location.href = '/test_comment'
              } else {
                this.$message.error('用户名或密码不正确')
              }
            })
        } else {
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>
</style>
