<template>
  <div class="if-desktop">
    <Navmenu title="Melotalk" />
  </div>
  <div class="container-fluid pb-3">
    <div class="d-grid gap-3" style="grid-template-columns: 1fr 3fr 1fr; height: 87vh;">
      <div class="rounded-3" style="background-color: #dbe4ff;">
      </div>
      <div class="rounded-3" style="background-color: #dbe4ff;">
      </div>
      <div class="rounded-3" style="background-color: #dbe4ff;">
      </div>
    </div>
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
