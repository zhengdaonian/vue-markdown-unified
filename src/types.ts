import { Components } from 'hast-util-to-jsx-runtime'
import type { Pluggable } from 'unified'

export interface VueMarkdownOptions {
  animated?: Boolean
  enableSanitize?: Boolean
  isBreaks?: Boolean
  enableLatex?: Boolean
  allowHtml?: Boolean
  /**
   * List of remark plugins to use.
   */
  remarkPlugins?: Pluggable[]

  /**
   * List of rehype plugins to use.
   */
  rehypePlugins?: Pluggable[]

  /**
   * Options for `remark-rehype`.
   */
  remarkRehypeOptions?: Record<string, unknown>

  /**
   * Components to use for rendering.
   */
  components?: Components
}

export interface MarkdownProps extends VueMarkdownOptions {
  /**
   * Markdown content to render.
   */
  content: string
} 