const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: (config) => {
      // Add your custom Webpack configuration here
      // For example, you can modify loaders, plugins, etc.
      
      // Example: Add a custom loader for handling SVG files
      config.module.rules.push({
        test: /\.svg$/,
        use: ['svg-inline-loader'],
      });

      // You can further customize the config as needed
    },
})
