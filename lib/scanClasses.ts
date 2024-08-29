import { Config } from "./types/Config";

export function scanClasses<TTheme>(
  source: string,
  config: Config<TTheme>
): string[] {
  const { plugins, ...configWithoutPlugins } = config;
  const result: string[] = [];
  for (const plugin of plugins) {
    for (const className of plugin.scanClasses(source, configWithoutPlugins)) {
      result.push(className);
    }
  }
  result.sort();

  const uniqueResult: string[] = [];
  for (let i = 0; i < result.length; i++) {
    if (i === 0 || result[i] !== result[i - 1]) {
      uniqueResult.push(result[i]);
    }
  }

  return uniqueResult;
}
