import path from "path";
import ts from "rollup-plugin-typescript2";
import dts from "rollup-plugin-dts";

const __dirname = path.resolve();

export default [
  {
    input: "./src/index.ts", // 入口文件
    // 输出三个类型：es、cjs和umd
    output: [
      {
        file: path.resolve(__dirname, "./dist/index.esm.js"),
        format: "es",
      },
      {
        file: path.resolve(__dirname, "./dist/index.cjs.js"),
        format: "cjs",
      },
      {
        file: path.resolve(__dirname, "./dist/index.js"),
        format: "umd",
        name: "VueMarkdownUnified",
      },
    ],
    plugins: [ts()],
  },
  {
    input: "./src/index.ts",
    output: {
      file: path.resolve(__dirname, "./dist/index.d.ts"),
      format: "es",
    },
    plugins: [dts()],
  },
];
