<template>
  <el-row class="tac">
    <el-col :span="6">
      <el-menu
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        :unique-opened="false"
        background-color=" #a6a9ad"
        @mouseover="openMenu"
        @mouseleave="closeMenu"
        router
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><Folder /></el-icon>
            <span>工具</span>
          </template>
          <el-menu-item index="test">
            <el-icon><CollectionTag /></el-icon>
            語言
          </el-menu-item>
          <el-menu-item index="1-2">
            <el-icon><CollectionTag /></el-icon>
            框架
          </el-menu-item>
          <el-menu-item index="1-3">
            <el-icon><CollectionTag /></el-icon>
            UI套件
          </el-menu-item>
          <el-menu-item index="1-4-1">
            <el-icon><CollectionTag /></el-icon>
            圖表套件
          </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><icon-menu /></el-icon>
            <span>項目二</span>
          </template>
          <el-menu-item index="2-1">
            <el-icon><CollectionTag /></el-icon>
            測試1
          </el-menu-item>
          <el-sub-menu index="2-2">
            <template #title>
              <el-icon><CollectionTag /></el-icon>
              <span>測試2</span>
            </template>
            <el-menu-item index="2-2-1">
              <el-icon><CollectionTag /></el-icon>
              測試2-1
            </el-menu-item>
            <el-menu-item index="2-2-2">
              <el-icon><CollectionTag /></el-icon>
              測試2-2
            </el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="3">
          <el-icon><document /></el-icon>
          <span>項目三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>項目四</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Document, Menu as IconMenu, CollectionTag, Folder, Setting } from '@element-plus/icons-vue'
const switchMenu = ref(false)
const isCollapse = computed(() => (switchMenu.value ? false : true))
const openMenu = () => {
  switchMenu.value = true
}
const closeMenu = () => {
  switchMenu.value = false
}
</script>

<style lang="scss" scoped>
.el-menu {
  height: calc(100vh - 100px);
  overflow: auto;
  overflow-x: hidden;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  text-align: center;
}
</style>
