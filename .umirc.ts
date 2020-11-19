import { defineConfig } from 'umi';

export default defineConfig({
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
