<template>
  <div class="bottom_menu">
    <div>
      <img src="1.png"/>
    </div>
    <div>
      <img src="2.png"/>
    </div>
    <div>
      <img src="3.png"/>
    </div>
    <div>
      <img src="4.png"/>
    </div>
    <div>
      <img src="5.png"/>
    </div>
  </div>
</template>

<style>
.bottom_menu {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 50px;
  z-index: 100;
  border-top: 1px solid black;
  background-color: white
}

.bottom_menu > div {
  float: left;
  width: 20%;
  height: 100%;
  text-align: center;
  padding-top: 13px;
}
</style>

<script>
export default {
}
</script>