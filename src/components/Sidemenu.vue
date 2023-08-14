<script>
export default {
  props: {},
  mounted() {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
  }
}
</script>

<template>
  <main class="d-flex flex-nowrap">
    <div class="d-flex flex-column flex-shrink-0 rounded-3 border" style="width: 17rem; margin-left: 1rem; margin-bottom: 1rem;">
    </div>
  </main>
</template>

<style scoped>
main {
  max-height: 86vh;
  height: 86vh;
}
</style>