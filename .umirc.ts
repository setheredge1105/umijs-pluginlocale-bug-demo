import { defineConfig } from 'umi';

export default defineConfig({
  base: '/',
  exportStatic: {
    htmlSuffix: true,
  },
  publicPath:
    'https://setheredge1105.github.io/umijs-pluginlocale-bug-demo/dist/',
  locale: {
    default: 'en-US',
    antd: true,
    baseNavigator: true,
    baseSeparator: '-',
    title: false,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
});
