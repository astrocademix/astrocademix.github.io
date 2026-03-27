import { marked } from 'marked';

// Configure marked for safe HTML rendering
marked.setOptions({
  breaks: true, // Convert \n to <br>
  gfm: true, // GitHub Flavored Markdown
  headerIds: false,
  mangle: false,
});

// Custom renderer to add target="_blank" to links
const renderer = new marked.Renderer();
const originalLink = renderer.link.bind(renderer);

renderer.link = function(token) {
  const html = originalLink(token);
  // Add target="_blank" and rel="noopener noreferrer" to all links
  return html.replace('<a href=', '<a target="_blank" rel="noopener noreferrer" href=');
};

marked.setOptions({ renderer });

/**
 * Parse markdown text to HTML
 * @param {string} markdown - The markdown text to parse
 * @returns {string} - HTML string
 */
export const parseMarkdown = (markdown) => {
  if (!markdown || typeof markdown !== 'string') {
    return '';
  }
  
  try {
    return marked.parse(markdown);
  } catch (error) {
    console.error('Error parsing markdown:', error);
    return markdown; // Return original text if parsing fails
  }
};
