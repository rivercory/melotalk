<script>
export default {
  methods: {
    inputValueChange() {
    var inputValue = document.getElementById('inputValue').value;
    console.log(inputValue)
  }
  }
}
</script>

<template>
  <input type="text" name="inputValue" id="inputValue">
  <button @click="inputValueChange">d</button>
</template>