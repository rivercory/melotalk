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
    <div class="d-flex flex-column flex-shrink-0" style="background-color: var(--sidebar-background-color); width: 17rem;">
    </div>
  </main>
</template>

<style>
[data-theme="light"] {
  --sidebar-background-color: #dee2e6;
}

[data-theme="dark"] {
  --sidebar-background-color: #868e96;
}

main {
  max-height: 92vh;
  height: 92vh;
}
</style>