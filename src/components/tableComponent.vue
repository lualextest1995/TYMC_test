<template>
  <div>
    <div style="height: 200px">
      <el-auto-resizer>
        <template #default="{ height, width }">
          <el-table-v2 :columns="columns" :data="data" :width="width" :height="height" fixed />
        </template>
      </el-auto-resizer>
    </div>
    <div class="demo-pagination-block">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :small="false"
        layout="prev, pager, next, jumper"
        :total="originData.length"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
const columns = reactive([
  { dataKey: '資料1', key: 'column0', title: '資料1', width: 150 },
  { dataKey: '資料2', key: 'column0', title: '資料2', width: 150 },
  { dataKey: '資料3', key: 'column0', title: '資料3', width: 150 },
  { dataKey: '資料4', key: 'column0', title: '資料4', width: 150 },
  { dataKey: '資料5', key: 'column0', title: '資料5', width: 150 },
  { dataKey: '資料6', key: 'column0', title: '資料6', width: 150 }
])
const originData = reactive([
  {
    資料1: '1-1',
    資料2: '1-2',
    資料3: '1-3',
    資料4: '1-4',
    資料5: '1-5',
    資料6: '1-6',
    id: 'row0',
    parentId: null
  },
  {
    資料1: '2-1',
    資料2: '2-2',
    資料3: '2-3',
    資料4: '2-4',
    資料5: '2-5',
    資料6: '2-6',
    id: 'row1',
    parentId: null
  },
  {
    資料1: '3-1',
    資料2: '3-2',
    資料3: '3-3',
    資料4: '3-4',
    資料5: '3-5',
    資料6: '3-6',
    id: 'row2',
    parentId: null
  },
  {
    資料1: '4-1',
    資料2: '4-2',
    資料3: '4-3',
    資料4: '4-4',
    資料5: '4-5',
    資料6: '4-6',
    id: 'row3',
    parentId: null
  },
  {
    資料1: '5-1',
    資料2: '5-2',
    資料3: '5-3',
    資料4: '5-4',
    資料5: '5-5',
    資料6: '5-6',
    id: 'row4',
    parentId: null
  },
  {
    資料1: '1',
    資料2: '2',
    資料3: '3',
    資料4: '4',
    資料5: '5',
    資料6: '6',
    id: 'row5',
    parentId: null
  },
  {
    資料1: '1',
    資料2: '2',
    資料3: '3',
    資料4: '4',
    資料5: '5',
    資料6: '6',
    id: 'row6',
    parentId: null
  },
  {
    資料1: '1',
    資料2: '2',
    資料3: '3',
    資料4: '4',
    資料5: '5',
    資料6: '6',
    id: 'row7',
    parentId: null
  },
  {
    資料1: '1',
    資料2: '2',
    資料3: '3',
    資料4: '4',
    資料5: '5',
    資料6: '6',
    id: 'row8',
    parentId: null
  },
  {
    資料1: '1',
    資料2: '2',
    資料3: '3',
    資料4: '4',
    資料5: '5',
    資料6: '6',
    id: 'row9',
    parentId: null
  },
  {
    資料1: '1',
    資料2: '2',
    資料3: '3',
    資料4: '4',
    資料5: '5',
    資料6: '6',
    id: 'row10',
    parentId: null
  }
])
const currentPage = ref(1)
const pageSize = ref(5)
const tempSize = ref<number>(0)
const data = ref(originData.slice(tempSize.value, pageSize.value))
const handleCurrentChange = (val: number) => {
  data.value = originData.slice(
    tempSize.value + pageSize.value * (val - 1),
    tempSize.value + pageSize.value * val
  )
}
</script>

<style lang="scss" scoped>
.demo-pagination-block {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  margin-bottom: 16px;
}
</style>
