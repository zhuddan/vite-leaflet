<script setup lang="ts">
import { AppBar, AppDrawer, AppFooter } from '@/components/App';
</script>

<template>
  <v-app>
    <AppBar />
    <AppDrawer />

    <v-main>
      <v-container
        class="pa-4 pa-sm-6 pa-md-8 fill-height"
        fluid
        tag="section"
      >
        <div class="fill-height d-flex flex-column ">
          <AppTitle />
          <router-view />
        </div>
      </v-container>
    </v-main>
    <AppFooter />
  </v-app>
</template>

<style scoped>

</style>