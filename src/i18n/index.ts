import { en } from "./en";
import { fr } from "./fr";
import type { Strings } from "./en";
import type { Locale } from "../config/site";
import { site } from "../config/site";

export type { Strings, Locale };

export const strings: Record<Locale, Strings> = { en, fr };

export function t(locale: Locale): Strings {
  return strings[locale] ?? en;
}

/** Locales other than the given one, in the configured order. */
export function otherLocales(locale: Locale): Locale[] {
  return site.locales.filter((l) => l !== locale);
}

/**
 * The locale for a URL. `Astro.currentLocale` is derived from the path and is
 * undefined on any route that doesn't match a configured locale, so this reads
 * the pathname directly and always returns something.
 */
export function localeFromPath(pathname: string): Locale {
  if (/^\/fr(\/|$)/.test(pathname)) return "fr";
  return "en";
}

/**
 * Route slugs differ per language, so the language switcher cannot just swap a
 * path prefix: `/privacy/` is `/fr/confidentialite/`.
 * This map is the single source of truth for which pages are translations of
 * each other. Blog posts are not here; they pair via `translationKey` and pass
 * explicit paths to the layout instead.
 */
const ROUTES: ReadonlyArray<Record<Locale, string>> = [
  { en: "/", fr: "/fr/" },
  { en: "/privacy/", fr: "/fr/confidentialite/" },
  { en: "/contact/", fr: "/fr/contact/" },
  { en: "/writing/", fr: "/fr/journal/" },
  // One success page carrying every language: the form provider's
  // post-signup redirect is a single setting rather than a per-form field,
  // so signups in any language land in the same place.
  { en: "/thanks/", fr: "/thanks/" },
];

function normalise(pathname: string): string {
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

/**
 * The same page in another language. Falls back to that language's home page
 * rather than a dead link when no translation exists.
 */
export function alternatePath(pathname: string, to: Locale): string {
  const path = normalise(pathname);
  const from = localeFromPath(path);
  if (from === to) return path;

  const match = ROUTES.find((r) => r[from] === path);
  if (match) return match[to];

  return to === "en" ? "/" : `/${to}/`;
}

/** Prefix a path for a locale. Used for in-page links from shared components. */
export function localePath(locale: Locale, path: string): string {
  const clean = normalise(path.startsWith("/") ? path : `/${path}`);
  if (locale === "en") return clean;
  const match = ROUTES.find((r) => r.en === clean);
  return match ? match[locale] : normalise(`/${locale}${clean}`);
}

/*
 * Strings carrying {name} placeholders are filled in the quiz component's
 * browser script, which is the only place that needs them.
 */
