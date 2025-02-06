<template>
  <v-app>
    <v-main>
      <TimeConverter />
    </v-main>
  </v-app>
</template>

<script setup>
import TimeConverter from './components/TimeConverter.vue'
</script>

<style>
body {
  width: 400px;
  height: 202px;
  margin: 0;
  padding: 0;
}
</style>