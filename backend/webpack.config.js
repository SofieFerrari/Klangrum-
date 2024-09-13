// backend/webpack.config.cjs
const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./server.js", // Justera ingångspunkten om det behövs
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  target: "node", // Viktigt att specificera Node.js
  mode: "production", // Eller 'development'
  externals: [nodeExternals()], // Exkludera Node.js-moduler från bundling
};
