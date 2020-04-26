<template>
  <div class="event_bus_container">
    <Tab>
        <TabItem tab-title='title1'><div class="tab_body">this is tab body.</div></TabItem>
        <TabItem tab-title='title2'><div class="tab_body">this is tab body.</div></TabItem>
        <!-- <TabItem tab-title='title3'><div class="tab_body">this is tab body.</div></TabItem> -->
    </Tab>
  </div>
</template>

<script>
import Tab from '../components/event-bus-demo/Tab.vue'
import TabItem from '../components/event-bus-demo/TabItem.vue'

export default {
    name: 'EventBus',
    components: {Tab, TabItem}
}
</script>

<style lang="scss" scoped>
.event_bus_container{
    margin: 20px 20px;
}
.tab_body{
    line-height: 60px;
    text-align: center;
}
</style>

