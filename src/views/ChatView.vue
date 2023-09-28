<script setup>
import {ref, onMounted} from "vue";
import {supabase} from "../lib/supabaseClient";
import Navmenu from "@/components/Navmenu.vue";
import Filter from "badwords-ko";

const chat = ref([]);

async function getChat() {
  const {data} = await supabase.from("chat").select();

  const reverse = data.reverse();
  chat.value = reverse;
}

async function inputValueChange() {
  var inputValue = document.getElementById("inputValue").value;
  const today = new Date();
  const filter = new Filter();
  const str = inputValue;
  const strLength = str.length;

  if (strLength <= 0) {
    alert("문자를 입력해주세요!");
  } else {
    const {error} = await supabase
        .from("chat")
        .insert({
          created_at: today.toLocaleString(),
          text: filter.clean(str),
        });
    getChat();
  }
}

onMounted(() => {
  getChat();
});
</script>

<template>
  <Navmenu title="채팅"/>
  <div class="d-flex flex-nowrap">
    <div
        class="if-desktop"
        style="
        width: 25rem;
        padding-left: 1rem;
        padding-top: 1rem;
        padding-bottom: 1rem;">
      <div class="rounded-2" style="padding: 1rem; background-color: var(--sidebar-background-color);">추가예정 레이아
      </div>
    </div>
    <div style="padding: 1rem; width: 100rem">
      <textarea
          class="rounded-2"
          name="inputValue"
          id="inputValue"
          style="height: 10rem; width: 100%; resize: none; border: 0; background-color: var(--chat-textarea-background-color); font-family: SUIT-Regular;"
      />
      <button
          class="btn"
          @click="inputValueChange"
          style="
          float: right;
          margin-bottom: 1rem;
          background-color: #364fc7;
          font-weight: bold;
          color: #FFFFFF;
          clear: both;
          font-family: NanumSquareNeo-Variable;
        "
      >
        보내기
      </button>
      <div style="float: right;">
        <button class="btn" @click="getChat">
          <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27"
               class="refresh-icon bi bi-arrow-clockwise" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
            <path
                d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
          </svg>
        </button>
      </div>
      <div style="clear: both;">
        <div
            class="rounded-2"
            style="
            background-color: var(--chat-container-background-color);
            margin-bottom: 0.5rem;
            padding: 1rem;
            clear: both;
            font-family: Pretendard-Regular;
          "
            v-for="chat in chat"
            :key="chat.created_at"
        >
          <span class="date">{{ chat.created_at }}</span>
          <br/>
          <span class="content">{{ chat.text }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
:root.lightmode {
  --chat-container-background-color: #e9ecef;
  --chat-textarea-background-color: #e9ecef;
  --sidebar-background-color: #e9ecef;
  --refresh-icon-color: #000000;
}

:root.darkmode {
  --chat-container-background-color: #868e96;
  --chat-textarea-background-color: #495057;
  --sidebar-background-color: #868e96;
  --refresh-icon-color: #FFFFFF;
}

.content {
  font-size: 1.3rem;
}

.refresh-icon {
  fill: var(--refresh-icon-color);
}
</style>