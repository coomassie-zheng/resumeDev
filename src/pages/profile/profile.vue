<template>
  <div>
    <p class="title">专业技能</p>
    <div id="techStack" class="box">
      <p class="domText">计算机基础</p>
      <p class="subText">了解基本的数据结构与算法</p>
      <hr />
      <p class="domText">HTML CSS</p>
      <p class="subText">了解HTML5、CSS3新特性，可以实现基础网页布局</p>
      <hr />
      <p class="domText">javascript</p>
      <p class="subText">熟悉es6部分新特性</p>
      <hr />
      <p class="domText">Vue.js</p>
      <p class="subText">
        具有vue核心、vuex、vue-router的使用经验，了解vue框架基本知识
      </p>
      <hr />
      <p class="domText">前后端通信技术</p>
      <p class="subText">了解原生ajax、axios框架、fetch方法</p>
      <hr />
      <p class="domText">开发辅助工具</p>
      <p class="subText">了解webpack基本配置，熟悉git、npm的基本指令</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
}
</script>

<style>
@import url("../../assets/css/page.css");
#techStack {
  padding: 10px 14px;
}
</style>