<template>
  <div>
    <el-button type="info" @click="dialogTableVisible = true">修改</el-button>
    <el-dialog v-model="dialogTableVisible" title="功能權限管理 - 修改資訊">
      <hr />
      <p>群組代碼 31</p>
      <p>設備類別 16_CPS</p>
      <p>群組名稱 <input type="text" v-model="name" /></p>
      <p class="errorMsg">{{ errorMsg }}</p>
      <div class="container">
        <div class="left">
          <p>CPS群組權限</p>
        </div>
        <div class="right">
          <checkboxGroup :data="data" />
          <checkboxGroup :data="data" />
          <checkboxGroup :data="data" />
          <checkboxGroup :data="data" />
          <checkboxGroup :data="data" />
          <checkboxGroup :data="data" />
        </div>
      </div>
      <p>
        是否啟用
        <el-select v-model="value" class="m-2" placeholder="請選擇" size="small">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </p>
      <el-row class="mb-4" justify="center">
        <el-button type="info">確定</el-button>
      </el-row>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import checkboxGroup from '../components/checkboxGroup.vue'
const dialogTableVisible = ref(false)
const name = ref('T155課長')
const errorMsg = computed(() => (name.value.trim() ? '' : '群組名稱 欄位是必要項。'))
interface IData {
  id: string
  name: string
  isCheck: boolean
}
const data: IData[] = [
  { id: 'account', name: '個人帳戶管理', isCheck: true },
  { id: 'people', name: '人員群組管理', isCheck: true },
  { id: 'function', name: '功能權限管理', isCheck: false },
  { id: 'group', name: '群組權限檢核表', isCheck: false },
  { id: 'export', name: '權限發佈', isCheck: true }
]

const value = ref('open')

const options = [
  {
    value: 'close',
    label: '停用'
  },
  {
    value: 'open',
    label: '啟用'
  }
]
</script>

<style lang="scss" scoped>
.errorMsg {
  font-size: 10px;
  color: red;
}
.container {
  display: flex;
  .left {
    flex: 1;
    p {
      margin: 5px 0;
    }
  }
  .right {
    flex: 5;
  }
}
</style>
