<template>
  <div>
    <TabBar>
      <TabBarItem path="/basic">
        <template v-slot:item-img>
          <img src="../assets/img/basic.svg" alt="" />
        </template>
        <template v-slot:item-img-active>
          <img src="../assets/img/basic_active.svg" alt="" />
        </template>
        <template v-slot:item-text>
          <div>基本信息</div>
        </template>
      </TabBarItem>
      <TabBarItem path="/profile">
        <template v-slot:item-img>
          <img src="../assets/img/profile.svg" alt="" />
        </template>
        <template v-slot:item-img-active>
          <img src="../assets/img/profile_active.svg" alt="" />
        </template>
        <template v-slot:item-text>
          <div>专业技能</div>
        </template>
      </TabBarItem>
      <TabBarItem path="/contact">
        <template v-slot:item-img>
          <img src="../assets/img/contract.svg" alt="" />
        </template>
        <template v-slot:item-img-active>
          <img src="../assets/img/contract_active.svg" alt="" />
        </template>
        <template v-slot:item-text>
          <div>联系方式</div>
        </template>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
import TabBar from "./tabbar/TabBar.vue"
import TabBarItem from "./tabbar/TabBarItem.vue"
export default {
  components: {
    TabBarItem,
    TabBar,
  }
}
</script>
