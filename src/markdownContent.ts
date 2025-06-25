import { VueMarkdownOptions } from "./types"
import { isLastFormulaRenderable, preprocessLaTeX } from "./latex"
import { ref } from "vue"
import { fixMarkdownBold } from "./utils"

export function markdownContent(content: string, options: VueMarkdownOptions): string | undefined {
  const { enableLatex, animated } = options
  const validContent = ref('')
  const prevProcessedContent = ref({
    current: ''
  })

  // Process LaTeX expressions
  if (enableLatex) {
    content = preprocessLaTeX(content)
  }

  let processedContent = fixMarkdownBold(content)

  // Special handling for LaTeX content when animated
  if (animated && enableLatex) {
    const isRenderable = isLastFormulaRenderable(processedContent);
    if (!isRenderable && validContent) {
      processedContent = validContent.value;
    }
  }

  // Only update state if content changed (prevents unnecessary re-renders)
  if (processedContent !== prevProcessedContent.value.current) {
    validContent.value = processedContent;
    prevProcessedContent.value.current = processedContent;
  }

  return processedContent
}