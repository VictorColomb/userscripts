const path = require('path');
const {globSync} = require('glob');
const WebpackUserscript = require('webpack-userscript').default;

const mode =
  process.env.NODE_ENV === 'production' ? 'production' : 'development';

const entries = Object.fromEntries(
  globSync('src/*/index.[jt]s').map(entry => [
    /src[/\\]([\w-]+)[/\\]index\.[jt]s/i.exec(entry)[1],
    path.resolve(__dirname, entry),
  ])
);

module.exports = {
  mode: mode,
  entry: entries,
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: path.resolve(__dirname, '.yarn'),
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  devServer: {
    host: 'localhost',
    allowedHosts: ['127.0.0.1', 'localhost', '.tarmactechnologies.com'],
    hot: false,
    liveReload: true,
  },
  plugins: [
    new WebpackUserscript({
      headers: (
        headers,
        {
          fileInfo: {
            chunk: {name},
          },
        }
      ) => {
        const user_headers = require(path.resolve(
          __dirname,
          `src/${name}/headers.js`
        ));
        const combined = {
          ...headers,
          ...user_headers,
        };

        if (mode === 'development') {
          combined.version = combined.version + '-[buildNo]';
        }

        return combined;
      },
    }),
  ],
  output: {
    filename: '[name].user.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
