<template>
  <Navmenu title="홈"/>
  <p class="wrapper" align="middle">
    <div class="home">
      <h1 class="home-text">멜로디에 대해 얘기해 봐요</h1>
      <router-link to="/chat">
        <button type="button" @click="startbuttonclicked" class="start-button btn">시작하기</button>
      </router-link>
    </div>
  </p>
</template>

<script setup>
import Navmenu from "@/components/Navmenu.vue";

var username = null

async function startbuttonclicked() {
  if (username == null) {
  } else {

  }
}
</script>

<style>
:root.lightmode {
  --home-text-color: #000000;
}

:root.darkmode {
  --home-text-color: #FFFFFF;
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 83vh;
}

.start-button {
  background-color: #364fc7;
  color: #FFFFFF;
  font-family: SUIT-Regular;
  font-size: 2rem;
}

.home-text {
  font-size: 5rem;
  font-family: IBMPlexSansKR-Regular;
  font-weight: bold;
  color: var(--home-text-color);
  margin-bottom: 1rem;
}

@media screen and (max-width: 700px) {
  .home-text {
    font-size: 2rem;
  }

  .start-button {
    font-size: 1.5rem;
  }
}
</style>