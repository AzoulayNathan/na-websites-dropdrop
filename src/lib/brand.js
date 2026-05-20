// ━━━━━━━━━━━━━━━━━━━━
// DROPDROP Brand Configuration
// Change the brand name here and it updates everywhere.
// ━━━━━━━━━━━━━━━━━━━━

export const BRAND = {
  name: "DROPDROP",
  tagline: "Your valuables. Covered.",
  promise: "Dry. Safe. Free.",
  product: "The Beach Crossbody Kit",
  launchSeason: "Summer 2026",
  launchCountries: "France and Spain",
  email: "hello@dropdrop.eu",
  expectedPrice: "€59.90",
  firstDropPrice: "€49.90",
  duoPrice: "€89.90",
};

export const NAV_LINKS = [
  { label: "The Kit", path: "/kit" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "Waitlist", path: "/waitlist" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

export const FOOTER_LINKS = {
  product: [
    { label: "The Kit", path: "/kit" },
    { label: "How It Works", path: "/how-it-works" },
    { label: "Waitlist", path: "/waitlist" },
    { label: "Survey", path: "/survey" },
  ],
  support: [
    { label: "FAQ", path: "/faq" },
    { label: "Contact", path: "/contact" },
  ],
  legal: [
    { label: "Privacy", path: "/privacy" },
    { label: "Terms", path: "/terms" },
    { label: "Shipping & Returns", path: "/shipping-returns" },
    { label: "Product Safety Note", path: "/product-safety" },
  ],
};

export const USE_CASES = [
  "Beach",
  "Pool",
  "Boat",
  "Water park",
  "Travel",
  "Family",
  "Other",
];

export const PROTECT_FIRST = [
  "Phone",
  "Keys",
  "Cards",
  "Passport",
  "All of it",
];

export const KIT_ITEMS = [
  {
    name: "Waterproof phone pouch",
    benefit: "Designed to keep your phone close near water.",
    validation: "Large phone compatibility is a key selection criterion.",
  },
  {
    name: "Adjustable crossbody strap",
    benefit: "Hands-free carry from towel to waterline.",
    validation: "Strap comfort and pull strength under validation.",
  },
  {
    name: "Valuables / wet-dry pouch",
    benefit: "A small place for cards, keys, cash and essentials.",
    validation: "Closure reliability testing in progress.",
  },
  {
    name: "Travel storage pouch",
    benefit: "Keeps the kit together between beach days.",
    validation: null,
  },
  {
    name: "Pre-use test card",
    benefit: "A simple reminder to test before the first swim.",
    validation: "Final instructions will ship with the product.",
  },
];

export const VALIDATION_CHECKLIST = [
  "Water ingress test",
  "Float test",
  "Wet-hands closure test",
  "Large-phone fit test",
  "Touchscreen usability test",
  "Strap pull strength check",
  "Material documentation review",
  "Closure repeat-use check",
  "Salt / chlorine rinse guidance",
];