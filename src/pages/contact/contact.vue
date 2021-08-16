<template>
  <div>
    <div>
      <p class="title">联系方式</p>
    </div>
    <div id="phone" class="pagebox">
      <img src="../../assets/img/cellphone.svg" alt="cellphone" />
      <p class="middleText">13003063995</p>
    </div>
    <div id="gitee" class="pagebox">
      <img id="giteesvg" src="../../assets/img/gitee.svg" alt="gitee" />
      <div id="body">
        <a href="https://github.com/coomassie-zheng" class="middleText">https://github.com/coomassie-zheng</a>
      </div>
    </div>
    <div id="wechat" class="pagebox" @click="isShow = !isShow">
      <img src="../../assets/img/wechat.svg" alt="wechat" />
      <p class="middleText">TQing10001</p>
    </div>
    <div id="qrcodebox" class="pagebox" :class="{ show: !isShow }">
      <img src="../../assets/img/qrcode.jpg" alt="qrcode" />
    </div>
    <div id="mail" class="pagebox">
      <img src="../../assets/img/mail.svg" alt="mail" />
      <p class="middleText">zhengtq@shu.edu.cn</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      isShow: false,
    }
  },
}
</script>

<style>
@import url("../../assets/css/page.css");

#phone img {
  height: 64px;
}

#giteesvg {
  height: 50px;
  margin: 10px;
}
#wechat img {
  height: 50px;
  margin: 10px;
}
#gitee,
#wechat,
#mail {
  margin-top: 20px;
}
#body {
  display: flex;
  justify-content: center;
  align-items: center;
}
#qrcodebox {
  margin: 2px auto;
  width: 200px;
}
#qrcodebox img {
  width: 100%;
  border-radius: 5px;
}
.show {
  display: none;
}
#mail img {
  height: 54px;
  margin: 8px;
}
</style>