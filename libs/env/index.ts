import { resolve } from "node:path";
import { existsSync, readFileSync, PathLike } from "node:fs";

export function checkFile(path: PathLike) {
  const check = existsSync(path);
  return check;
}

export function parse(file: string = ".env"): { [key: string]: string } {
  const filePath = resolve(__dirname, "..", "..", "..", file);
  if (!checkFile(filePath)) {
    console.log(".env file doesn't exist.");
    return {};
  }
  const env: string = readFileSync(filePath, { encoding: "utf-8" });

  const regex = /([^=\s]+)=(?:"([^"]*)"|'([^']*)'|([^'"\s]+))/g;
  const matches = env.matchAll(regex);
  const parsed: { [key: string]: string } = {};

  for (const match of matches) {
    const key = match[1];
    const value = match[2] || match[3] || match[4];
    parsed[key] = value;
  }
  return parsed;
}

export function config() {
  const envVariables = parse();
  const environment = process.env;
  for (let key in envVariables) {
    environment[key] = envVariables[key];
  }
  console.log(".env file is active in process.env");
}
