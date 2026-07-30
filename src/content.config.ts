import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
// Imported directly: astro:content's re-export of `z` is deprecated in Astro 7.
import { z } from "zod";

/**
 * Astro 5+ config location and API: `src/content.config.ts`, and collections
 * require a `loader`. The old `src/content/config.ts` with `type: 'content'`
 * no longer exists.
 *
 * Note also that Astro 7 renders markdown with its own native pipeline rather
 * than remark/rehype, and `@astrojs/markdown-remark` is not installed. Do not
 * add remark or rehype plugins here expecting them to apply: GFM, smartypants,
 * heading IDs and frontmatter are already built in.
 */
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    lang: z.enum(["en", "fr"]),
    /**
     * Links the three language versions of the same post. This is what
     * lets the language switcher and hreflang work when the slugs differ,
     * which they must: /writing/gift-ideas-switzerland/ has no business being
     * /fr/journal/gift-ideas-switzerland/.
     */
    translationKey: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
