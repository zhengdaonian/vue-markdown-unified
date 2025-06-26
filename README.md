# vue-markdown-unified

vue-markdown-unified

Vue3 VNode to render markdown.

## 功能量带你

- [x] **默认安全（无攻击或 XSS 攻击）**
      (no `dangerouslySetInnerHTML` or XSS attacks)
- [x] **组件**
      组件（传递您自己的组件以使用，而不是 `<h2>` for `## hi`)
- [x] **插件**
      (内置插件，并且可以设置插件，您可以 unified 生态中选择许多插件)
- [x] **兼容**
      (100% 符合 CommonMark，100% 符合 GFM，带插件)

## 安装

```bash
pnpm add vue-markdown-unified
# 或
npm install vue-markdown-unified
```

## 基本用法

```ts
import { Markdown } from "vue-markdown-unified";

const vnode = Markdown("# Hello World", {
  enableLatex: true,
});
```

## 可用参数与类型

### MarkdownProps

| 参数名              | 类型                      | 说明                                               |
| ------------------- | ------------------------- | -------------------------------------------------- |
| content             | `string`                  | 要渲染的 Markdown 内容                             |
| animated            | `boolean`                 | 是否启用打字机等动画效果，默认 `false`             |
| enableSanitize      | `boolean`                 | 是否对输出内容进行 HTML 安全过滤，默认 `false`     |
| isBreaks            | `boolean`                 | 是否将软换行视为真实换行（GFM 风格），默认 `false` |
| enableLatex         | `boolean`                 | 是否启用 KaTeX 数学公式渲染，默认 `false`          |
| allowHtml           | `boolean`                 | 是否允许 Markdown 中的原始 HTML，默认 `false`      |
| remarkPlugins       | `Pluggable[]`             | 额外的 remark 插件（Markdown 解析阶段）            |
| rehypePlugins       | `Pluggable[]`             | 额外的 rehype 插件（HTML/AST 处理阶段）            |
| remarkRehypeOptions | `Record<string, unknown>` | remark-rehype 转换的额外参数                       |
| components          | `Components`              | 自定义渲染组件映射                                 |
| prismOptions        | `PrismOptions`            | PrismJS 代码高亮相关配置                           |

### PrismOptions

| 参数名          | 类型                  | 说明                                                   |
| --------------- | --------------------- | ------------------------------------------------------ |
| ignoreMissing   | `boolean`             | 忽略未注册的语言，默认 `false`                         |
| defaultLanguage | `string`              | 未指定语言时的默认高亮语言                             |
| showLineNumbers | `boolean \| string[]` | 是否显示代码行号，或指定哪些语言显示行号，默认 `false` |

### 相关类型

- `Pluggable`、`Components` 类型分别来自 [unified](https://unifiedjs.com/) 和 [hast-util-to-jsx-runtime](https://github.com/syntax-tree/hast-util-to-jsx-runtime)。

## 代码高亮主题

你可以在入口文件中手动引入主题样式：

```js
import "vue-markdown-unified/dist/themes/prism-coy.css";
```

如需更详细的类型定义，请参考源码中的 `src/types.ts` 文件，或在编辑器中获得类型提示。
