<template>
  <Navmenu title="홈" />
  <p class="wrapper" align="middle">
    <div class="home">
      <h1 class="home-text">우리가</h1>
      <router-link to="/chat"><button type="button" class="btn btn-lg" style="background-color: #91A7FF; font-weight: bold; font-family: SUIT-Regular; font-size: 2rem;">시작하기</button></router-link>
    </div>
  </p>
</template>

<script setup>
import Navmenu from "@/components/Navmenu.vue";
</script>

<style>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 83vh;
}
</style>