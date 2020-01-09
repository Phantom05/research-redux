const withSass = require('@zeit/next-sass');
const CSS = require('@zeit/next-css')
const optimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');
const webpack = require('webpack');
const fetch = require('isomorphic-unfetch');

const sassConfig = {
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]__[hash:base64:12]'
  },
  sassLoaderOptions: {
    includePaths: ["styles"]
  },
};
const optimizedImagesConfig = {
  inlineImageLimit: 8192,
  imagesFolder: 'images',
  imagesName: '[name]-[hash].[ext]',
  optimizeImagesInDev: false,
  // assetPrefix: 'http://localhost:3000',
  mozjpeg: {
    quality: 80
  },
  optipng: {
    optimizationLevel: 3
  },
  pngquant: false,
  gifsicle: {
    interlaced: true,
    optimizationLevel: 3
  },
  svgo: {
    // enable/disable svgo plugins here
  },
  webp: {
    preset: 'default',
    quality: 75
  }
};

const exportConfig={
  exportTrailingSlash: true,
  exportPathMap: async function() {
    const paths = {
      '/': { page: '/' },
      '/about': { page: '/about' }
    };
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();
    const shows = data.map(entry => entry.show);

    shows.forEach(show => {
      paths[`/show/${show.id}`] = { page: '/show/[id]', query: { id: show.id } };
    });

    return paths;
  }
}

const nextConfiguration = {
  webpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        PC: JSON.stringify('pc')
      })
    );
    return config;
  },
};


module.exports = withPlugins([
  [CSS],
  [withSass, sassConfig],
  // [optimizedImages, optimizedImagesConfig],
], nextConfiguration);