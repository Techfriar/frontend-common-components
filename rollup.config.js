import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json");

export default [
  // CommonJS and ES module output
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main, // CommonJS
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module, // ES module
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ 
        tsconfig: "./tsconfig.json",
        declaration: true,
        declarationDir: "dist"
      }),
      terser(),
      postcss(),
    ],
    external: ["react", "react-dom"],
  },
  // TypeScript declaration files
  {
    input: "src/index.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts.default()],
    external: [/\.css/],
  },
];
