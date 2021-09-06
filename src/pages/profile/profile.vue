<template>
  <div>
    <p class="title">专业技能</p>
    <div id="techStack" class="box">
      <div v-for="(skill, index) of skills" :key="index" >
        <p class="domText">{{skill.title}}</p>
        <p class="subText">{{skill.content}}</p>
        <hr v-if="index !== skills.length - 1"/>
      </div> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      skills: [
        {
          title: '计算机基础',
          content: '了解基本的数据结构与算法',
        },
        {
          title: 'HTML CSS',
          content: '了解HTML5、CSS3新特性，可以实现基础网页布局',
        },
        {
          title: 'JavaScript',
          content: '熟悉JavaScript基础知识，熟悉es6部分新特性',
        },
        {
          title: 'Vue.js',
          content: '具有vue核心、vuex、vue-router的基础知识',
        },
        {
          title: '前后端通信技术',
          content: '了解原生ajax、axios、fetch方法',
        },
        {
          title: '开发辅助工具',
          content: '具备git、npm的使用经验',
        },
      ],
    }
  },
}
</script>

<style scoped>
@import url('../../assets/css/page.css');
#techStack {
  padding: 10px 14px;
}
</style>