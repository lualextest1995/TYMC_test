<template>
  <div class="container">
    <label for="permissions" class="title">
      <input type="checkbox" id="permissions" v-model="isCheckAll" />
      權限管理
    </label>
    <ul>
      <li v-for="(i, index) in data" :key="index">
        <input type="checkbox" :id="i.id" :value="i.id" v-model="isCheck" />
        <label :for="i.id">{{ i.name }}</label>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
interface IData {
  id: string
  name: string
  isCheck: boolean
}
const props = defineProps<{ data: IData[] }>()
const isCheckAll = computed({
  get() {
    if (props.data.length === (isCheck.value as string[]).length) {
      return true
    }
    return false
  },
  set(value) {
    if (value) {
      isCheck.value = props.data.map((i) => i.id)
    } else {
      isCheck.value = []
    }
  }
})
const isCheck = ref(props.data.map((i) => (i.isCheck ? i.id : '')).filter((i) => i !== ''))
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  margin: 5px 0;
  .title {
    font-size: 20px;
    margin-bottom: 2px;
    color: #31708f;
  }
  ul {
    display: flex;
    justify-content: space-between;
    li {
      list-style: none;
    }
  }
}
</style>
