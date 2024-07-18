// @ts-ignore
import { PurgeCSS } from 'purgecss';

export async function purge(input: {
  html: string;
  css: string;
}): Promise<{ html: string; css: string }> {
  const result = await new PurgeCSS().purge({
    content: [
      {
        extension: 'css',
        raw: input.html,
      },
    ],
    css: [
      {
        raw: input.css,
        name: '',
      },
    ],
  });

  return { html: input.html, css: result[0].css };
}
