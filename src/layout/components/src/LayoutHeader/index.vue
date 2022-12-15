<script setup lang="ts">
import { useAppConfig } from '@/hooks/config/useAppConfig';
import logoImg from '@/assets/logo.png';
import { useDisplay } from 'vuetify/lib/framework.mjs';
import LocaleButton from './LocaleButton.vue';
import ThemeButton from './ThemeButton.vue';
import { useAppProviderContext } from '@/layout/context/useAppProviderContext';
defineOptions({
  name: 'LayoutSidebar',
});
const { VITE_APP_TITLE } = useAppConfig();
const { mobile } = useDisplay();
const { isSidebarOpen } = useAppProviderContext();
const model = ref(true);

// function
const route = useRoute();
</script>

<template>
  <v-app-bar v-model="model">
    <template #prepend>
      <v-btn v-if="mobile" icon="mdi-menu" @click="(isSidebarOpen = !isSidebarOpen)" />
      <router-link to="/" class="d-flex align-center" style="text-decoration: none;">
        <v-img :src="logoImg" width="50" height="50" />
        <h2>
          {{ VITE_APP_TITLE }}
        </h2>
      </router-link>
    </template>
    <template #title>
    </template>

    <template #append>
      <v-btn to="/" color="primary" :active="route.path === '/'">
        home
      </v-btn>
      <v-btn to="/leftlet" color="primary" :active="route.path === '/leftlet'">
        leaflet
      </v-btn>
      <v-btn to="/leaflet-plugins" color="primary" :active="route.path === '/leaflet-plugins'">
        leaflet plugins
      </v-btn>
    </template>
  </v-app-bar>
</template>

<style scoped>
h2{
  color: rgba(var(--v-theme-primary));
}

.sss{
  color: red;
}
</style>