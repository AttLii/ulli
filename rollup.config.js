import babel from "rollup-plugin-babel"
import resolve from "@rollup/plugin-node-resolve"
import external from "rollup-plugin-peer-deps-external"

export default {
  input: "./Ulli.js",
  output: [
    {
      file: 'dist/Ulli.js',
      format: "cjs",
      strict: false
    },
    {
      file: 'dist/Ulli.es.js',
      format: "es",
      exports: 'named'
    }
  ],
  plugins: [
    babel({
      exclude: "node_modules/**",
      presets: [
        "@babel/preset-react"
      ]
    }),
    external(),
    resolve(),
  ]
}