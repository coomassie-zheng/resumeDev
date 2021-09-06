<template>
  <div>
    <TabBar>
      <TabBarItem v-for="(page, index) of pages" :key="index" :path="page.path">
        <template v-slot:item-img>
          <img :src="page.imgSrcs[0]" alt="" />
        </template>
        <template v-slot:item-img-active>
          <img :src="page.imgSrcs[1]" alt="" />
        </template>
        <template v-slot:item-text>
          <div>{{ page.text }}</div>
        </template>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
import TabBar from './tabbar/TabBar.vue'
import TabBarItem from './tabbar/TabBarItem.vue'
//解决img动态绑定src问题
import basicSvg from '../assets/img/basic.svg'
import basicActiveSvg from '../assets/img/basic_active.svg'
import profileSvg from '../assets/img/profile.svg'
import profileActiveSvg from '../assets/img/profile_active.svg'
import contactSvg from '../assets/img/contact.svg'
import contactActiveSvg from '../assets/img/contact_active.svg'

export default {
  data() {
    return {
      pages: [
        {
          path: '/basic',
          imgSrcs: [basicSvg, basicActiveSvg],
          text: '基本信息',
        },
        {
          path: '/profile',
          imgSrcs: [profileSvg, profileActiveSvg],
          text: '专业技能',
        },
        {
          path: '/contact',
          imgSrcs: [contactSvg, contactActiveSvg],
          text: '联系方式',
        },
      ],
    }
  },
  components: {
    TabBarItem,
    TabBar,
  },
}
</script>
