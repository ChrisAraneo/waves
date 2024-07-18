import fs from 'fs';

export async function read(input: { htmlPath: string; cssPath: string }): Promise<{
  html: string;
  css: string;
}> {
  return new Promise((resolve, reject) => {
    fs.readFile(input.htmlPath, 'utf8', (error: unknown, html: string) => {
      if (error) {
        reject(error);
      }

      fs.readFile(input.cssPath, 'utf8', (error: unknown, css: string) => {
        if (error) {
          reject(error);
        }

        resolve({
          html,
          css,
        });
      });
    });
  });
}
