<template>
  <router-view/>
</template>

<style>
.if-desktop {
  display: block;
}

.if-mobile {
  display: none;
}

@media screen and (max-width: 700px) {
  .if-desktop {
    display: none;
  }

  .if-mobile {
    display: block;
  }
}
</style>