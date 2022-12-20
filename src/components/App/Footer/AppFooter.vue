<script setup lang="ts">

</script>

<template>
  <v-footer class="footer" app absolute>
    <app-link href="https://leafletjs.com/">
      leafletjs
    </app-link>
    <v-divider vertical class="mx-4" />
    <app-link href="https://leafletjs.com/plugins.html">
      leafletjs plugins
    </app-link>
  </v-footer>
</template>

<style scoped>
.footer{
  border-top-width: thin !important;
  border-top-style: solid !important;
  border-top-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}
</style>