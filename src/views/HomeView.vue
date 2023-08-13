<template>
  <Navmenu title="홈"/>
    <div class="if-desktop">
      <Sidemenu/>
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
