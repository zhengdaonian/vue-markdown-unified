import { toJsxRuntime } from 'hast-util-to-jsx-runtime'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { Fragment } from 'vue'
import type { VNode } from 'vue'
import { jsx } from 'vue/jsx-runtime'
import type { VueMarkdownOptions } from './types'

const emptyRemarkRehypeOptions = { allowDangerousHtml: true }

export function Markdown(content: string, options: VueMarkdownOptions = {}): VNode {
    const remarkRehypeOptions = options.remarkRehypeOptions
        ? { ...options.remarkRehypeOptions, ...emptyRemarkRehypeOptions }
        : emptyRemarkRehypeOptions

    const processor = unified()
        .use(remarkParse)
        .use(options.remarkPlugins || [])
        .use(remarkRehype, remarkRehypeOptions)
        .use(options.rehypePlugins || [])

    const hast = processor.runSync(processor.parse(content))

    const vnode = toJsxRuntime(hast, {
      Fragment,
      components: options.components,
      jsx,
      jsxs: jsx,
      elementAttributeNameCase: 'html',
      ignoreInvalidStyle: true,
      passKeys: true,
      passNode: true
    })

    return vnode
}
