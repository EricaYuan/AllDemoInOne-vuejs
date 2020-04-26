<template>
  <div class="tab_content">
    <slot></slot> <!-- 用于接收自定义内容 -->
  </div>
</template>

<script>
import { bus } from '../../main'

export default {
    name: 'TabItem',
    props: {
        tabTitle: String
    },
    data() {
        return{
            totalTabs: ''
        }
    },
    updated() {
      this.totalTabs = this.$parent.$children.length
    },
    watch: {
      totalTabs() {
        bus.$emit('slot-changes')
      }
    }
}
</script>

<style lang="scss" scoped>
.tab_content{
    border-bottom: 1px solid grey;
}
</style>

