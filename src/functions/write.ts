import fs from 'fs';

export async function write(input: { content: string; path: string }): Promise<void> {
  return new Promise((resolve, reject) => {
    fs.writeFile(input.path, input.content, (error) => {
      if (error) {
        reject(error);
      }

      resolve();
    });
  });
}
