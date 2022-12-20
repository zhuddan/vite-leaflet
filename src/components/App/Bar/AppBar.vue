<script setup lang="ts">
import { useDisplay } from 'vuetify/lib/framework.mjs';
import AppBarHome from './AppBarHome.vue';
import AppBarLogo from './AppBarLogo.vue';
import AppBarLeafletPlugins from './AppBarLeafletPlugins.vue';
const { smAndUp, mdAndUp } = useDisplay();
</script>

<template>
  <v-app-bar>
    <template #prepend>
      <AppBarLogo />
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
      />
    </template>

    <template #append>
      <AppBarHome v-if="mdAndUp" />
      <AppBarLeafletPlugins v-if="mdAndUp" />
    </template>
  </v-app-bar>
</template>

<style scoped>

</style>