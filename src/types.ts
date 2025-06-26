import { Components } from 'hast-util-to-jsx-runtime'
import type { Pluggable } from 'unified'

/**
 * Options for PrismJS code highlighting.
 */
export interface PrismOptions {
  /**
   * If true, ignore missing languages instead of throwing an error.
   * @default false
   */
  ignoreMissing?: Boolean
  /**
   * The default language to use if no language is specified in a code block.
   */
  defaultLanguage?: string
  /**
   * Whether to show line numbers for code blocks. Can be true, false, or an array of language names.
   * @default false
   */
  showLineNumbers?: Boolean | string[] | false
}

/**
 * Main options for configuring the vue-markdown-unified renderer.
 */
export interface VueMarkdownOptions {
  /**
   * Enable animated rendering for markdown content (e.g. typewriter effect).
   * @default false
   */
  animated?: Boolean
  /**
   * Enable HTML sanitization for output content.
   * @default false
   */
  enableSanitize?: Boolean
  /**
   * Enable soft line breaks as real line breaks (GFM style).
   * @default false
   */
  isBreaks?: Boolean
  /**
   * Enable LaTeX math rendering (using KaTeX).
   * @default false
   */
  enableLatex?: Boolean
  /**
   * Allow raw HTML in markdown content.
   * @default false
   */
  allowHtml?: Boolean
  /**
   * List of remark plugins to use (for markdown parsing).
   */
  remarkPlugins?: Pluggable[]

  /**
   * List of rehype plugins to use (for HTML/AST processing).
   */
  rehypePlugins?: Pluggable[]

  /**
   * Options for `remark-rehype` conversion.
   */
  remarkRehypeOptions?: Record<string, unknown>

  /**
   * Custom Vue components to use for rendering markdown elements.
   */
  components?: Components
  
  /**
   * Options for PrismJS code highlighting.
   */
  prismOptions?: PrismOptions
}

/**
 * Props for the Markdown component, including content and all options.
 */
export interface MarkdownProps extends VueMarkdownOptions {
  /**
   * Markdown content to render.
   */
  content: string
} 