export const HOME_PAGE_CONSTANTS = {
  TITLE: "AI Logo Maker",
  UNIQUE_DESC: "Perfect Logos for Apps, Businesses, and Websites",
  DESCRIPTION:
    "Craft unique and professional logos effortlessly with our AI-powered tool. Perfect for apps, businesses, websites, and more!",
  PLACEHOLDER: "Enter Your Logo Name",
};

export const CREATE_LOGO_CONSTANTS = {
  LOGO_TITLE: "Logo Title",
  LOGO_TITLE_DESCRIPTION:
    "Add Your Business, App, or Website Name for a Custom Logo",
  LOGO_VISION: "Describe Your Logo Vision",
  LOGO_VISION_DESCRIPTION:
    "Share your ideas, themes, or inspirations to create a logo that perfectly represents your brand or project.",
  COLOR_PALETTE: "Choose Your Color Palette",
  COLOR_PALETTE_DESCRIPTION:
    "Pick the colors that reflect your brands personality and create a lasting impression.",
  LOGO_STYLE: "Choose Your Logo Style",
  LOGO_STYLE_DESCRIPTION:
    "Select the type of logo design that best represents your brands unique identity.",
  DESIGN_IDEA: "Select Your Design Idea",
  DESIGN_IDEA_DESCRIPTION:
    "Choose a design style that aligns with your vision, or skip to receive a random suggestion.",
  AI_MODEL_PLAN: "Select your AI Model Plan",
  AI_MODEL_PLAN_DESCRIPTION: "Generate Unlimted Fast Logo with your fav model",
};

export const AI_MODEL_PLAN_DETAIL = {
  FREE: {
    FEATURES: [
      " Generate unlimited logos for free",
      "Longer wait times",
      " Wait time: 30 seconds to 3 minutes",
      "Limited Design Options and Quality",
      " Slow (Not Recommended)",
    ],
  },
  PREMIUM: {
    FEATURES: [
      "Generate unlimited logos",
      "Shorter wait times",
      "Wait time: Less than 10 seconds",
      " Only 5 Credits",
    ],
  },
};

export const COLOR_PALETTES = [
  {
    name: "Neon Pop Fusion",
    colors: ["#ff5733", "#33fe56", "#3257ff", "#FF32A8", "#F4FF32"],
  },
  {
    name: "Midnight Ocean Dusk",
    colors: ["#003F5B", "#2f4b7b", "#665191", "#a05195", "#d45087"],
  },
  {
    name: "Sunset Ember Glow",
    colors: ["#fe6f61", "#ff8466", "#ff9e6a", "#ffb773", "#ffd381"],
  },
  {
    name: "Eco Forest Gradient",
    colors: ["#296f4e", "#3f8e68", "#56a580", "#70bd9b", "#8fd6b5"],
  },
  {
    name: "Vintage Coffee Stain",
    colors: ["#5d4037", "#795548", "#8d6e63", "#a1887e", "#d7cbc8"],
  },
  {
    name: "Royal Berry Jam",
    colors: ["#691b99", "#7b1ea2", "#8e24aa", "#9c27b0", "#ab47bc"],
  },
];

export const LOGO_STYLE_DETAILS = [
  {
    STYLE_NAME: "cartoon logo",
    STYLE_IMG: "/logo-style/design_1.webp",
    prompt:
      "Playful character-based design with bold outlines, exaggerated features, and vibrant color shading. Include soft shadows and a dynamic pose for character.",
  },
  {
    STYLE_NAME: "app logo",
    STYLE_IMG: "/logo-style/design_2.webp",
    prompt:
      "Clean geometric shapes with subtle gradients and negative space manipulation. Modern flat design with 1-2 accent colors and pixel-perfect symmetry.",
  },
  {
    STYLE_NAME: "mascot logo",
    STYLE_IMG: "/logo-style/design_3.webp",
    prompt:
      "Friendly animal or object personification with textured fur/features. Use dimensional shading and highlight catchlights in eyes for approachable appeal.",
  },
  {
    STYLE_NAME: "black and white line logo",
    STYLE_IMG: "/logo-style/design_4.webp",
    prompt:
      "Monoline art with continuous flowing strokes. Abstract or symbolic representation using varying line weights and negative space balance.",
  },
  {
    STYLE_NAME: "minimalists and elegant logos",
    STYLE_IMG: "/logo-style/design_5.webp",
    prompt:
      "Ultra-simplified concept using basic geometric forms and thin serif typography. Limited to 2 colors maximum with ample white space.",
  },
  {
    STYLE_NAME: "vintage custom logos",
    STYLE_IMG: "/logo-style/design_6.webp",
    prompt:
      "Hand-drawn aesthetic with distressed textures and ornamental flourishes. Use sepia tones and worn edges to create aged authenticity.",
  },
  {
    STYLE_NAME: "modern sharp lined logos",
    STYLE_IMG: "/logo-style/design_7.webp",
    prompt:
      "Angular geometric construction with razor-thin lines and metallic accents. Incorporate overlapping transparent layers and holographic effects.",
  },
  {
    STYLE_NAME: "custom luxury logo design",
    STYLE_IMG: "/logo-style/design_8.webp",
    prompt:
      "Gold foil embossing effect with delicate filigree patterns and high-contrast marble texture background. Use deep jewel tones and serif typography.",
  },
  {
    STYLE_NAME: "Vintage Logo Designs With Text & Icon",
    STYLE_IMG: "/logo-style/design_9.webp",
    prompt:
      "Retro badge layout combining classic typography with symbolic center icon. Incorporate ribbon banners and starburst elements with subtle paper texture.",
  },
];
