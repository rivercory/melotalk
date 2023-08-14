<template>
  <Navmenu title="홈"/>
    <div class="if-desktop d-flex flex-nowrap">
      <Sidemenu/>
      <div class="border rounded-3" style="margin-left: 1rem; margin-right: 1rem; margin-bottom: 1rem; padding: 1rem; width: 83rem;">

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
