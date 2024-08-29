import { Config } from "./types/Config";
import { CSSContent } from "./types/CSSContent";

export function cssContent<TTheme>(
  className: string,
  config: Config<TTheme>
): CSSContent[] {
  const { plugins, ...configWithoutPlugins } = config;
  let result: CSSContent[] | undefined;
  for (const plugin of plugins) {
    let contents = plugin.cssContent(className, configWithoutPlugins);
    if (contents) {
      if (result) {
        throw new Error(
          `Error: there are two or more plugins to process class: ${className}`
        );
      } else {
        result = contents;
      }
    }
  }
  if (!result) {
    throw new Error(
      `Error: failed to find appropriate plugin to process class: ${className}`
    );
  }
  return result;
}
