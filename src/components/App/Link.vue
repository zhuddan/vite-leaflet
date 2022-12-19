<script setup lang="ts">
// Utilities
import { computed } from 'vue';

const props = defineProps({
  href: {
    type: String,
    default: '',
  },
});

defineOptions({
  name: 'AppLink',
});

const isExternal = computed(() => props.href.startsWith('http') || props.href.startsWith('mailto'));
const isSamePage = computed(() => !isExternal.value && props.href.startsWith('#'));
const attrs = computed(() => {
  return isExternal.value
    ? { href: props.href, target: '_blank', rel: 'noopener' }
    : {
        to: isSamePage.value ? props.href : {
          path: props.href,
        },
      };
});

const icon = computed(() => {
  if (isSamePage.value) return 'mdi-pound';
  if (isExternal.value) return 'mdi-open-in-new';
  if (props.href) return 'mdi-page-next';

  return null;
});

const iconProps = computed(() => {
  if (!icon.value) return null;

  return {
    icon: icon.value,
    class: `m${isSamePage.value ? 'r' : 'l'}-1`,
    color: 'primary',
    size: '.875rem',
  };
});
const tag = computed(() => isExternal.value ? 'a' : 'router-link');
</script>

<template>
  <component
    :is="tag"
    class="app-link text-decoration-none text-primary font-weight-medium d-inline-flex align-center"
    v-bind="attrs"
  >
    <template v-if="iconProps && isSamePage">
      <VIcon v-bind="iconProps" />
    </template>

    <slot></slot>

    <template v-if="iconProps && !isSamePage">
      <VIcon v-bind="iconProps" />
    </template>
  </component>
</template>

<style lang="scss">
  .app-link{
    p{
      margin-bottom: 0
    }
  }
</style>
