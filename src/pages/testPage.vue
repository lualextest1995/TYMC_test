<template>
  <div style="height: 400px">
    <el-auto-resizer>
      <template #default="{ height, width }">
        <el-table-v2
          :columns="columns"
          :data="data1"
          :width="width"
          :height="height"
          :sort-by="sortState"
          @column-sort="onSort"
          fixed
        >
        </el-table-v2>
      </template>
    </el-auto-resizer>

    <div class="demo-pagination-block">
      <el-pagination
        v-model:current-page="currentPage4"
        v-model:page-size="pageSize4"
        :page-sizes="[5, 10]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="data.length"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { TableV2SortOrder } from 'element-plus'
import type { SortBy } from 'element-plus'

interface IColumns {
  dataKey: string
  key: string
  title: string
  width: number
  sortable?: boolean
}
const columns = reactive<IColumns[]>([
  { dataKey: 'one', key: 'column0', title: 'JavaScript', width: 150 },
  { dataKey: 'two', key: 'column1', title: 'TypeScript', width: 150 }
])

const data = ref([
  { one: '1', two: 'test1', id: 'row0', parentId: null },
  { one: '3', two: '1test1', id: 'row1', parentId: null },
  { one: '4', two: 'test1', id: 'row0', parentId: null },
  { one: '2', two: '1test1', id: 'row1', parentId: null },
  { one: '5', two: 'test1', id: 'row0', parentId: null },
  { one: '6', two: '1test1', id: 'row1', parentId: null },
  { one: '7', two: 'test1', id: 'row0', parentId: null },
  { one: '10', two: '1test1', id: 'row1', parentId: null },
  { one: '9', two: 'test1', id: 'row0', parentId: null },
  { one: '8', two: '1test1', id: 'row1', parentId: null },
  { one: '11', two: 'test1', id: 'row0', parentId: null },
  { one: '12', two: '1test1', id: 'row1', parentId: null },
  { one: '14', two: 'test1', id: 'row0', parentId: null },
  { one: '13', two: '1test1', id: 'row1', parentId: null },
  { one: '15', two: 'test1', id: 'row0', parentId: null },
  { one: '16', two: '1test1', id: 'row1', parentId: null },
  { one: '20', two: 'test1', id: 'row0', parentId: null },
  { one: '18', two: '1test1', id: 'row1', parentId: null },
  { one: '19', two: 'test1', id: 'row0', parentId: null },
  { one: '17', two: '1test1', id: 'row1', parentId: null }
])
interface test {
  one: string
  two: string
  id: string
  parentId: null
}

const currentPage4 = ref(1)
const pageSize4 = ref(5)
const tempSize = ref<number>(0)
const data1 = ref<test[]>(data.value.slice(tempSize.value, pageSize4.value))

const handleSizeChange = (val: number) => {
  pageSize4.value = val
  data1.value = data.value.slice(
    tempSize.value + val * (currentPage4.value - 1),
    tempSize.value + val * currentPage4.value
  )
}
const handleCurrentChange = (val: number) => {
  data1.value = data.value.slice(
    tempSize.value + pageSize4.value * (val - 1),
    tempSize.value + pageSize4.value * val
  )
}

columns[0].sortable = true

const sortState = ref<SortBy>({
  key: 'column0',
  order: TableV2SortOrder.ASC
})

const onSort = (sortBy: SortBy) => {
  console.log(sortBy)
  data1.value = data.value.reverse()
  sortState.value = sortBy
}
</script>

<style scoped></style>
