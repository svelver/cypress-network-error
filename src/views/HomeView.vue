<template>
  <p>DEMO</p>
</template>

<script setup lang="ts">
import DemoAPI from "../common/demo-api";

DemoAPI.list().then((data) => {
  console.log("DEMO LIST:", data);
});
</script>
