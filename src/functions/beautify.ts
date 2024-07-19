import perfectionist from 'perfectionist';

export async function beautify(input: { html: string; css: string }) {
  return {
    html: input.html,
    css: (await perfectionist.process(input.css, { indentSize: 2 })).css,
  };
}
