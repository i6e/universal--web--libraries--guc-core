import { ConfigWithoutPlugins } from "./Config";
import { CSSContent } from "./CSSContent";

export interface GUCPlugin<TTheme> {
  scanClasses: (
    source: string,
    config: ConfigWithoutPlugins<TTheme>
  ) => string[];
  cssContent: (
    className: string,
    config: ConfigWithoutPlugins<TTheme>
  ) => CSSContent[] | undefined;
}
