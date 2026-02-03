import sorghumImg from "./assets/alif_01.png";
import napierImg from "./assets/alif_02.jpg";

export const products = [
  {
    id: 1,
    slug: "sorghum-sudan",
    name_en: "Sorghum Sudan Seed",
    name_bn: "সরগাম সুদান বীজ",
    price: 350,
    unit_en: "per kg",
    unit_bn: "প্রতি কেজি",
    image: sorghumImg,
    short_en: "Fast-growing, multi-cut fodder grass seed for cattle.",
    short_bn: "দ্রুত বৃদ্ধি, মাল্টি-কাট ঘাসের বীজ—গবাদিপশুর জন্য উপযোগী।",
    details_en: [
      "High biomass and quick regrowth",
      "Suitable for multiple cuttings",
      "Best for dairy & beef cattle feed",
      "Recommended sowing: 12–15 kg/acre (demo)",
    ],
    details_bn: [
      "বেশি সবুজ ঘাস ও দ্রুত পুনরায় বৃদ্ধি",
      "একাধিক কাটিংয়ের জন্য উপযোগী",
      "দুধাল ও মাংস উৎপাদনকারী গরুর খাদ্যে ভালো",
      "বপনের হার: ১২–১৫ কেজি/একর (ডেমো)",
    ],
  },
  {
    id: 2,
    slug: "napier",
    name_en: "Super Napier Seed",
    name_bn: "সুপার ন্যাপিয়ার বীজ",
    price: 300,
    unit_en: "per kg",
    unit_bn: "প্রতি কেজি",
    image: napierImg,
    short_en: "High-yield fodder grass for healthy livestock nutrition.",
    short_bn: "বেশি ফলনশীল ঘাস—গবাদিপশুর পুষ্টির জন্য দারুণ।",
    details_en: [
      "Easy cultivation, high yield",
      "Strong tillering and lush green growth",
      "Great for silage and daily feed",
      "Recommended sowing: 6–8 kg/acre (demo)",
    ],
    details_bn: [
      "সহজ চাষ, বেশি ফলন",
      "ঘন ঘাস ও সবুজ বৃদ্ধি",
      "সাইলেজ ও দৈনিক খাদ্যে উপযোগী",
      "বপনের হার: ৬–৮ কেজি/একর (ডেমো)",
    ],
  },
];