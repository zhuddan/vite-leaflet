import vue from '@vitejs/plugin-vue';
import DefineOptions from 'unplugin-vue-define-options/vite';
import type { PluginOption } from 'vite';
import purgeIcons from 'vite-plugin-purge-icons';

import { createAutoImportPlugin } from './plugins/autoImport';
import { configSvgIconsPlugin } from './plugins/svgSprite';
import { configVisualizerConfig } from './plugins/visualizer';

export function createVitePlugins(isBuild: boolean) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [];
  // base
  vitePlugins.push(vue({
    include: [/\.vue$/, /\.md$/],
  }));
  // md;
  vitePlugins.push(DefineOptions());
  vitePlugins.push(createAutoImportPlugin());
  // svg
  vitePlugins.push(purgeIcons());
  vitePlugins.push(configSvgIconsPlugin(isBuild));

  vitePlugins.push(configVisualizerConfig());

  return vitePlugins;
}
