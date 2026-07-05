export function extractFirstSection(content: string): string {
  const SECTION_SEPARATOR: string = "---"
  const firstSection: string = content.split(SECTION_SEPARATOR)[0]!

  return firstSection
}