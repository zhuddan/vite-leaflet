<script setup lang="ts">
import Link from './Link.vue';
defineProps({
  link: {
    type: String,
  },
});
defineOptions({
  name: 'AppTitle',
});
const route = useRoute();
const title = computed(() => route.meta.title);
</script>

<template>
  <h5 class="text-h5 text-uppercase mb-5">
    <Link :href="link">
      {{ title }}
    </Link>
  </h5>
</template>

