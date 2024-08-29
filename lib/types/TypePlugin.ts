import { ConfigWithoutTypePlugins } from "./Config";
import { CSSContent } from "./CSSContent";

export interface TypePlugin<TTheme> {
  prefixes: string[] | undefined;
  isValidClass: (
    className: string,
    config: ConfigWithoutTypePlugins<TTheme>
  ) => boolean;
  cssContent: (
    className: string,
    config: ConfigWithoutTypePlugins<TTheme>
  ) => CSSContent[] | undefined;
}
