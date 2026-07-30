import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

import { site } from "./src/config/site";

// https://astro.build/config
export default defineConfig({
  site: site.url,

  // No `base`. The site is served from the root of a custom domain, so a base
  // path would break every asset URL. `base` is only for username.github.io/repo.

  // GitHub Pages serves directory indexes, so links must carry the slash.
  trailingSlash: "always",

  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
    routing: {
      // English at /, French at /fr/.
      prefixDefaultLocale: false,
    },
  },

  integrations: [
    sitemap({
      // Nothing at all while the whole site is noindex, and otherwise every
      // page except the ones that carry their own noindex tag. Listing a page
      // in the sitemap while telling robots not to index it is a contradiction.
      filter: (page) =>
        !site.noindex &&
        !site.noindexPaths.some((p) => new URL(page).pathname === p),

      /**
       * No hreflang here on purpose. Each page's <head> already carries a
       * complete, correct set, and that is the single source of truth.
       *
       * Neither alternative works from this file: the integration's own `i18n`
       * option pairs pages by identical path, so it emits nothing for routes
       * whose slug is translated (/privacy/ vs /fr/confidentialite/), and
       * building them from the static route map gets blog posts wrong, since
       * those pair by the entry's `translationKey` rather than by path. A
       * partial or incorrect set here would contradict the <head>, which is
       * worse than omitting it.
       */
    }),
  ],

  vite: {
    // Tailwind v4 ships as a Vite plugin. NOT `integrations`: the old
    // @astrojs/tailwind adapter peers cap at Astro 5 / Tailwind 3.
    plugins: [tailwindcss()],
  },
});
