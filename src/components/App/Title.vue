<script setup lang="ts">
import Link from './Link.vue';
defineOptions({
  name: 'AppTitle',
});
const route = useRoute();
const title = computed(() => route.meta.title);
const link = computed(() => route.meta.link);
</script>

<template>
  <h5 class="text-h5 text-uppercase mb-5">
    <Link :href="link">
      {{ title }}
    </Link>
  </h5>
</template>

