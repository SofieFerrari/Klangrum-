// backend/webpack.config.cjs
const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./server.js", // Ange ingångspunkten för din backend-kod
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  target: "node", // Viktigt att specificera att målet är Node.js
  mode: "production", // Eller 'development', beroende på din miljö
  externals: [nodeExternals()], // Exkludera Node.js-moduler från bundling
};
