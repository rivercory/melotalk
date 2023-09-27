<script setup>
import {ref, onMounted} from 'vue'
import {supabase} from '../lib/supabaseClient'
import Navmenu from "@/components/Navmenu.vue";
import Filter from "badwords-ko";

const chat = ref([])

async function getChat() {
  const {data} = await supabase.from('chat').select()
  const reverse = data.reverse();
  chat.value = reverse
}

async function inputValueChange(){
  var inputValue = document.getElementById('inputValue').value;
  const today = new Date();
  const filter = new Filter();
  const str = inputValue;
  const strLength = str.length;
  if (strLength <= 0) {
    alert("문자를 입력해주세요!")
  } else {
    const { error } = await supabase
        .from('chat')
        .insert({ created_at: today.toLocaleString(), text: filter.clean(inputValue) })
    location.reload()
  }
}

setTimeout(function() {
  getChat()
}, 100);

onMounted(() => {
  getChat()
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
      <textarea class="border rounded-2" name="inputValue" id="inputValue" style="height: 10rem; width: 100%; resize: none; border: 0;"/>
      <button class="btn" @click="inputValueChange" style="float: right; margin-bottom: 1rem; background-color: #748ffc; font-weight: bold; font-family: NanumSquareNeo-Variable;">보내기</button>
      <div>
        <div class="rounded-2" style="background-color: #e9ecef; margin-bottom: 0.5rem; padding: 1rem; clear: both; font-family: Pretendard-Regular;"
             v-for="chat in chat" :key="chat.created_at">
             <span class="date">{{ chat.created_at }}</span>
             <br/>
             <span class="content">{{ chat.text }}</span>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
.content {
  font-size: 1.2rem;
}
</style>