<template>
  <div class="header">
    <div class="left">
      <div class="logo">
        <img src="../assets/tymc-logo.png" alt="" />
      </div>
      <p>測試系統</p>
    </div>
    <div class="right">
      <el-col :span="2">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <el-badge :value="options.length">
              <el-icon size="30"><Message /></el-icon>
            </el-badge>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item v-for="i in options" :key="i.key">{{ i.label }}</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-col>
      <el-icon size="30" class="user"><UserFilled /></el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Message, UserFilled } from '@element-plus/icons-vue'
const options = [
  {
    label: '訊息1',
    key: '001'
  },
  {
    label: '訊息2',
    key: '002'
  },
  {
    label: '訊息3',
    key: '003'
  },
  {
    label: '訊息4',
    key: '004'
  }
]
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  width: 100%;
  height: 100px;
  .left {
    flex: 1;
    display: flex;
    align-items: center;
    margin-left: 20px;
    .logo {
      width: 50px;
      height: 50px;
      margin: 0 10px;
      img {
        object-fit: contain;
        width: 100%;
        height: 100%;
      }
    }
    p {
      font-size: 20px;
    }
  }
  .right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .user {
      margin-right: 20px;
    }
  }
}
</style>
