const clients = [
  { url: '/client_1.png', alt: 'client 1' },
  { url: '/client_2.png', alt: 'client 2' },
  { url: '/client_3.png', alt: 'client 3' },
  { url: '/client_4.png', alt: 'client 4' },
  { url: '/client_5.png', alt: 'client 5' },
  { url: '/client_6.png', alt: 'client 6' },
  { url: '/client_7.png', alt: 'client 7' },
  { url: '/client_8.png', alt: 'client 8' },
  { url: '/client_9.png', alt: 'client 9' },
  { url: '/client_10.png', alt: 'client 10' },
  { url: '/client_11.png', alt: 'client 11' },
  { url: '/client_12.png', alt: 'client 12' },
  { url: '/client_13.png', alt: 'client 13' },
  { url: '/client_14.png', alt: 'client 14' },
  { url: '/client_15.png', alt: 'client 15' },
  { url: '/client_16.png', alt: 'client 16' },
];

const plans = [
  {
    name: "Starter",
    price: 18.99,
    description:
      "Ideal for small stores that want to boost product descriptions and SEO with AI-powered optimizations.",
    features: [
      "Optimize up to 100 products",
      "Generate up to 1,800 AI credits",
      "Automatic keywords suggestions",
      "LLMs.txt generator for AI indexing",
      "Email support",
    ],
    url: "/app/upgrade/starter",
    mostPopular: false
  },
  {
    name: "Pro",
    price: 29.99,
    description:
      "Perfect for growing stores that need advanced AI credits, more product optimizations, and priority support.",
    features: [
      "Optimize up to 250 products",
      "Generate up to 4,500 AI credits",
      "Automatic keywords suggestions",
      "LLMs.txt generator for AI indexing",
      "Priority email support",
    ],
    url: "/app/upgrade/pro",
    mostPopular: true
  }
];

const testimonials = [
  {
    feedback: "The automation saved us tons of time. Finally, a tool that actually understands e-commerce SEO.",
    name: "Lucas Nguyen",
    photo: '/testimonial_1.webp',
    store: "FreshBox Organics"
  },
  {
    feedback: "Our team uses the metadata generator every day. It’s like having an SEO expert in-house — but smarter.",
    name: "Ethan Park",
    photo: '/testimonial_2.webp',
    store: "Nomad Travel Gear"
  },
  {
    feedback: "We’ve seen steady growth month after month. Zion SEO is now an essential part of our marketing toolkit.",
    name: "Emma Roberts",
    photo: '/testimonial_3.webp',
    store: "Luna & Co. Jewelry"
  },
  {
    feedback: "Since switching to Zion SEO, our pages not only rank higher but also get featured in AI-driven search tools.",
    name: "Chloe Anderson",
    photo: '/testimonial_4.webp',
    store: "EcoVibe Market"
  },
  {
    feedback: "We’ve tried other tools, but none delivered results like Zion SEO. The AI-driven insights are next-level.",
    name: "Maria Costa",
    photo: '/testimonial_5.webp',
    store: "HomeNest Decor"
  },
  {
    feedback: "The LLMS.txt generator gave us visibility on AI search faster than we expected. It's a game changer.",
    name: "Julia Carter",
    photo: '/testimonial_6.webp',
    store: "PetBloom Supplies"
  },
  {
    feedback: "Super easy to use, even for someone with no SEO background. Our online sales nearly doubled.",
    name: "Ryan Lee",
    photo: '/testimonial_7.webp',
    store: "UrbanThreads Apparel"
  },
  {
    feedback: "Zion SEO helped our store show up on Google in less than two weeks. The traffic boost was real — and consistent.",
    name: "Sarah Mitchell",
    photo: '/testimonial_8.webp',
    store: "Glow Haven Skincare"
  },
  {
    feedback: "I used to spend hours optimizing product pages. Now it’s all automated — and my conversions went up 30%.",
    name: "Daniel Ortiz",
    photo: '/testimonial_9.webp',
    store: "Techify Gadgets"
  },
];

export {
  clients,
  plans,
  testimonials
}