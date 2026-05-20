import { BRAND } from "@/lib/brand";

export const FAQ_DATA = [
  {
    category: "Availability",
    items: [
      {
        q: `Is ${BRAND.name} available now?`,
        a: `No. ${BRAND.name} is currently in pre-launch. Joining the waitlist gives access to product updates and first-drop launch information.`,
      },
      {
        q: "When is the first drop?",
        a: `The first drop is being prepared for ${BRAND.launchSeason}. The exact launch date will be confirmed to the waitlist.`,
      },
      {
        q: "Where will you ship first?",
        a: `The first drop is being prepared for ${BRAND.launchCountries}. More launch countries may follow.`,
      },
    ],
  },
  {
    category: "Product",
    items: [
      {
        q: "What is included in the first kit?",
        a: `The planned ${BRAND.product} includes a waterproof phone pouch, crossbody strap, valuables / wet-dry pouch, travel storage pouch and pre-use test card. Final contents will be confirmed before checkout opens.`,
      },
      {
        q: "Will it fit large phones?",
        a: "Large phone compatibility is one of the key selection criteria. Final compatibility guidance will be published before launch.",
      },
      {
        q: "Does it float?",
        a: "Floatation is one of the validation points. Final floatation guidance will be confirmed before launch.",
      },
    ],
  },
  {
    category: "Use",
    items: [
      {
        q: "Can I use it in the pool?",
        a: "The kit is being selected for beach, pool and travel use. Always follow the final product instructions and test before first use.",
      },
      {
        q: "Can I use it in the sea?",
        a: "The product direction includes sea and beach use. Rinse after salt water and follow final care instructions.",
      },
      {
        q: `Is it for deep diving?`,
        a: `No. ${BRAND.name} is not intended for deep diving unless final product instructions explicitly state otherwise.`,
      },
      {
        q: "Will the touchscreen work?",
        a: "Touch usability is part of the validation process. Final guidance will depend on the selected product materials and phone type.",
      },
    ],
  },
  {
    category: "Launch",
    items: [
      {
        q: "What does joining the waitlist give me?",
        a: "Waitlist members receive launch updates, testing notes, early access and expected first-drop pricing.",
      },
      {
        q: "What safety tests are being done?",
        a: "The validation process focuses on water ingress, closure reliability, phone fit, touch usability, strap strength, floatation and care guidance.",
      },
    ],
  },
];