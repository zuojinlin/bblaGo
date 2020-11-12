import path from 'path'

module.exports = {
  alias: {
    '/@/': path.resolve(__dirname, './src'),
  },
  // optimizeDeps: {
  //   include: ["@ant-design/icons-vue"],
  // },
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:7001',
      changeOrigin: true,
      pathRewrite: {
        '^api': '',
      },
      // rewrite: (path) => path.replace(/^\/api/, ''),
    },
  },
}
