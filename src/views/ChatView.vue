<script setup>
import {ref, onMounted} from 'vue'
import {supabase} from '../lib/supabaseClient'
import Navmenu from "@/components/Navmenu.vue";

const countries = ref([])

async function getCountries() {
  const {data} = await supabase.from('countries').select()
  countries.value = data
}

onMounted(() => {
  getCountries()
})
</script>

<template>
  <Navmenu title="채팅"/>
  <div class="d-flex flex-nowrap">
    <div class="if-desktop" style="width: 25rem; padding-left: 1rem; padding-top: 1rem; padding-bottom: 1rem;">
      <div class="border rounded-2" style="padding: 1rem;">
        ㄴㄷㄱ
      </div>
    </div>
    <div style="padding: 1rem; width: 100rem;">
      <input class="border rounded-2" id="name" style="height: 10rem; width: 100%; resize: none; border: 0;"/>
      <button class="btn" style="float: right; margin-bottom: 1rem; background-color: #748ffc; font-weight: bold; font-family: NanumSquareNeo-Variable;">보내기</button>
      <div>
        <div class="rounded-2" style="background-color: #e9ecef; margin-bottom: 0.5rem; padding: 1rem; clear: both;"
             v-for="country in countries" :key="country.id">{{ country.name }}
        </div>
      </div>
    </div>
  </div>
</template>


<style>
</style>