export async function omit(input: {
  html: string;
  css: string;
  substringsToReplace: string[];
}): Promise<{ html: string; css: string }> {
  let result = { html: input.html, css: input.css };

  input.substringsToReplace.forEach((searchValue: string) => {
    result = {
      html: result.html.replaceAll(searchValue, '\n'),
      css: result.css.replaceAll(searchValue, '\n'),
    };
  });

  return result;
}
