<script setup>
import Sidemenu from "@/components/Sidemenu.vue";
import Navmenu from "@/components/Navmenu.vue";
</script>

<template>
  <Navmenu title="채팅"/>
  <div class="if-desktop d-flex flex-nowrap">
    <Sidemenu/>
    <div style="margin-left: 1rem; margin-right: 1rem; margin-bottom: 1rem; padding: 1rem; width: 83rem;">
    </div>
  </div>
</template>

<style>
</style>