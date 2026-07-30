import type { Strings } from "./en";

/**
 * French copy, written for Suisse Romande.
 *
 * Register: TU throughout. Vouvoiement reads like a cantonal tax form here.
 *
 * This is original copy, not a translation of the English.
 *
 * Swiss French rules applied throughout: francs and CHF, never euros.
 * Name only shops the app actually links to; never Fnac or Amazon.fr, which
 * would mark the site as written for France. "Liste d'envies", never
 * "liste de souhaits".
 */
export const fr: Strings = {
  meta: {
    title: "Present · Cette fois, c'est le bon cadeau",
    description:
      "Réponds à quelques questions sur la personne et reçois une idée de cadeau qui lui ressemble vraiment, avec les magasins en Suisse. Inscris-toi à la liste d'attente.",
    ogAlt: "Present. Une idée de cadeau qui tombe juste.",
    localeName: "Français",
  },

  nav: {
    howItWorks: "Comment ça marche",
    wishlists: "Listes d'envies",
    faq: "Questions",
    cta: "Rejoindre la liste",
    openApp: "Ouvrir Present",
    skipToContent: "Aller au contenu",
  },

  hero: {
    headline: "Cette fois, c'est le bon cadeau.",
    headlineChristmas: "Noël approche. Et tu n'as toujours aucune idée.",
    headlineValentines: "La Saint-Valentin arrive. Creuse un peu.",
    sub: "Réponds à quelques questions sur la personne. Tu reçois une idée qui lui ressemble vraiment. Si elle ne va pas, la suivante est déjà là.",
    subChristmas:
      "Réponds à quelques questions sur la personne. Tu reçois une idée qui vaut la peine d'être emballée, et le magasin qui l'a.",
    ourPick: "Notre choix",
    pickName: "Un très bon couteau de chef",
    pickWhy: "Elle cuisine presque tous les soirs et râle sur ses couteaux.",
    pickPrice: "environ CHF 90",
    pickPriceNote: "on n'a pas encore vérifié en magasin",
    notThisOne: "Pas ça",
    notThisOneNote: "L'idée suivante est déjà là.",
    discarded: [
      { name: "Une bougie parfumée", price: "environ CHF 30" },
      { name: "Enceinte Bluetooth", price: "environ CHF 120" },
      { name: "Une bouteille de gin", price: "environ CHF 45" },
    ],
  },

  waitlist: {
    label: "Adresse e-mail",
    placeholder: "toi@exemple.com",
    submit: "Rejoindre la liste",
    microcopy:
      "Un seul e-mail, quand ce sera prêt. Rien d'autre. Tu dois avoir 13 ans ou plus.",
    reassurance: "Son prénom n'est jamais envoyé à l'IA.",
    disabled: "La liste d'attente ouvre bientôt.",
  },

  demo: {
    eyebrow: "Essaie tout de suite",
    title: "Quatre questions. Une idée.",
    intro:
      "Un aperçu, qui tourne entièrement dans cette page. La vraie app pose de meilleures questions et connaît beaucoup plus d'idées.",
    back: "Retour",
    restart: "Recommencer",
    progress: "Question {n} sur {total}",
    resultEyebrow: "Notre choix",
    reroll: "Pas ça",
    rerollsLeft: "il t'en reste {n}",
    why: "Pourquoi ça colle",
    buyAt: "À chercher chez",
    gateTitle: "C'était une simple liste.",
    gateBody:
      "Quatre questions et une liste écrite à la main. La vraie version s'intéresse à la personne, pas à la catégorie, et elle ne s'épuise pas. Tu la veux à l'ouverture ?",
    noJs: "Cette démo a besoin de JavaScript. Le reste de la page, non.",
    questions: [
      {
        id: "who",
        prompt: "C'est pour qui ?",
        options: [
          { id: "partner", label: "Mon copain, ma copine" },
          { id: "family", label: "La famille" },
          { id: "friend", label: "Un ami" },
          { id: "colleague", label: "Quelqu'un du boulot" },
        ],
      },
      {
        id: "interest",
        prompt: "Cette personne fait quoi quand personne ne lui demande rien ?",
        options: [
          { id: "outdoors", label: "Elle sort dehors" },
          { id: "kitchen", label: "Elle cuisine, elle mange bien" },
          { id: "making", label: "Elle fabrique des trucs" },
          { id: "screens", label: "Jeux et écrans" },
          { id: "calm", label: "Lire, se poser, rien faire" },
          { id: "going-out", label: "Sortir, voir du monde" },
        ],
      },
      {
        id: "budget",
        prompt: "Tu mets à peu près combien ?",
        options: [
          { id: "low", label: "Jusqu'à CHF 50" },
          { id: "mid", label: "De CHF 50 à 120" },
          { id: "high", label: "Plus de CHF 120" },
        ],
      },
      {
        id: "risk",
        prompt: "Qu'est-ce qui tomberait le plus à plat ?",
        options: [
          { id: "clutter", label: "Encore un objet à caser" },
          { id: "impersonal", label: "Un truc visiblement générique" },
          { id: "duplicate", label: "Un truc que la personne a déjà" },
        ],
      },
    ],
  },

  problem: {
    title: "Personne n'a jamais trouvé un bon cadeau en scrollant.",
    body: "Les moteurs de recherche connaissent des produits. Ils ne savent pas que ta sœur a des avis très arrêtés sur le café, que ton père s'est déjà offert tous les outils qu'il voulait, ni que les trois dernières personnes qui ont essayé ont fini par offrir un bon d'achat.",
  },

  onePick: {
    eyebrow: "Une réponse",
    title: "Une idée, choisie. Pas une page de résultats.",
    body: "La plupart des outils te donnent une liste et te laissent décider, alors que décider était précisément le problème. Ici, on tranche : un seul choix, la raison qui va avec, un prix, et où le chercher.",
    points: [
      {
        title: "Changer d'avis est immédiat",
        body: "Toutes les pistes sont trouvées en une fois. Refuser le choix fait remonter le suivant tout de suite, sans attente et sans tout recommencer.",
      },
      {
        title: "Chaque prix est une estimation, et le dit",
        body: "On ne peut pas lire les prix en direct, alors on ne fait pas semblant. Chaque montant est annoncé comme une estimation, jamais comme un chiffre sûr que personne n'a vérifié.",
      },
      {
        title: "Des magasins que tu connais déjà",
        body: "Chaque idée arrive avec une recherche chez des magasins où tu peux commander en Suisse. On ne vend rien, on n'a aucun stock, et on ne touche rien sur les liens.",
      },
    ],
  },

  wishlists: {
    eyebrow: "Listes d'envies",
    title: "Une liste que tes proches peuvent utiliser sans rien gâcher.",
    body: "Tu fais ta liste, tu envoies le lien sur WhatsApp. Celui qui l'ouvre voit tes idées et peut en prendre une discrètement. Pas d'app, pas de compte, rien à installer pour lui.",
    claimDemo: {
      listName: "Anniversaire d'Elena",
      items: [
        { name: "Le moulin à espresso", state: "free", price: "environ CHF 180" },
        {
          name: "Chaussures de rando, taille 39",
          state: "claimed",
          price: "environ CHF 160",
        },
        { name: "Ce livre de cuisine", state: "free", price: "environ CHF 45" },
      ],
      claim: "Je m'en occupe",
      claimed: "Quelqu'un s'en occupe",
      ownerNote:
        "C'est ta liste. Ce que tes proches choisissent reste une surprise.",
    },
    points: [
      {
        title: "Tu ne vois jamais qui a pris quoi",
        body: "Les autres visiteurs voient qu'un article est déjà pris, donc personne n'achète deux fois la même chose. Toi, non. La surprise tient.",
      },
      {
        title: "Le lien, tu peux le couper",
        body: "Tu le désactives et il cesse de fonctionner pour tous ceux qui ne l'ont pas déjà ouvert. Tu le renouvelles et l'ancien est mort.",
      },
      {
        title: "L'aperçu ne révèle rien",
        body: "Envoyé dans une conversation, le lien s'affiche comme une carte neutre. Ni contenu, ni prénom, parce que ces aperçus restent longtemps en cache.",
      },
    ],
  },

  how: {
    eyebrow: "Comment ça marche",
    title: "Deux minutes, du début à la fin.",
    steps: [
      {
        title: "Parle-nous de la personne, pas de produits",
        body: "Quelques questions sur la personne : ce qu'elle fait, ce qu'elle aime, ce qu'elle n'utiliserait jamais. Aucun compte pour commencer.",
      },
      {
        title: "Reçois une idée que tu peux suivre",
        body: "Le choix arrive avec une raison, un prix et des liens vers les magasins. S'il tombe à côté, tu le dis et le suivant apparaît tout de suite.",
      },
      {
        title: "Garde-la, ou partage ta liste",
        body: "Range ce qui te plaît dans une liste d'envies, ou envoie la tienne à ceux qui te demandent toujours ce que tu veux.",
      },
    ],
  },

  calendar: {
    eyebrow: "Calendrier des cadeaux",
    title: "Il te prévient quand il est encore temps d'agir.",
    body: "Ajoute les anniversaires que tu oublies chaque année et choisis combien de jours d'avance tu veux. Le rappel arrive sur ton téléphone et t'emmène directement vers de nouvelles idées pour cette personne.",
    note: "Les rappels sont programmés sur ton appareil. Il n'y a pas de service de notification et aucune synchronisation de calendrier.",
    entries: [
      { name: "Elena", when: "14 mars \u00b7 anniversaire" },
      { name: "Papa", when: "2 juin \u00b7 anniversaire" },
      { name: "Noah", when: "dans 3 jours \u00b7 anniversaire" },
    ],
  },

  faq: {
    eyebrow: "Questions",
    title: "Ce que tu allais demander.",
    items: [
      {
        q: "Je peux l'utiliser quand ?",
        a: "Ce n'est pas fini. Inscris-toi et tu recevras un e-mail quand ça ouvre, sur iPhone, en Suisse d'abord.",
      },
      {
        q: "C'est gratuit ?",
        a: "Ce sera gratuit à l'ouverture. On n'a pas encore décidé ce qui se passe ensuite, et on ne va pas prétendre le contraire.",
      },
      {
        q: "C'est juste ChatGPT avec des étapes en plus ?",
        a: "Une fenêtre de chat te demande quel produit tu veux. Ici on pose des questions sur la personne, on garde ce que tu as dit, et on tranche au lieu de te donner une liste. Et on n'affiche jamais un prix sans dire que c'est une estimation.",
      },
      {
        q: "J'ai besoin d'un compte ?",
        a: "Non. Les questionnaires et les idées marchent dès l'ouverture de l'app. Le compte sert uniquement à ce que tes affaires survivent à un changement de téléphone.",
      },
      {
        q: "Les cadeaux viennent d'où ?",
        a: "Il n'y a pas de catalogue. Chaque idée arrive avec une recherche chez des magasins où tu peux commander, comme Galaxus ou Zalando. On ne vend rien nous-mêmes et on ne touche rien sur les liens.",
      },
      {
        q: "Pourquoi 13 ans et plus ?",
        a: "C'est la classification d'âge qu'on vise. Ta date de naissance sert une seule fois à vérifier, et elle n'est jamais conservée.",
      },
      {
        q: "Il y aura une version Android ?",
        a: "Pas au lancement. C'est prévu pour tourner dessus, et ça viendra plus vite si beaucoup de gens le demandent : dis-le en répondant au premier e-mail.",
      },
    ],
  },


  limits: {
    eyebrow: "Ce qu'il ne sait pas faire",
    title: "Il ne connaît pas la personne mieux que toi.",
    body: "Il n'a jamais rencontré celle à qui tu offres. Il prend ce que tu sais déjà et fait la partie qui te bloque : choisir. Quand une idée tombe à côté, tu le vois plus vite que n'importe quelle app. C'est pour ça que la refuser prend un geste, et que la suivante est déjà là.",
  },

  finalCta: {
    title: "Cette fois, c'est le bon cadeau.",
    body: "Un seul e-mail, quand ce sera prêt.",
  },

  trust: {
    items: [
      "Aucun compte pour commencer",
      "Son prénom n'est jamais envoyé à l'IA",
      "Ta date de naissance n'est jamais conservée",
      "Les rappels restent sur ton téléphone",
    ],
    link: "Ce qu'on fait de tes données",
  },

  footer: {
    tagline:
      "Des idées de cadeaux à partir de questions sur la personne à qui tu offres.",
    privacy: "Confidentialité",
    blog: "Le journal",
    contact: "Contact",
    rights: "Fait en Suisse.",
  },

  thanks: {
    title: "Regarde ta boîte mail.",
    body: "On t'a envoyé un lien de confirmation. Ouvre-le et tu es sur la liste. Ensuite tu auras de nos nouvelles une fois, quand il y aura quelque chose à ouvrir.",
    shareTitle: "Tu connais quelqu'un de vraiment nul en cadeaux ?",
    shareCta: "Envoie-lui ça",
    shareText:
      "Present. Ça trouve quoi offrir à quelqu'un, au lieu de te faire scroller un magasin. Bientôt en Suisse : ",
    home: "Retour au début",
  },

  privacy: {
    title: "Confidentialité",
    updated: "Dernière mise à jour",
    intro:
      "Cette page concerne ce site. L'app aura la sienne, publiée avant son ouverture.",
  },

  contact: {
    title: "Contact",
    intro:
      "Pour la presse, les partenariats, ou pour nous dire que c'est une mauvaise idée. Une seule personne lit ces messages, donc laisse-lui un jour ou deux.",
    name: "Ton nom",
    namePlaceholder: "Alex",
    email: "Ton e-mail",
    emailPlaceholder: "toi@exemple.com",
    message: "Message",
    messagePlaceholder: "Qu'est-ce que tu as en tête ?",
    submit: "Envoyer",
    fallbackTitle: "L'e-mail marche aussi",
    fallbackBody: "Le formulaire n'est pas encore branché. Écris-nous directement :",
  },

  blog: {
    title: "Le journal",
    intro:
      "Des notes sur la construction de tout ça, et des idées de cadeaux réellement utiles.",
    published: "Publié le",
    empty: "Rien ici pour l'instant.",
  },


  notFound: {
    title: "Cette page n'est pas là.",
    body: "Elle a peut-être changé d'adresse, ou elle n'a jamais existé. Dans les deux cas, ce n'est pas de ta faute.",
    home: "Retour au début",
  },
};
