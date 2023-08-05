<template>
  <div class="if-desktop">
    <Navmenu title="홈" />
  </div>
  <div class="if-mobile">
    <Mobilemenu />
  </div>
</template>

<script>
import {defineComponent} from "vue";
import Navmenu from "@/components/Navmenu.vue";
import Mobilemenu from "@/components/Mobilemenu.vue";

export default defineComponent({
  components: {Mobilemenu, Navmenu}
})
</script>
