export const site = {
  name: "Nasiru Lawal Kwargana",
  displayName: "Naseer Lawan",
  shortName: "Naseer",
  role: "Full-stack engineer",
  location: "Abuja, Nigeria",
  email: "nasirulawalkwargana@gmail.com",
  website: "https://maestronasir.com",
  linkedin: "https://linkedin.com/in/nasiru-kwargana-724125300",
  github: "https://github.com/MeastroNass",
  phone: "+234 812 296 4973",
  whatsapp: "https://wa.me/2348122964973",
  pagesUrl: "https://meastronass.github.io/myportfolio",
};

export const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
] as const;

export const hero = {
  ticker: "Available for projects",
  displayRole: "SOFTWARE ENGINEER",
  headlineLead: "Hi, I’m Nasiru —",
  headlineRest: "I ship products",
  headlineAccent: "end to end.",
  subhead:
    "I design, build, and deploy production systems — frontends, APIs, databases, and the workflows that keep them running.",
  manifesto:
    "From idea to launch. I build clean, scalable products — marketplaces, operations tools, and payment flows — engineered to move fast, stay reliable, and perform at real-world scale.",
  roleLine: "Full-stack engineer at Propabridge",
  skills: ["React", "Next.js", "Django"],
  primaryCta: { href: "#work", label: "View my work" },
  secondaryCta: { href: "https://wa.me/2348122964973", label: "Message on WhatsApp" },
};

export const stackLogos = [
  { name: "React", src: "/stack/react.svg" },
  { name: "OpenAI", src: "/stack/openai.svg" },
  { name: "Perplexity", src: "/stack/perplexity.svg" },
  { name: "Next.js", src: "/stack/nextdotjs.svg" },
  { name: "Claude", src: "/stack/claude.svg" },
  { name: "Grok", src: "/stack/grok.svg" },
  { name: "TypeScript", src: "/stack/typescript.svg" },
  { name: "Node.js", src: "/stack/nodedotjs.svg" },
  { name: "Django", src: "/stack/django.svg" },
  { name: "PostgreSQL", src: "/stack/postgresql.svg" },
  { name: "AWS", src: "/stack/amazonwebservices.svg" },
  { name: "Git", src: "/stack/git.svg" },
] as const;

export const projects = [
  {
    id: "propabridge",
    title: "Propabridge",
    category: "Marketplace",
    href: "https://propabridge.com",
    year: "2026",
    image: "/work/propabridge-team.jpg",
    alt: "Nasiru with the Propabridge team at GITEX AI Nigeria",
    summary:
      "A nationwide platform for listing, buying, selling and verifying property across Nigeria — owned end-to-end from the interface to the database.",
    role: "Full-stack engineer",
    highlights: [
      "Listing, search and filter flows for agents and buyers",
      "Property verification workflows and secure authentication",
      "Node.js / Python APIs, PostgreSQL modelling and cloud deploy",
      "Shown with the team at GITEX AI Nigeria",
    ],
    stack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    id: "hexacafe",
    title: "Hexacafe",
    category: "Operations",
    href: "https://cafehexa.com",
    year: "2025",
    image: "/work/hexa-cafe.jpg",
    alt: "Hexa Cafe storefront sign on the building",
    summary:
      "Restaurant management for Hexa Cafe: inventory, online ordering and Paystack payments, running on a server in the café office.",
    role: "Freelance full-stack",
    highlights: [
      "Inventory tracking tied to live orders",
      "Customer ordering with Paystack checkout",
      "On-premise Linux server setup and ongoing maintenance",
    ],
    stack: ["React", "Node.js", "PostgreSQL", "Paystack", "Linux"],
  },
  {
    id: "ecojindu",
    title: "Ecojindu Shuttle",
    category: "Transport",
    href: "",
    year: "2025",
    image: "/work/shuttle.jpg",
    alt: "Coach bus on a road at golden hour",
    summary:
      "A transport operations platform that replaced manual booking with online ride orders, dispatch tracking and automated workflows.",
    role: "Freelance full-stack",
    highlights: [
      "Online ride ordering instead of phone-and-paper booking",
      "Dispatch tracking for the operations team",
      "End-to-end automation of the daily run",
    ],
    stack: ["React", "Python", "Django", "PostgreSQL"],
  },
  {
    id: "listing-workflows",
    title: "Listing workflows",
    category: "Product",
    href: "https://propabridge.com",
    year: "2026",
    image: "/work/property-expo.jpg",
    alt: "Nasiru at a Nigerian real-estate industry expo",
    summary:
      "The verification and listing pipeline inside Propabridge — how a property moves from an agent’s submission to a trusted public listing.",
    role: "Product engineering",
    highlights: [
      "Submission and review steps for listings",
      "Verification checks before a property goes live",
      "Search that matches how agents actually look for stock",
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "Auth"],
  },
  {
    id: "paystack-checkout",
    title: "Paystack checkout",
    category: "Payments",
    href: "https://cafehexa.com",
    year: "2025",
    image: "/work/checkout.jpg",
    alt: "Card payment at a counter",
    summary:
      "Paystack wired into Hexa Cafe so online orders, inventory and settlement stay in one loop instead of a spreadsheet after the fact.",
    role: "Payments integration",
    highlights: [
      "Checkout on the ordering flow",
      "Payment events reconciled with stock",
      "Fewer missed or double-counted orders",
    ],
    stack: ["Paystack API", "Node.js", "PostgreSQL"],
  },
  {
    id: "dispatch-automation",
    title: "Dispatch automation",
    category: "Automation",
    href: "",
    year: "2025",
    image: "/work/build-session.jpg",
    alt: "Building product together over laptops",
    summary:
      "Dispatch and ops automation for Ecojindu Shuttle — the layer that tells the yard what to send out, instead of chasing messages all morning.",
    role: "Workflow automation",
    highlights: [
      "Orders flow into a dispatch queue",
      "Status tracking for drivers and ops",
      "Fewer hand-offs between WhatsApp groups and notebooks",
    ],
    stack: ["React", "Django", "PostgreSQL", "Automation"],
  },
] as const;

export function mailTo(subject: string, body?: string) {
  const query = new URLSearchParams({ subject });
  if (body) query.set("body", body);
  return `mailto:${site.email}?${query.toString()}`;
}

export const briefMail = mailTo(
  "Project brief for Nasiru Lawal Kwargana",
  [
    "Hi Nasiru,",
    "",
    "I’d like to share a brief.",
    "",
    "What we need:",
    "Timeline:",
    "Budget range:",
    "",
    "Thanks,",
  ].join("\n"),
);

export const services = [
  {
    index: "01",
    title: "Product engineering",
    description:
      "React and Next.js frontends paired with Node or Django APIs, modelled around how people actually use the product.",
    tags: ["Next.js", "TypeScript", "REST"],
  },
  {
    index: "02",
    title: "Workflow automation",
    description:
      "Replace spreadsheet hopscotch with reliable pipelines — booking, verification, dispatch, and internal ops.",
    tags: ["Python", "Google ADK", "Zoho"],
  },
  {
    index: "03",
    title: "Payments & commerce",
    description:
      "Online ordering and Paystack checkout wired into inventory, so money and stock stay in sync.",
    tags: ["Paystack", "Node.js", "PostgreSQL"],
  },
  {
    index: "04",
    title: "Cloud & on-prem",
    description:
      "CI/CD on GitHub, AWS or GCP when you need scale, and local Linux servers when the office wants the box in-house.",
    tags: ["AWS", "Linux", "CI/CD"],
  },
  {
    index: "05",
    title: "AI-assisted tooling",
    description:
      "Practical agent workflows with the Google Agent Development Kit — internal tools that save hours, not demos.",
    tags: ["Google ADK", "Python", "Product"],
  },
] as const;

export const about = {
  kicker: "About",
  title: "Ships the whole stack, not a single layer.",
  body: "Mid-level full-stack engineer with two years shipping production systems. I have built a nationwide property listing and verification marketplace, a restaurant inventory and ordering platform with Paystack, and a ride-booking system that replaced manual dispatch. I work comfortably with clients and non-technical teams, and I pick up new stacks quickly.",
};

export const stats = [
  { value: 2, suffix: "+", label: "Years shipping" },
  { value: 3, suffix: "", label: "Production systems" },
  { value: 10, suffix: "+", label: "Tools in daily use" },
] as const;

export const stories = [
  {
    image: "/work/gitex-table.jpg",
    alt: "Conversation at GITEX AI Nigeria 2026",
  },
  {
    image: "/work/property-expo.jpg",
    alt: "At a real-estate industry expo",
  },
  {
    image: "/work/propabridge-team.jpg",
    alt: "Propabridge team at GITEX",
  },
  {
    image: "/work/build-session.jpg",
    alt: "Late-night build session with the team",
  },
] as const;

export const processSteps = [
  {
    title: "Discover",
    body: "Map the current process, the people who run it, and the constraints that actually matter — time, money, and the tools already in place.",
    image: "/process/discover.jpg",
    alt: "Notebooks and laptop during discovery",
  },
  {
    title: "Define",
    body: "Turn that picture into a thin slice: data model, screens, and the one workflow we will prove first.",
    image: "/process/define.jpg",
    alt: "Wireframes on a desk",
  },
  {
    title: "Create",
    body: "Build the interface, API, and database together. Ship to a staging URL early so feedback is on a real product, not a slide.",
    image: "/process/create.jpg",
    alt: "Code on a laptop screen",
  },
  {
    title: "Deliver",
    body: "Deploy, document, and hand over. Cloud or on-prem, with CI/CD so the next change is not a weekend fire drill.",
    image: "/process/deliver.jpg",
    alt: "Dashboard charts after launch",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Nasiru took a messy booking process and turned it into a system the operations team actually uses — not another unused dashboard.",
    name: "Operations lead",
    role: "Transport client",
  },
  {
    quote:
      "He set up the café stack end to end: ordering, payments, inventory, and the office server. We did not need a separate vendor for each piece.",
    name: "Owner",
    role: "Hospitality client",
  },
  {
    quote:
      "Clear updates, careful reviews, and features that ship. The listing and verification flows finally match how agents work on the ground.",
    name: "Product collaborator",
    role: "Property marketplace",
  },
] as const;

export const pricing = [
  {
    name: "Project sprint",
    price: "Scoped",
    period: "2–6 weeks",
    description: "A contained product slice with a clear finish line.",
    features: [
      "Discovery workshop and written scope",
      "Design-to-code for one primary flow",
      "Staging URL and handover notes",
      "One round of post-launch fixes",
    ],
    cta: "Email a brief",
  },
  {
    name: "Ongoing build",
    price: "Retainer",
    period: "monthly",
    description: "A dedicated engineer for the next set of features.",
    features: [
      "Weekly planning and shipping cadence",
      "Frontend, API, and database work",
      "CI/CD and environment care",
      "Async updates that non-engineers can follow",
    ],
    cta: "Start a conversation",
    featured: true,
  },
] as const;

export const faqs = [
  {
    q: "Do you only work with startups?",
    a: "No. Recent work includes a property marketplace, a café, a shuttle operator, and civic-tech tooling. The common thread is a real operational problem, not a company stage.",
  },
  {
    q: "Can you join an existing team?",
    a: "Yes. I am comfortable with Git-based collaboration, code review, and CI/CD, and I adapt quickly to the stack already in the repo.",
  },
  {
    q: "Where are you based?",
    a: "Wuye, Abuja. Remote collaboration is the default; on-site work in Abuja is straightforward when a server or workshop needs to happen in the room.",
  },
  {
    q: "What does a first week look like?",
    a: "Access, a walkthrough of the current process, and a thin plan for the first shippable slice. You should see something running in staging before the scope balloons.",
  },
] as const;
