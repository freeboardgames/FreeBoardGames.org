import fs from "fs";
import path from "path";

export async function loadI18nConfig(): Promise<string> {
  const filepath = path.join(process.env.ROOT!, `./public/locales/config.yaml`);
  return fs.promises.readFile(filepath, "utf8");
}
