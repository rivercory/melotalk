<template>
  <div class="if-desktop">
  <div class="d-flex flex-nowrap">
    <div style="flex: 1;">
      <Sidemenu/>
    </div>
    <div style="flex: 5;">
      <Navmenu/>
    </div>
  </div>
  </div>
  <div class="if-mobile">
    <Navmenu/>
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
