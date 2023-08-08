<template>
  <div class="if-desktop" style="height: auto;">
    <Navmenu firsttitle="멜로" secondtitle="톡" />
  </div>
  <div class="d-flex flex-nowrap gap-3" style="margin: 1rem;">
      <div class="rounded-3 side" style="background-color: #edf2ff; height: 10vh; flex: 1; position: sticky; top: 0;">
      </div>
      <div class="rounded-3 gap-3" style="background-color: #edf2ff; padding: 1rem; position: sticky; top: 0; height: 150vh; flex: 3;">
        <div class="text-center" style="margin: 0.5rem;">
            <div class="row justify-content-between">
              <div class="col-1">
                <h4 style="font-weight: bold; font-family: NanumSquareNeo-Variable; color: #364fc7;">채팅</h4>
              </div>
              <div class="col-1">
                <a href="/chat">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#364fc7" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                </svg>
                </a>
              </div>
            </div>
        </div>
        <textarea class="rounded-2 border" style="border: 0; resize: none; width: 100%; height: 20vh;" />
      </div>
      <div class="rounded-3" style="background-color: #edf2ff; height: 10vh; flex: 1; position: sticky; top: 0;">
      </div>
  </div>
  <div class="if-mobile">
    <Mobilemenu />
  </div>
</template>

<style>
</style>

<script>
import {defineComponent} from "vue";
import Navmenu from "@/components/Navmenu.vue";
import Mobilemenu from "@/components/Mobilemenu.vue";

export default defineComponent({
  components: {Mobilemenu, Navmenu},
  mounted() {
  }
})
</script>
