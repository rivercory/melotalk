<template>
  <div class="d-flex flex-nowrap">
    <div class="if-desktop">
    <div style="flex: 1;">
      <Sidemenu/>
    </div>
    </div>
    <div style="flex: 9;">
      <Navmenu firsttitle="홈"/>
    </div>
  </div>
</template>

<style>
</style>

<script>
import {defineComponent} from "vue";
import Navmenu from "@/components/Navmenu.vue";
import Sidemenu from "@/components/Sidemenu.vue";

export default defineComponent({
  components: {Sidemenu, Navmenu},
  mounted() {
  }
})
</script>
