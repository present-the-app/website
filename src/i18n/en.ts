/**
 * English copy. The source of truth for meaning; fr.ts mirrors the shape, and
 * the `Strings` type below is what forces the two to stay in step.
 *
 * House rules:
 *  - No em-dashes in user-facing copy.
 *  - Prices are never read from a shop, so every one is written as an estimate.
 *    Never a bare number, and never described as verified.
 *  - Nothing here may claim something the app does not already do.
 */
export const en = {
  meta: {
    title: "Present · Be the one who got it right",
    description:
      "Answer a few questions about someone and get one gift idea that actually fits, with links to shops in Switzerland. Join the waitlist.",
    ogAlt: "Present. One gift idea that actually fits.",
    localeName: "English",
  },

  nav: {
    howItWorks: "How it works",
    wishlists: "Wishlists",
    faq: "Questions",
    cta: "Join the waitlist",
    openApp: "Open Present",
    skipToContent: "Skip to content",
  },

  hero: {
    headline: "Be the one who got it right.",
    headlineChristmas: "Christmas is close. You still have no idea.",
    headlineValentines: "It is nearly Valentine's. You have not thought about this.",
    sub: "Answer a few questions about them. Get one gift idea that actually fits. If it doesn't, the next one is already there.",
    subChristmas:
      "Answer a few questions about them. Get one gift idea worth wrapping, with a shop to buy it from.",
    ourPick: "Our pick",
    pickName: "A very good chef's knife",
    pickWhy: "They cook most nights and keep complaining about their knives.",
    pickPrice: "about CHF 90",
    pickPriceNote: "we haven't checked a shop yet",
    notThisOne: "Not this one",
    notThisOneNote: "The next idea is already here.",
    discarded: [
      { name: "A scented candle", price: "about CHF 30" },
      { name: "Bluetooth speaker", price: "about CHF 120" },
      { name: "A bottle of gin", price: "about CHF 45" },
    ],
  },

  waitlist: {
    label: "Email address",
    placeholder: "you@example.com",
    submit: "Join the waitlist",
    microcopy:
      "One email, when it's ready. Nothing else. You need to be 13 or older.",
    reassurance: "Their name is never sent to the AI.",
    // Signup is double opt-in, so promising "you're on the list" here would
    // be false until they click the confirmation link.
    disabled: "The waitlist opens shortly.",
  },

  demo: {
    eyebrow: "Try it now",
    title: "Four questions. One idea.",
    intro:
      "A taste of it, running entirely in this page. The real app asks better questions and knows a great deal more.",
    back: "Back",
    restart: "Start again",
    progress: "Question {n} of {total}",
    resultEyebrow: "Our pick",
    reroll: "Not this one",
    rerollsLeft: "{n} more to try",
    why: "Why this fits",
    buyAt: "Look for it at",
    gateTitle: "That was a lookup table.",
    gateBody:
      "Four questions and a hand-written list. The real thing asks about the person rather than the category, and it doesn't run out. Want it when it opens?",
    noJs: "This demo needs JavaScript. The rest of the page does not.",
    questions: [
      {
        id: "who",
        prompt: "Who are you buying for?",
        options: [
          { id: "partner", label: "My partner" },
          { id: "family", label: "Family" },
          { id: "friend", label: "A friend" },
          { id: "colleague", label: "Someone at work" },
        ],
      },
      {
        id: "interest",
        prompt: "What do they do when nobody is asking anything of them?",
        options: [
          { id: "outdoors", label: "Get outside" },
          { id: "kitchen", label: "Cook and eat well" },
          { id: "making", label: "Make things" },
          { id: "screens", label: "Games and screens" },
          { id: "calm", label: "Read, soak, do nothing" },
          { id: "going-out", label: "Go out, see people" },
        ],
      },
      {
        id: "budget",
        prompt: "Roughly what are you spending?",
        options: [
          { id: "low", label: "Up to CHF 50" },
          { id: "mid", label: "CHF 50 to 120" },
          { id: "high", label: "More than CHF 120" },
        ],
      },
      {
        id: "risk",
        prompt: "What would land worst?",
        options: [
          { id: "clutter", label: "More stuff to store" },
          { id: "impersonal", label: "Something obviously generic" },
          { id: "duplicate", label: "Something they already own" },
        ],
      },
    ],
  },

  problem: {
    title: "Nobody ever found a good present by scrolling.",
    body: "Search engines know products. They don't know that your sister has opinions about coffee, that your dad has already bought himself every tool he wants, or that the last three people who tried gave up and bought a voucher.",
  },

  onePick: {
    eyebrow: "One answer",
    title: "One idea, chosen. Not a page of results.",
    body: "Most gift tools hand you a list and leave the deciding to you, which is the part you were stuck on. This one commits: a single pick, the reason it fits, a price, and where to look for it.",
    points: [
      {
        title: "Changing your mind is instant",
        body: "Every candidate is worked out in one go, so rejecting the pick brings up the next one immediately. No waiting, no starting over.",
      },
      {
        title: "Every price is an estimate, and says so",
        body: "We can't read live shop prices, so we don't pretend to. Every figure is written as an estimate, never as a confident-looking number that nobody checked.",
      },
      {
        title: "Shops you already use",
        body: "Every idea comes with a search at shops you can order from in Switzerland. We sell nothing, hold no stock, and earn nothing from the links.",
      },
    ],
  },

  wishlists: {
    eyebrow: "Wishlists",
    title: "A list your friends can use without spoiling anything.",
    body: "Make a list, send the link in WhatsApp. Whoever opens it sees your ideas and can quietly take one. No app, no account, nothing to install for them.",
    claimDemo: {
      listName: "Elena's birthday",
      items: [
        { name: "The espresso grinder", state: "free", price: "about CHF 180" },
        { name: "Walking boots, size 39", state: "claimed", price: "about CHF 160" },
        { name: "That cookbook", state: "free", price: "about CHF 45" },
      ],
      claim: "I'll get this",
      claimed: "Someone's getting this",
      ownerNote: "This is your list. What your friends pick stays a surprise.",
    },
    points: [
      {
        title: "You never see who took what",
        body: "Other people looking at your list can see an item is covered, so nobody buys the same thing twice. You cannot. The surprise survives.",
      },
      {
        title: "The link is yours to switch off",
        body: "Turn it off and it stops working for anyone who hasn't already opened it. Rotate it and the old one goes dead.",
      },
      {
        title: "The preview gives nothing away",
        body: "Sent in a chat, the link previews as a plain card. It carries no list contents and no names, because those cards get cached and stay cached.",
      },
    ],
  },

  how: {
    eyebrow: "How it works",
    title: "Two minutes, start to finish.",
    steps: [
      {
        title: "Tell us about them, not about products",
        body: "A short set of questions about the person: what they do, what they like, what they would never use. No account needed to start.",
      },
      {
        title: "Get one idea worth acting on",
        body: "The pick comes with a reason, a price and shop links. If it's wrong, say so and the next one appears straight away.",
      },
      {
        title: "Keep it, or share the list",
        body: "Save what you like to a wishlist, or send your own list to the people who keep asking what you want.",
      },
    ],
  },

  calendar: {
    eyebrow: "Gift calendar",
    title: "It reminds you while there is still time to do something.",
    body: "Add the birthdays you keep forgetting and choose how much warning you want. The reminder arrives on your phone and takes you straight to fresh ideas for that person.",
    note: "Reminders are scheduled on your device. There is no push service and no calendar sync.",
    entries: [
      { name: "Elena", when: "14 March \u00b7 birthday" },
      { name: "Dad", when: "2 June \u00b7 birthday" },
      { name: "Noah", when: "in 3 days \u00b7 birthday" },
    ],
  },

  faq: {
    eyebrow: "Questions",
    title: "The things you're about to ask.",
    items: [
      {
        q: "When can I actually use it?",
        a: "It isn't finished. Join the waitlist and you'll get one email when it opens, on iPhone, in Switzerland first.",
      },
      {
        q: "Is it free?",
        a: "It'll be free when it opens. We haven't decided what happens after that, and we're not going to pretend we have.",
      },
      {
        q: "Is this just ChatGPT with extra steps?",
        a: "A chat window asks you what product you want. This asks about the person, keeps what you told it, and commits to one answer instead of handing you a list. It also never shows you a price without calling it an estimate.",
      },
      {
        q: "Do I need an account?",
        a: "No. Quizzes and ideas work from the moment you open the app. An account exists only so your things survive a new phone.",
      },
      {
        q: "Where do the gifts come from?",
        a: "There is no catalogue. Each idea comes with a search at shops you can order from, like Galaxus and Zalando. We sell nothing ourselves and earn nothing from the links.",
      },
      {
        q: "Why 13 and over?",
        a: "It's the age rating we build to. Your date of birth is used once to check, and is never stored.",
      },
      {
        q: "Will there be an Android version?",
        a: "Not at launch. It's built to run there, and it will come sooner if enough of you ask for it, so say so when you reply to the first email.",
      },
    ],
  },


  limits: {
    eyebrow: "What it can't do",
    title: "It doesn't know them better than you do.",
    body: "It has never met the person you're buying for. It takes what you already know and does the part you're stuck on: deciding. When an idea is wrong, you'll know it faster than any app could. That is why rejecting one takes a single tap, and why the next is already waiting.",
  },

  finalCta: {
    title: "Be the one who got it right.",
    body: "One email, when it's ready.",
  },

  trust: {
    // Each line states behaviour the app enforces, not a policy promise.
    items: [
      "No account needed to start",
      "Their name is never sent to the AI",
      "Your date of birth is never stored",
      "Reminders stay on your phone",
    ],
    link: "How this handles your data",
  },

  footer: {
    tagline: "Gift ideas from questions about the person you're buying for.",
    privacy: "Privacy",
    blog: "Writing",
    contact: "Contact",
    rights: "Made in Switzerland.",
  },

  thanks: {
    title: "Check your inbox.",
    body: "We've sent a confirmation link. Open it and you're on the list. After that you'll hear from us once, when there's something to open.",
    shareTitle: "Know someone who is genuinely terrible at presents?",
    shareCta: "Send them this",
    shareText:
      "Present. It works out what to get someone, instead of making you scroll a shop. Coming to Switzerland: ",
    home: "Back to the start",
  },

  privacy: {
    title: "Privacy",
    updated: "Last updated",
    intro:
      "This page covers this website. The app has its own, which will be published before it opens.",
  },

  contact: {
    title: "Contact",
    intro:
      "For press, partnerships, or to tell us this is a bad idea. One person reads these, so give it a day or two.",
    name: "Your name",
    namePlaceholder: "Alex",
    email: "Your email",
    emailPlaceholder: "you@example.com",
    message: "Message",
    messagePlaceholder: "What's on your mind?",
    submit: "Send",
    fallbackTitle: "Email works too",
    fallbackBody: "The form isn't connected yet. Write to us directly:",
  },

  blog: {
    title: "Writing",
    intro: "Notes on building this, and gift ideas that are actually useful.",
    published: "Published",
    empty: "Nothing here yet.",
  },


  notFound: {
    title: "That page isn't here.",
    body: "It may have moved, or it may never have existed. Neither is your fault.",
    home: "Back to the start",
  },
};

/**
 * Not `as const`: string literal types here would stop any translation from
 * satisfying `Strings`, since "Bonjour" is not assignable to "Hello".
 */
export type Strings = typeof en;
