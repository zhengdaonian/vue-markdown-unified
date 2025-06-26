import path from "path";
import ts from "rollup-plugin-typescript2";
import dts from "rollup-plugin-dts";
import copy from "rollup-plugin-copy";

const __dirname = path.resolve();

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: path.resolve(__dirname, "./dist/index.esm.js"),
        format: "es",
      },
    ],
    plugins: [
      ts(),
      copy({
        targets: [
          {
            src: 'node_modules/.pnpm/prismjs@*/node_modules/prismjs/themes/*.min.css',
            dest: "dist/themes",
          },
        ]
      }),
    ],
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
