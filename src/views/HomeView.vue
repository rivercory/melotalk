<template>
  <Navmenu title="홈"/>
    <div class="if-desktop d-flex flex-nowrap">
      <Sidemenu/>
      <div class="rounded-3" style="background-color: var(--content-background-color); margin-left: 1rem; margin-right: 1rem; margin-bottom: 1rem; padding: 1rem; width: 83rem;">
      </div>
    </div>
</template>

<style>
[data-theme="light"] {
  --content-background-color: #dee2e6;
}

[data-theme="dark"] {
  --content-background-color: #868e96;
}
</style>

<script setup>
import Navmenu from "@/components/Navmenu.vue";
import Sidemenu from "@/components/Sidemenu.vue";
</script>