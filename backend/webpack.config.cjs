import path from "path";

export default {
  entry: "./server.js", // Ange ingångspunkten för din backend-kod
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  target: "node", // Viktigt att specificera att målet är Node.js
  mode: "production", // Eller 'development', beroende på din miljö
};
