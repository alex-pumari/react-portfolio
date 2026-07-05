export const decode = {
  /**
   * Decodes a base64 string and returns the decoded string.
   * @param {string} content The base64 string to decode.
   * @returns {string} The decoded string.
  */
  base64(content: string): string {
    return atob(content)
  },

  /**
   * Decodes a string of bytes into UTF-8 text.
   * @param {string} content The string of bytes to decode.
   * @returns {string} The decoded UTF-8 text.
  */
  utf8(content: string): string {
    const bytes = Uint8Array.from(content, character => 
      character.charCodeAt(0) as number
    )
    return new TextDecoder("utf-8").decode(bytes)
  },


  /**
   * Decodes a URL-encoded string (%XX) into regular text.
   * @param {string} content The URL-encoded string.
   * @returns {string} The decoded text.
  */
  url(content: string): string {
    try {
      return decodeURIComponent(content)
    } catch {
      return content
    }
  }
}