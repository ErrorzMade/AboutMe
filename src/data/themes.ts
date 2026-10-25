/**
 * Per-post themes.
 *
 * A theme is a block of token overrides in src/styles/themes.css keyed by
 * [data-theme="<name>"]. This file is the registry: it tells the build which
 * names are valid, what browser chrome colour to use, and whether the theme
 * still needs the default Google fonts.
 *
 * To add one: a block in themes.css, an entry here. Nothing else.
 */
export interface Theme {
  /** Shown nowhere yet; keeps the registry readable. */
  label: string;
  /** <meta name="theme-color"> for this theme. */
  themeColor: string;
  /** False when the theme uses system fonts, so the font request is skipped. */
  webfonts: boolean;
}

export const themes = {
  phasoverlay: {
    label: 'PhasOverlay',
    themeColor: '#111112',
    webfonts: false,
  },
} as const satisfies Record<string, Theme>;

export type ThemeName = keyof typeof themes;

export const themeNames = Object.keys(themes) as [ThemeName, ...ThemeName[]];

/** Browser chrome colour for the untouched site. */
export const defaultThemeColor = '#16111C';
