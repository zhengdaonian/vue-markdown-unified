import { Props, toJsxRuntime } from 'hast-util-to-jsx-runtime'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { Fragment } from 'vue'
import type { VNode } from 'vue'
import { jsx, jsxs } from 'vue/jsx-runtime'
import type { VueMarkdownOptions } from './types'
import { markdownRehypePlugins } from './markdownRehypePlugins'
import { markdownRemarkPlugins } from './markdownRemarkPlugins'
import { markdownContent } from './markdownContent'

const emptyRemarkRehypeOptions = { allowDangerousHtml: true }

export function Markdown(content: string, options: VueMarkdownOptions = {}): VNode {
    const remarkRehypeOptions = options.remarkRehypeOptions
        ? { ...options.remarkRehypeOptions, ...emptyRemarkRehypeOptions }
        : emptyRemarkRehypeOptions

    const remarkPlugins = markdownRemarkPlugins(options)
    const rehypePlugins = markdownRehypePlugins(options)

    const processor = unified()
        .use(remarkParse)
        .use(remarkPlugins.value)
        .use(remarkRehype, remarkRehypeOptions)
        .use(rehypePlugins.value)

    const escapedContent = markdownContent(content || '', options)

    const hast = processor.runSync(processor.parse(escapedContent))

    const vnode = toJsxRuntime(hast, {
      Fragment,
      components: options.components,
      jsx,
      jsxs,
      elementAttributeNameCase: 'html',
      ignoreInvalidStyle: true,
      passKeys: true,
      passNode: true
    })

    return vnode
}
