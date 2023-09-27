import { resolve } from "node:path";
import { existsSync, readFileSync, PathLike } from "node:fs";

export function checkFile(path: PathLike) {
  const check = existsSync(path);
  return check;
}

export function parse(file: string = ".env"): { [key: string]: string } {
  const filePath = resolve(process.cwd(), ".env");

  if (!checkFile(filePath)) {
    console.log(".env file doesn't exist.");
    return {};
  }
  const env: string = readFileSync(filePath, { encoding: "utf-8" });

  const parsed: { [key: string]: string } = {};

  env.split("\n").forEach((variable) => {
    const [key, value] = variable.split("=");
    parsed[key.toUpperCase()] = value;
  });

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
