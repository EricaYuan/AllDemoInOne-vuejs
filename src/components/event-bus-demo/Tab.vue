<template>
  <div class="tab_container">
    <ul class="tab_head"><li v-for="(title, index) in tabTitle" :key='index'>{{title}}</li></ul>
    <slot></slot> <!-- slot接收从TabItem中传入的tab内容 -->
  </div>
</template>

<script>
import { bus } from '../../main'

export default {
    name: 'Tab',
    data() {
        return{
            tabSlots: [],
            tabTitle: []
        }
    },
    created() {
      bus.$on('slot-changes', this.getTabTitle); // 监听传入的tab是否发生变化
    },
    mounted() {
      this.getTabTitle();
    },
    computed: {
    },
    watch: {
    },
    methods: {
      getTabTitle() {
        // 获取传入tab的标签名
        let allSlots = this.$slots.default
        this.tabSlots = allSlots.filter(item => {
          if(item.tag) {
            return item
          }else return          
        })
        this.tabTitle = this.tabSlots.map((tab, index) => {
          return this.tabSlots[index].componentOptions.propsData.tabTitle
        })
        // 获取传入tab的标签名 end
      }
    }
}
</script>

<style lang='scss' scoped>
.tab_container{
    width: 300px;
    background: #e5e5ee;
    .tab_head{
        display: flex;
        justify-content: space-around;
        border-bottom: 1px solid grey;
        li{
            line-height: 30px;
        }
    }
}
</style>

