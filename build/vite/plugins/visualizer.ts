/**
 * Package file volume analysis
 */
import visualizer from 'rollup-plugin-visualizer';
import type { PluginOption } from 'vite';

export function isReportMode(): boolean {
  return process.env.REPORT === 'true';
}

export function configVisualizerConfig() {
  if (isReportMode()) {
    return visualizer({
      filename: './node_modules/.cache/visualizer/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    }) as PluginOption;
  }
  return [];
}
