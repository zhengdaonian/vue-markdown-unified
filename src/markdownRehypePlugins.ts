import { rehypeGithubAlerts } from 'rehype-github-alerts'
import rehypeRaw from 'rehype-raw'
import rehypeKatex from 'rehype-katex'
import { VueMarkdownOptions } from 'types'
import rehypePrism from "rehype-prism"
import rehypeSanitize from 'rehype-sanitize'
import { computed } from 'vue'
import { Pluggable } from 'unified'

export function markdownRehypePlugins(options: VueMarkdownOptions) {
    const { allowHtml, rehypePlugins, enableLatex, enableSanitize } = options

    const plugins = computed(() =>
        [
            [rehypePrism, { plugins: [] }],
            rehypeGithubAlerts,
            allowHtml && rehypeRaw,
            enableLatex && [rehypeKatex, { displayMode: true }],
            enableSanitize && rehypeSanitize
        ].filter(Boolean) as Pluggable[]
    )
    return computed(() => [
        ...plugins.value,
        ...rehypePlugins || []
    ])
}