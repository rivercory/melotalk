<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'
import Navmenu from "@/components/Navmenu.vue";
import Sidemenu from "@/components/Sidemenu.vue";

const countries = ref([])

async function getCountries() {
  const { data } = await supabase.from('countries').select()
  countries.value = data
}

onMounted(() => {
  getCountries()
})
</script>

<template>
  <Navmenu title="소개"/>
  <div style="padding: 1rem;">
    <ul>
      <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
    </ul>
  </div>
</template>