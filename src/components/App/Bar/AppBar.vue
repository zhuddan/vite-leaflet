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

      <!-- <v-btn v-if="mobile" icon="mdi-menu" @click="(isSidebarOpen = !isSidebarOpen)" />
      <template v-else>
        <v-btn to="/" color="primary" :active="route.path === '/'">
          home
        </v-btn>
        <v-btn to="/leftlet" color="primary" :active="route.path === '/leftlet'">
          leaflet
        </v-btn>
        <v-btn to="/leaflet-plugins" color="primary" :active="route.path === '/leaflet-plugins'">
          leaflet plugins
        </v-btn>
      </template> -->
    </template>
  </v-app-bar>
</template>

<style scoped>

</style>