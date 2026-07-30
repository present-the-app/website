/**
 * The demo quiz's entire brain: a hand-written lookup table.
 *
 * There is no model here and no server call. That is the honest framing used
 * on the page itself ("that was a lookup table"), and it is also why the demo
 * costs nothing to run and cannot be rate limited or abused.
 *
 * Two design rules this data must not break:
 *  - Prices are always approximate ("about CHF 90"), never bare. An exact
 *    number would promise a precision nothing here has checked.
 *  - No product photography and no specific brand or model. There is no
 *    product catalogue; ideas link to a retailer SEARCH, so anything more
 *    specific than a category would be fiction.
 *
 * Every one of the four questions changes the outcome:
 *   interest -> which pool
 *   budget   -> which band within it
 *   risk     -> ranking, via `traits`
 *   who      -> exclusion, via `notFor`
 */

import type { Locale } from "../config/site";

export type Interest =
  | "outdoors"
  | "kitchen"
  | "making"
  | "screens"
  | "calm"
  | "going-out";

export type Band = "low" | "mid" | "high";
export type Who = "partner" | "family" | "friend" | "colleague";

/** Answers the "what would land worst?" question. */
export type Trait =
  | "consumable" /* gets used up, so it cannot become clutter */
  | "distinctive" /* unlikely they already own this exact thing */
  | "personal"; /* reads as chosen for them, not picked off a shelf */

export type Shop = "galaxus" | "digitec" | "manor" | "zalando";

export interface Idea {
  id: string;
  interest: Interest;
  band: Band;
  traits: Trait[];
  /** Relationships this would be inappropriate or too intimate for. */
  notFor?: Who[];
  /** Search term used to build the retailer link. Not a brand or model. */
  query: Record<Locale, string>;
  name: Record<Locale, string>;
  why: Record<Locale, string>;
  price: Record<Locale, string>;
  shops: Shop[];
}

export const SHOP_LABEL: Record<Shop, string> = {
  galaxus: "Galaxus",
  digitec: "Digitec",
  manor: "Manor",
  zalando: "Zalando",
};

/**
 * Real search URLs at Swiss retailers, in the reader's language.
 *
 * All four operate Swiss storefronts in de/fr/en, so the locale maps straight
 * through. Zalando's Swiss catalogue search takes no language segment.
 */
export function shopUrl(shop: Shop, query: string, locale: Locale): string {
  const q = encodeURIComponent(query);
  switch (shop) {
    case "galaxus":
      return `https://www.galaxus.ch/${locale}/search?q=${q}`;
    case "digitec":
      return `https://www.digitec.ch/${locale}/search?q=${q}`;
    case "manor":
      // Manor runs no /en/ storefront; that path 404s. English readers get the
      // German one, which is the only sensible fallback.
      return `https://www.manor.ch/${locale === "en" ? "de" : locale}/search?q=${q}`;
    case "zalando":
      return `https://www.zalando.ch/katalog/?q=${q}`;
  }
}

export const IDEAS: Idea[] = [
  // ─── outdoors ────────────────────────────────────────────────────────────
  {
    id: "merino-socks",
    interest: "outdoors",
    band: "low",
    traits: ["consumable", "personal"],
    query: { en: "merino hiking socks", fr: "chaussettes randonnée mérinos" },
    name: { en: "Proper merino socks", fr: "De vraies chaussettes en mérinos" },
    why: {
      en: "Everyone who walks a lot owns bad socks and never gets round to replacing them.",
      fr: "Tous ceux qui marchent beaucoup ont de mauvaises chaussettes et ne les remplacent jamais." },
    price: { en: "about CHF 30", fr: "environ CHF 30" },
    shops: ["galaxus", "manor"],
  },
  {
    id: "headtorch",
    interest: "outdoors",
    band: "low",
    traits: ["distinctive"],
    query: { en: "rechargeable head torch", fr: "lampe frontale rechargeable" },
    name: { en: "A head torch that actually works", fr: "Une lampe frontale qui marche vraiment" },
    why: {
      en: "The one they own is from a petrol station and eats batteries.",
      fr: "Celle qu'elle a vient d'une station-service et bouffe les piles." },
    price: { en: "about CHF 45", fr: "environ CHF 45" },
    shops: ["galaxus", "digitec"],
  },
  {
    id: "vacuum-flask",
    interest: "outdoors",
    band: "mid",
    traits: ["distinctive"],
    query: { en: "insulated vacuum flask", fr: "thermos isotherme" },
    name: { en: "A flask that keeps things hot all day", fr: "Un thermos qui tient toute la journée" },
    why: {
      en: "Cheap ones are lukewarm by eleven. The good ones are a genuinely different object.",
      fr: "Les modèles bon marché sont tièdes à onze heures. Les bons jouent dans une autre catégorie." },
    price: { en: "about CHF 60", fr: "environ CHF 60" },
    shops: ["galaxus", "manor"],
  },
  {
    id: "walking-poles",
    interest: "outdoors",
    band: "mid",
    traits: ["distinctive", "personal"],
    query: { en: "trekking poles", fr: "bâtons de randonnée" },
    name: { en: "Folding walking poles", fr: "Bâtons de marche pliables" },
    why: {
      en: "The thing people resist buying for themselves and then use every single walk.",
      fr: "Le truc qu'on refuse de s'acheter et qu'on utilise ensuite à chaque sortie." },
    price: { en: "about CHF 90", fr: "environ CHF 90" },
    shops: ["galaxus"],
  },
  {
    id: "day-pack",
    interest: "outdoors",
    band: "high",
    traits: ["distinctive", "personal"],
    query: { en: "hiking backpack 30l", fr: "sac à dos randonnée 30l" },
    name: { en: "A rucksack that fits them", fr: "Un sac à dos vraiment à sa taille" },
    why: {
      en: "They have been making a school bag do the job of a hiking pack for years.",
      fr: "Ça fait des années qu'elle fait passer un sac d'école pour un sac de rando." },
    price: { en: "about CHF 180", fr: "environ CHF 180" },
    shops: ["galaxus", "manor"],
  },
  {
    id: "walking-boots",
    interest: "outdoors",
    band: "high",
    traits: ["personal"],
    notFor: ["colleague"],
    query: { en: "hiking boots", fr: "chaussures de randonnée" },
    name: { en: "Boots worth the walk", fr: "Des chaussures qui tiennent la distance" },
    why: {
      en: "Worth asking their size first. This is the one gift where guessing goes badly.",
      fr: "Demande sa pointure d'abord. C'est le seul cadeau où deviner finit mal." },
    price: { en: "about CHF 220", fr: "environ CHF 220" },
    shops: ["zalando", "galaxus"],
  },

  // ─── kitchen ─────────────────────────────────────────────────────────────
  {
    id: "olive-oil",
    interest: "kitchen",
    band: "low",
    traits: ["consumable", "personal"],
    query: { en: "olive oil gift set", fr: "coffret huile d'olive" },
    name: { en: "Oil and salt worth the shelf", fr: "Une huile et un sel qui méritent leur place sur l'étagère" },
    why: {
      en: "Nobody buys themselves the good oil. It gets used, then it's gone, which is the point.",
      fr: "Personne ne s'achète la bonne huile. Elle se consomme, puis disparaît, et c'est bien l'idée." },
    price: { en: "about CHF 35", fr: "environ CHF 35" },
    shops: ["manor", "galaxus"],
  },
  {
    id: "pepper-mill",
    interest: "kitchen",
    band: "low",
    traits: ["distinctive"],
    query: { en: "pepper mill", fr: "moulin à poivre" },
    name: { en: "A pepper mill that grinds", fr: "Un moulin à poivre qui moud vraiment" },
    why: {
      en: "The one they have jams and produces dust. This is a small, daily improvement.",
      fr: "Le sien coince et ne sort que de la poussière. C'est une petite amélioration quotidienne." },
    price: { en: "about CHF 45", fr: "environ CHF 45" },
    shops: ["manor", "galaxus"],
  },
  {
    id: "chef-knife",
    interest: "kitchen",
    band: "mid",
    traits: ["distinctive", "personal"],
    query: { en: "chef knife", fr: "couteau de chef" },
    name: { en: "A very good chef's knife", fr: "Un très bon couteau de chef" },
    why: {
      en: "They cook most nights and keep complaining about their knives.",
      fr: "Elle cuisine presque tous les soirs et râle sur ses couteaux." },
    price: { en: "about CHF 90", fr: "environ CHF 90" },
    shops: ["galaxus", "manor"],
  },
  {
    id: "cast-iron",
    interest: "kitchen",
    band: "mid",
    traits: ["distinctive"],
    query: { en: "cast iron skillet", fr: "poêle en fonte" },
    name: { en: "A cast iron pan", fr: "Une poêle en fonte" },
    why: {
      en: "Outlives everyone involved, and gets better the more it's used.",
      fr: "Elle survivra à tout le monde, et s'améliore à chaque utilisation." },
    price: { en: "about CHF 95", fr: "environ CHF 95" },
    shops: ["manor", "galaxus"],
  },
  {
    id: "espresso-grinder",
    interest: "kitchen",
    band: "high",
    traits: ["distinctive", "personal"],
    query: { en: "burr coffee grinder", fr: "moulin à café à meules" },
    name: { en: "The espresso grinder", fr: "Le moulin à espresso" },
    why: {
      en: "If they already care about coffee, the grinder is the part still holding them back.",
      fr: "Si le café compte déjà pour elle, c'est le moulin qui la freine encore." },
    price: { en: "about CHF 190", fr: "environ CHF 190" },
    shops: ["galaxus", "digitec"],
  },
  {
    id: "dutch-oven",
    interest: "kitchen",
    band: "high",
    traits: ["distinctive"],
    query: { en: "cast iron casserole dish", fr: "cocotte en fonte" },
    name: { en: "A heavy casserole dish", fr: "Une cocotte bien lourde" },
    why: {
      en: "The pot that makes winter cooking worth doing. They will not buy it themselves.",
      fr: "La cocotte qui rend la cuisine d'hiver intéressante. Elle ne se l'achètera pas." },
    price: { en: "about CHF 250", fr: "environ CHF 250" },
    shops: ["manor", "galaxus"],
  },

  // ─── making ──────────────────────────────────────────────────────────────
  {
    id: "sketchbook",
    interest: "making",
    band: "low",
    traits: ["consumable", "personal"],
    query: { en: "sketchbook and pencils", fr: "carnet de croquis et crayons" },
    name: { en: "A good sketchbook and pencils", fr: "Un bon carnet de croquis et des crayons" },
    why: {
      en: "Cheap paper is why people stop drawing. Good paper is why they start again.",
      fr: "Le mauvais papier fait arrêter de dessiner. Le bon papier fait recommencer." },
    price: { en: "about CHF 40", fr: "environ CHF 40" },
    shops: ["manor", "galaxus"],
  },
  {
    id: "screwdriver-set",
    interest: "making",
    band: "low",
    traits: ["distinctive"],
    query: { en: "precision screwdriver set", fr: "kit tournevis de précision" },
    name: { en: "A precision screwdriver set", fr: "Un kit de tournevis de précision" },
    why: {
      en: "Opens every gadget in the flat. Quietly one of the most used things anyone owns.",
      fr: "Ça ouvre tous les appareils de l'appart. Discrètement l'un des objets les plus utilisés." },
    price: { en: "about CHF 45", fr: "environ CHF 45" },
    shops: ["digitec", "galaxus"],
  },
  {
    id: "soldering",
    interest: "making",
    band: "mid",
    traits: ["distinctive"],
    query: { en: "soldering station", fr: "station de soudage" },
    name: { en: "A soldering station", fr: "Une station de soudage" },
    why: {
      en: "The step up from the cheap iron that never quite gets hot enough.",
      fr: "Le cran au-dessus du fer bon marché qui ne chauffe jamais assez." },
    price: { en: "about CHF 90", fr: "environ CHF 90" },
    shops: ["digitec", "galaxus"],
  },
  {
    id: "chisels",
    interest: "making",
    band: "mid",
    traits: ["distinctive", "personal"],
    query: { en: "wood chisel set", fr: "jeu de ciseaux à bois" },
    name: { en: "A set of sharp chisels", fr: "Un jeu de ciseaux à bois bien affûtés" },
    why: {
      en: "Blunt tools are why the last project got abandoned half finished.",
      fr: "Les outils émoussés expliquent le dernier projet abandonné à moitié fini." },
    price: { en: "about CHF 110", fr: "environ CHF 110" },
    shops: ["galaxus"],
  },
  {
    id: "cordless-drill",
    interest: "making",
    band: "high",
    traits: ["distinctive"],
    query: { en: "cordless drill driver", fr: "perceuse visseuse sans fil" },
    name: { en: "A cordless drill worth keeping", fr: "Une perceuse sans fil qui dure" },
    why: {
      en: "Check first that nobody else has already given them one. This is the classic duplicate.",
      fr: "Vérifie d'abord que personne ne lui en a déjà offert une. C'est le doublon classique." },
    price: { en: "about CHF 190", fr: "environ CHF 190" },
    shops: ["galaxus", "digitec"],
  },
  {
    id: "sewing-machine",
    interest: "making",
    band: "high",
    traits: ["distinctive", "personal"],
    notFor: ["colleague"],
    query: { en: "sewing machine", fr: "machine à coudre" },
    name: { en: "A sewing machine", fr: "Une machine à coudre" },
    why: {
      en: "A big gift, and only right if they have said out loud that they want to make clothes.",
      fr: "Un gros cadeau, et une bonne idée seulement si la personne a dit tout haut qu'elle voulait coudre." },
    price: { en: "about CHF 300", fr: "environ CHF 300" },
    shops: ["galaxus", "manor"],
  },

  // ─── screens ─────────────────────────────────────────────────────────────
  {
    id: "keycaps",
    interest: "screens",
    band: "low",
    traits: ["personal", "distinctive"],
    query: { en: "keyboard keycap set", fr: "set de touches clavier" },
    name: { en: "Keycaps in their colours", fr: "Des touches à ses couleurs" },
    why: {
      en: "Small, cheap, and very obviously chosen by someone who paid attention.",
      fr: "Petit, pas cher, et visiblement choisi par quelqu'un qui a fait attention." },
    price: { en: "about CHF 45", fr: "environ CHF 45" },
    shops: ["digitec", "galaxus"],
  },
  {
    id: "controller-charger",
    interest: "screens",
    band: "low",
    traits: ["distinctive"],
    query: { en: "controller charging dock", fr: "station de charge manette" },
    name: { en: "A charging dock for the controllers", fr: "Une station de charge pour les manettes" },
    why: {
      en: "Solves the flat battery that interrupts every single evening.",
      fr: "Règle le problème de manette déchargée qui interrompt toutes les soirées." },
    price: { en: "about CHF 40", fr: "environ CHF 40" },
    shops: ["digitec", "galaxus"],
  },
  {
    id: "second-controller",
    interest: "screens",
    band: "mid",
    traits: ["personal"],
    query: { en: "wireless game controller", fr: "manette de jeu sans fil" },
    name: { en: "A second controller", fr: "Une deuxième manette" },
    why: {
      en: "A gift for them that is quietly also an invitation to play with you.",
      fr: "Un cadeau pour elle qui est aussi, discrètement, une invitation à jouer avec toi." },
    price: { en: "about CHF 70", fr: "environ CHF 70" },
    shops: ["digitec", "galaxus"],
  },
  {
    id: "headset",
    interest: "screens",
    band: "mid",
    traits: ["distinctive"],
    query: { en: "gaming headset", fr: "casque gaming" },
    name: { en: "A headset that doesn't hurt", fr: "Un casque qui ne fait pas mal" },
    why: {
      en: "Four hours in, the cheap ones start pressing. The good ones disappear.",
      fr: "Au bout de quatre heures, les modèles bon marché appuient. Les bons se font oublier." },
    price: { en: "about CHF 110", fr: "environ CHF 110" },
    shops: ["digitec", "galaxus"],
  },
  {
    id: "mech-keyboard",
    interest: "screens",
    band: "high",
    traits: ["distinctive", "personal"],
    query: { en: "mechanical keyboard", fr: "clavier mécanique" },
    name: { en: "A mechanical keyboard", fr: "Un clavier mécanique" },
    why: {
      en: "If they type all day, this is the object they touch more than any other.",
      fr: "Si elle tape toute la journée, c'est l'objet qu'elle touche le plus." },
    price: { en: "about CHF 160", fr: "environ CHF 160" },
    shops: ["digitec", "galaxus"],
  },
  {
    id: "monitor-arm",
    interest: "screens",
    band: "high",
    traits: ["distinctive"],
    query: { en: "monitor arm", fr: "bras support écran" },
    name: { en: "A monitor arm", fr: "Un bras pour l'écran" },
    why: {
      en: "Unglamorous, and it helps with the neck ache they mention every few weeks.",
      fr: "Pas glamour, et ça soulage la nuque dont elle parle toutes les deux semaines." },
    price: { en: "about CHF 150", fr: "environ CHF 150" },
    shops: ["digitec", "galaxus"],
  },

  // ─── calm ────────────────────────────────────────────────────────────────
  {
    id: "tea-set",
    interest: "calm",
    band: "low",
    traits: ["consumable", "personal"],
    query: { en: "loose leaf tea gift", fr: "coffret thé en vrac" },
    name: { en: "Tea they would not buy themselves", fr: "Un thé qu'elle ne s'achèterait pas" },
    why: {
      en: "Runs out, leaves no clutter behind, and gets thought about every morning.",
      fr: "Ça se termine, ça n'encombre rien, et on y pense chaque matin." },
    price: { en: "about CHF 35", fr: "environ CHF 35" },
    shops: ["manor", "galaxus"],
  },
  {
    id: "eye-mask",
    interest: "calm",
    band: "low",
    traits: ["distinctive"],
    query: { en: "silk sleep mask", fr: "masque de nuit en soie" },
    name: { en: "A sleep mask that actually blocks light", fr: "Un masque de nuit qui bloque vraiment la lumière" },
    why: {
      en: "Small, cheap, and the sort of thing nobody thinks to buy until someone hands them one.",
      fr: "Petit, pas cher, et le genre de truc auquel on ne pense jamais avant qu'on nous l'offre." },
    price: { en: "about CHF 30", fr: "environ CHF 30" },
    shops: ["manor", "zalando"],
  },
  {
    id: "reading-lamp",
    interest: "calm",
    band: "mid",
    traits: ["distinctive"],
    query: { en: "reading floor lamp", fr: "lampadaire de lecture" },
    name: { en: "A proper reading lamp", fr: "Une vraie lampe de lecture" },
    why: {
      en: "They read in bad light every evening and have simply stopped noticing.",
      fr: "Elle lit dans une mauvaise lumière chaque soir et ne le remarque même plus." },
    price: { en: "about CHF 95", fr: "environ CHF 95" },
    shops: ["manor", "galaxus"],
  },
  {
    id: "weighted-blanket",
    interest: "calm",
    band: "mid",
    traits: ["personal"],
    notFor: ["colleague"],
    query: { en: "weighted blanket", fr: "couverture lestée" },
    name: { en: "A weighted blanket", fr: "Une couverture lestée" },
    why: {
      en: "Either exactly right or completely wrong for a person. You probably know which.",
      fr: "Soit parfaitement adapté, soit complètement à côté. Tu sais probablement dans quel cas tu es." },
    price: { en: "about CHF 110", fr: "environ CHF 110" },
    shops: ["manor", "galaxus"],
  },
  {
    id: "anc-headphones",
    interest: "calm",
    band: "high",
    traits: ["distinctive"],
    query: { en: "noise cancelling headphones", fr: "casque à réduction de bruit" },
    name: { en: "Noise cancelling headphones", fr: "Un casque à réduction de bruit" },
    why: {
      en: "Worth checking they haven't already been given a pair. It is the common duplicate.",
      fr: "Vérifie qu'on ne lui en a pas déjà offert. C'est le doublon le plus courant." },
    price: { en: "about CHF 250", fr: "environ CHF 250" },
    shops: ["digitec", "galaxus"],
  },
  {
    id: "bathrobe",
    interest: "calm",
    band: "high",
    traits: ["personal"],
    notFor: ["colleague"],
    query: { en: "cotton bathrobe", fr: "peignoir en coton" },
    name: { en: "A heavy cotton bathrobe", fr: "Un peignoir en coton épais" },
    why: {
      en: "The hotel kind. An everyday luxury nobody ever buys for themselves.",
      fr: "Le genre hôtel. Un luxe quotidien que personne ne s'offre." },
    price: { en: "about CHF 150", fr: "environ CHF 150" },
    shops: ["manor", "zalando"],
  },

  // ─── going out ───────────────────────────────────────────────────────────
  {
    id: "cocktail-book",
    interest: "going-out",
    band: "low",
    traits: ["personal"],
    query: { en: "cocktail book", fr: "livre de cocktails" },
    name: { en: "A cocktail book worth actually opening", fr: "Un livre de cocktails dont on se sert vraiment" },
    why: {
      en: "Turns the person who always hosts into the person who always hosts well.",
      fr: "Ça transforme celle qui reçoit toujours en celle qui reçoit vraiment bien." },
    price: { en: "about CHF 35", fr: "environ CHF 35" },
    shops: ["manor", "galaxus"],
  },
  {
    id: "tote",
    interest: "going-out",
    band: "low",
    traits: ["consumable", "personal"],
    query: { en: "canvas tote bag", fr: "sac en toile" },
    name: { en: "A tote that survives the year", fr: "Un sac en toile qui tiendra l'année" },
    why: {
      en: "Cheap enough to be low stakes, used often enough to be remembered.",
      fr: "Assez bon marché pour ne rien risquer, assez utilisé pour qu'on s'en souvienne." },
    price: { en: "about CHF 40", fr: "environ CHF 40" },
    shops: ["zalando", "manor"],
  },
  {
    id: "crossbody",
    interest: "going-out",
    band: "mid",
    traits: ["personal", "distinctive"],
    query: { en: "crossbody bag", fr: "sac bandoulière" },
    name: { en: "A small crossbody bag", fr: "Un petit sac bandoulière" },
    why: {
      en: "Holds a phone, a key and a card, which is the entire point of going out.",
      fr: "De quoi mettre un téléphone, une clé et une carte, c'est tout l'intérêt de sortir." },
    price: { en: "about CHF 100", fr: "environ CHF 100" },
    shops: ["zalando", "manor"],
  },
  {
    id: "umbrella",
    interest: "going-out",
    band: "mid",
    traits: ["distinctive"],
    query: { en: "storm umbrella", fr: "parapluie tempête" },
    name: { en: "An umbrella that survives one winter", fr: "Un parapluie qui survit à un hiver" },
    why: {
      en: "A deeply unromantic gift that gets used more than anything else on this list.",
      fr: "Un cadeau totalement dénué de romantisme, et le plus utilisé de toute cette liste." },
    price: { en: "about CHF 55", fr: "environ CHF 55" },
    shops: ["manor", "galaxus"],
  },
  {
    id: "sunglasses",
    interest: "going-out",
    band: "high",
    traits: ["personal"],
    notFor: ["colleague"],
    query: { en: "sunglasses", fr: "lunettes de soleil" },
    name: { en: "Sunglasses they would pick", fr: "Des lunettes de soleil qu'elle choisirait" },
    why: {
      en: "High risk unless you have seen the pair they keep going back to.",
      fr: "Risqué, sauf si tu as vu la paire vers laquelle elle revient toujours." },
    price: { en: "about CHF 180", fr: "environ CHF 180" },
    shops: ["zalando", "manor"],
  },
  {
    id: "weekend-bag",
    interest: "going-out",
    band: "high",
    traits: ["distinctive"],
    query: { en: "weekender bag", fr: "sac de voyage week-end" },
    name: { en: "A weekend bag", fr: "Un sac de week-end" },
    why: {
      en: "They keep packing for two nights into a rucksack meant for a laptop.",
      fr: "Elle continue de partir deux nuits avec un sac prévu pour un ordinateur portable." },
    price: { en: "about CHF 170", fr: "environ CHF 170" },
    shops: ["zalando", "manor"],
  },
];

/** Which trait answers each "what would land worst?" choice. */
export const RISK_TO_TRAIT: Record<string, Trait> = {
  clutter: "consumable",
  impersonal: "personal",
  duplicate: "distinctive",
};

/*
 * The ranking itself lives in the quiz component's browser script, since it
 * runs entirely client-side and cannot import from here at runtime. Ideas
 * outside the chosen budget band are kept as fallbacks rather than dropped, so
 * a set of answers can never produce an empty result.
 */
