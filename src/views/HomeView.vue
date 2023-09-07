<template>
  <Navmenu title="홈" />
  <div class="content">
    <span style="font-size: 4rem; font-family: Pretendard-Regular; color: var(--hero-title-color);">멜로디에 대해서 얘기해 봐요</span>
    <p align="middle">
      <button class="btn btn-lg" style="background-color: #748ffc;">시작하기</button>
    </p>
  </div>
</template>

<style>
[data-theme="light"] {
  --hero-title-color: #000000;
}

[data-theme="dark"] {
  --hero-title-color: #FFFFFF;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 88vh;
}
</style>

<script setup>
import Navmenu from "@/components/Navmenu.vue";
</script>