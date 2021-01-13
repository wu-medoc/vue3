<template>
  <el-button :plain="true" @click="open">打开消息提示</el-button>
  <el-button :plain="true" @click="openVn">VNode</el-button>
</template>
<script>
import { h } from 'vue'
import { ElMessage } from 'element-plus'
export default {
  name: 'Plus',
  data () {
    return {
      open () {
        ElMessage('只是一条消息提示');
      },
      openVn () {
        ElMessage({
          message: h('p', null, [
            h('span', null, '内容可以是 '),
            h('i', { style: 'color: teal' }, 'VNode')
          ])
        })
      }
    }
  }
}
</script>
