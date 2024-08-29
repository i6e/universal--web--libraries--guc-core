import { ConfigWithoutTypePlugins } from "./Config";
import { CSSContent } from "./CSSContent";

export interface VariantPlugin<TTheme> {
  prefixes: string[] | undefined;
  isValidVariant: (
    variant: string,
    config: ConfigWithoutTypePlugins<TTheme>
  ) => boolean;

  process(
    content: CSSContent,
    variant: string,
    config: ConfigWithoutTypePlugins<TTheme>
  ): CSSContent[];
}
