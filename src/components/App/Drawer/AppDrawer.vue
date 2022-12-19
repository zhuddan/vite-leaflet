<script setup lang="ts">
import { asyncRoutes } from '@/router/routes/asyncRoutes';
const route = useRoute();
const path = computed(() => route.path);

function isActive(itemPath: string) {
  return path.value === `/lp/${itemPath}`;
}
</script>

<template>
  <v-navigation-drawer>
    <v-list nav density="compact">
      <v-list-item
        v-for="(item, i) in asyncRoutes"
        :key="i"
        :value="item.path"
        active-color="primary"
        :to="`/lp/${item.path}`"
        :active="isActive(item.path)"
        link
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