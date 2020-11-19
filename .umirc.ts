import { defineConfig } from 'umi';

export default defineConfig({
  base: '/',
  publicPath: '/umijs-pluginlocale-bug-demo/',
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
