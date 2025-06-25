import { VueMarkdownOptions } from "types"
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'
import remarkMath from 'remark-math'
import { computed } from "vue"
import { Pluggable } from "unified"

export function markdownRemarkPlugins(options: VueMarkdownOptions) {
    const { remarkPlugins, isBreaks, enableLatex } = options
    const plugins = computed(() => [
      [remarkGfm, { singleTilde: false }],
      isBreaks && remarkBreaks,
      enableLatex && remarkMath,
    ].filter(Boolean) as Pluggable[])
  
    return computed(() => [
      ...plugins.value,
      ...remarkPlugins || []
    ])
  }
  