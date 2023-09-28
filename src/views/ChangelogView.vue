<script>
import Navmenu from "@/components/Navmenu.vue";
import changelog from "@/assets/changelog.json";

export default {
  computed: {
    changelogs() {
      return changelog.map((items) => {
        return items;
      });
    },
  },
  components: {Navmenu}
}
</script>

<template>
  <Navmenu title="릴리즈 노트" />
  <div class="container">
  <div class="row">
    <div class="col align-self-center">
      <div class="changelog rounded-2" style="margin-bottom: 2rem;" v-for="item in changelogs" :key="item.id">
        <h2>{{ item.title }}</h2>
      </div>
    </div>
  </div>
  </div>
</template>

<style>
:root.lightmode {
  --changelog-background-color: #e9ecef;
}

:root.darkmode {
  --changelog-background-color: #868e96;
}

.changelog {
  height: auto;
  padding: 1rem;
  background-color: var(--changelog-background-color);
}
</style>