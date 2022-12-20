<script setup lang="ts">
import logoImg from '@/assets/logo.png';
import { useAppConfig } from '@/hooks/config/useAppConfig';
const { VITE_APP_TITLE } = useAppConfig();
</script>

<template>
  <router-link to="/" class="d-flex align-center text-decoration-none">
    <v-img :src="logoImg" width="50" height="50" />
    <h2>
      {{ VITE_APP_TITLE }}
    </h2>
  </router-link>
</template>

<style scoped>
</style>