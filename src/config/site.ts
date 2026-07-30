/**
 * Site-wide configuration.
 *
 * Every user-visible fact about the site (name, URL, contact address, form
 * endpoints, locales) is read from this one object, so pages and components
 * never hard-code them.
 */
export const site = {
  /** Displayed everywhere. Change this and the whole site follows. */
  name: "Present",

  /** Canonical origin, used to build absolute URLs. */
  url: "https://present-the-app.com",

  /** When true, asks search engines not to index the site. */
  noindex: false,

  /**
   * Routes that stay out of the index whatever `noindex` above is set to, and
   * so must also stay out of the sitemap. You only reach these by submitting a
   * form, and they have nothing to offer a searcher.
   *
   * Pages listed here must also pass `noindex` to the Base layout; this list is
   * what keeps the sitemap in step with that.
   */
  noindexPaths: ["/thanks/"] as readonly string[],

  /**
   * URL of the web app. `null` when there is none, which makes the waitlist the
   * primary call to action everywhere. Set a URL and the CTAs become
   * "Open <name>" instead.
   */
  appUrl: null as string | null,

  /**
   * Waitlist form endpoint. Blank means the form still renders and validates,
   * it just has nowhere to post.
   *
   * The post-submit redirect is configured on the provider side rather than per
   * form, so every language shares the one success page at /thanks/.
   */
  waitlistEndpoint:
    "https://buttondown.com/api/emails/embed-subscribe/present" as string,

  /** Selects the seasonal hero variant. */
  occasion: "default" as "default" | "christmas" | "valentines",

  /**
   * Reachable address, also the fallback when the contact form has no endpoint.
   * A visible mailto attracts some scraping; that is the trade for not making a
   * working contact route depend on a third party.
   */
  contactEmail: "contact@present-the-app.com",

  /**
   * Endpoint for the contact form, e.g. https://formspree.io/f/xxxxxxxx. Blank
   * means the page shows the mailto instead of a form that goes nowhere.
   */
  contactEndpoint: "https://formspree.io/f/maqrznnj" as string,

  /**
   * Analytics endpoint, deliberately empty. Nothing is loaded and no third
   * party is contacted while this is blank; filling it in is the only change
   * needed to start collecting.
   */
  analyticsSrc: "" as string,

  /**
   * Locales the site is built for, and the one served at the root.
   *
   * English and French only: those are the languages the app itself opens in.
   * A German tree existed briefly and was removed rather than collect signups
   * for a language the product will not launch in.
   */
  locales: ["en", "fr"] as const,
  defaultLocale: "en" as const,
} as const;

export type Locale = (typeof site.locales)[number];
