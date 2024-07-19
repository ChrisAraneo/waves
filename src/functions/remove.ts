export async function remove(input: {
  html: string;
  css: string;
  patterns: string[];
}): Promise<{ html: string; css: string }> {
  let result = { html: input.html, css: input.css };

  input.patterns.forEach((pattern: string) => {
    result = {
      html: removeLinesMatchingPattern(result.html, pattern),
      css: removeLinesMatchingPattern(result.css, pattern),
    };
  });

  return result;
}

function removeLinesMatchingPattern(input: string, lineToRemove: string): string {
  return input
    .split('\n')
    .map((line) => {
      return line.includes(lineToRemove) ? null : line;
    })
    .filter((item) => item !== null)
    .join('\n');
}
