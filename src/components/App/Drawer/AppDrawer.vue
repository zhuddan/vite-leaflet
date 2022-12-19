<script setup lang="ts">
import { asyncRoutes } from '@/router/routes/asyncRoutes';
</script>

<template>
  <v-navigation-drawer>
    <v-list nav density="compact" item-value="">
      <v-list-item
        v-for="(item, i) in asyncRoutes"
        :key="i"
        :value="i"
        active-color="primary"
        link
        active
      >
        <v-list-item-title>
          {{ item.meta?.title }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>

</style>