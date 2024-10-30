// src/utils.ts
function decodeHTMLEntities(string) {
  let decoded = string.replace(/&quot;/g, '"');
  decoded = decoded.replace(/&amp;/g, "&");
  decoded = decoded.replaceAll("&nbsp;", " ");
  decoded = decoded.replaceAll("&#39;", "'");
  return decoded;
}

export { decodeHTMLEntities };
