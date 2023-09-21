<template>
  <router-view/>
</template>

<style>
@import "assets/font.css";

.if-desktop {
  display: block;
}

.if-mobile {
  display: none;
}

@media screen and (max-width: 1000px) {
  .if-desktop {
    display: none;
  }

  .if-mobile {
    display: block;
  }
}

body,html {
  background-color: var(--background-color);
  width: 100%;
}

[color-theme="light"] {
  --background-color: #FFFFFF;
  --border-color: #ced4da;
}

[color-theme="dark"] {
  --background-color: #212529;
  --border-color: #adb5bd;
}

.border {
  border-color: var(--border-color) !important;
}
</style>