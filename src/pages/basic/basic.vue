<template>
  <div>
    <div>
      <p class="title">基本信息</p>
    </div>
    <div id="name" class="box">
      <img src="../../assets/img/profilepic.png" alt="" />
      <div>
        <p id="chinese" class="domText">郑天晴</p>
        <p id="english" class="subText">男 23岁</p>
      </div>
    </div>
    <div id="eduExp" class="box">
      <p id="shu" class="domText">上海大学</p>
      <p class="subText">硕士研究生 材料加工工程<br />2019.09-至今</p>
      <hr />
      <p id="shu" class="domText">合肥工业大学</p>
      <p class="subText">
        本科 材料成型及控制工程<br />2015.09-2019.06<br />二等奖学金<br />大学生英语六级:
        538
      </p>
    </div>
    <div id="expect" class="box">
      <p id="shu" class="domText">求职意向</p>
      <p class="subText">
        期望职位：前端工程师<br />期望城市：上海
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Basic",
}
</script>

<style scoped>
@import url("../../assets/css/page.css");
#name {
  height: 90px;
  width: 100%;
  display: flex;
}
#name img {
  width: 60px;
  border-radius: 50%;
  margin: 14px;
}
#name #chinese {
  margin-top: 11px;
  margin-bottom: 0;
  margin-left: 10px;
  font-weight: normal;
}
#name #english {
  margin-top: 3px;
  margin-left: 10px;
  /* font-family: Arial, Helvetica, sans-serif; */
  /* font-weight: 100; */
}
#eduExp,
#expect {
  padding: 10px 14px;
}
#shu {
  margin: 0;
}
</style>