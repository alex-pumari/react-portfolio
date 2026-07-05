const LEARNINGS_SECTION_KEYWORD = "Cosas que aprend"

export function extractLearningsSection(content: string): string | null {
  const sections = content.split(LEARNINGS_SECTION_KEYWORD)
  const hasSections = sections.length > 1
  const learningsSection = sections[1]!

  return hasSections ? learningsSection : null
}