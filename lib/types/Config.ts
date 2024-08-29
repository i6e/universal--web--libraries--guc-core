import { GUCPlugin } from "./GUCPlugin";

export interface Config<TTheme> extends ConfigWithoutPlugins<TTheme> {
  plugins: readonly GUCPlugin<TTheme>[];
}

export interface ConfigWithoutPlugins<TTheme> {
  prefix: string;
  theme: TTheme;
  allowArbitraryValue: boolean;
  darkModeStrategy: DarkModeStrategy;
}

export type DarkModeStrategy = DarkModeStrategyClass | DarkModeStrategyMedia;

export interface DarkModeStrategyClass {
  type: "class";
  on: "html" | "body" | "any";
  fallbackDarkMode: boolean;
}

export interface DarkModeStrategyMedia {
  type: "media";
  fallbackDarkMode: boolean;
}
