<template>
  <div class="app">
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
    />

    <router-view />
    <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o" to="/fly">标签</van-tabbar-item>
    <van-tabbar-item icon="search" dot to="/svip">标签</van-tabbar-item>
    <van-tabbar-item icon="friends-o" info="5" to="/vip">标签</van-tabbar-item>
    <van-tabbar-item icon="setting-o" info="20" to="/xy">标签</van-tabbar-item>
  </van-tabbar>
  </div>
</template>

<script>
// import Hello from "./components/HelloWorld";
export default {
  data: ()=>({
    active: 0
  }),
  components: {
    // Hello
  }
};
</script>

<style>
</style>
