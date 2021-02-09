import babel from "@rollup/plugin-babel";
import rollupTypescript from "rollup-plugin-typescript2";

export default {
  input: "src/index.ts",
  output: {
    file: "lib/index.umd.js",
    format: "umd",
    name: "@lee/utils", // 打包后的内容会挂载到window，name就是挂载到window的名称
    sourcemap: true, // 代码调试  开发环境填true
  },
  plugins: [
    rollupTypescript({
      tsconfig: "tsconfig.json",
    }),
    babel({
      extensions: [".js", ".ts"],
      exclude: "node_modules/**", // 只转译我们的源代码
      babelHelpers: "bundled",
    }),
  ],
  // 指出应将哪些模块视为外部模块
  external: ["lodash"],
};
