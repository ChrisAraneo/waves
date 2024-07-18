import fs from 'fs';

export async function write(input: { css: string; path: string }): Promise<void> {
  return new Promise((resolve, reject) => {
    fs.writeFile(input.path, input.css, (error) => {
      if (error) {
        reject(error);
      }

      resolve();
    });
  });
}
