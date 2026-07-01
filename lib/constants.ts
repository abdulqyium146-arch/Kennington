export const BUSINESS = {
  name: "Lockstar Locksmith Kennington",
  shortName: "Lockstar Locksmith",
  phone: "07984 547185",
  phoneHref: "tel:+447984547185",
  email: "info@lockstarlocksmithkennington.com",
  address: {
    street: "Kennington Road",
    city: "London",
    postcode: "SE11",
    county: "Greater London",
    country: "GB",
  },
  geo: {
    lat: 51.4898,
    lng: -0.1077,
  },
  domain: "https://lockstarlocksmithkennington.com",
  hours: "24/7 - 365 days a year",
  responseTime: "20-30 minutes",
  established: "2015",
  description:
    "Lockstar Locksmith Kennington provides 24/7 emergency locksmith services across Kennington, SE11 and Greater London. DBS checked, fully insured, fast response.",
  tagline: "Your Trusted Local Locksmith — Available 24/7",
  emergencyTagline: "Locked Out? We're 20–30 Minutes Away.",
  services: [
    "Emergency Locksmith",
    "Residential Locksmith",
    "Commercial Locksmith",
    "Auto Locksmith",
    "Lock Replacement",
    "Lock Repair",
    "Lock Installation",
    "UPVC Door Repairs",
    "Lockout Services",
    "Burglary Repairs",
    "Smart Locks",
    "Security Upgrades",
  ],
  serviceAreas: [
    "Kennington",
    "Kennington SE11",
    "Vauxhall",
    "Lambeth",
    "Oval",
    "Stockwell",
    "Elephant & Castle",
    "Waterloo",
    "Westminster",
    "Kensington",
    "Chelsea",
    "Brixton",
    "Camberwell",
    "Borough",
    "Bermondsey",
    "Peckham",
    "Battersea",
    "Clapham",
  ],
  trustSignals: [
    "DBS Checked",
    "Fully Insured",
    "24/7 Available",
    "20-30 Min Response",
    "No Call-Out Fee",
    "Transparent Pricing",
    "Licensed & Vetted",
    "Local & Trusted",
  ],
  socialProof: {
    reviewCount: 247,
    rating: 4.9,
    platform: "Google",
    yearsTrading: 9,
    jobsCompleted: 5000,
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Emergency Locksmith", href: "/services/emergency-locksmith" },
      { label: "Residential Locksmith", href: "/services/residential-locksmith" },
      { label: "Commercial Locksmith", href: "/services/commercial-locksmith" },
      { label: "Auto Locksmith", href: "/services/auto-locksmith" },
      { label: "Lock Replacement", href: "/services/lock-replacement" },
      { label: "Lock Repair", href: "/services/lock-repair" },
      { label: "Lock Installation", href: "/services/lock-installation" },
      { label: "UPVC Door Repairs", href: "/services/upvc-door-repairs" },
      { label: "Lockout Services", href: "/services/lockout-services" },
      { label: "Burglary Repairs", href: "/services/burglary-repairs" },
      { label: "Smart Locks", href: "/services/smart-locks" },
      { label: "Security Upgrades", href: "/services/security-upgrades" },
    ],
  },
  {
    label: "Areas",
    href: "/locations",
    children: [
      { label: "Kennington", href: "/locations/kennington" },
      { label: "Kennington SE11", href: "/locations/kennington-se11" },
      { label: "Kennington Road", href: "/locations/kennington-road" },
      { label: "Kensington", href: "/locations/kensington" },
      { label: "Abingdon, Oxfordshire", href: "/locations/abingdon-oxfordshire" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const REVIEWS = [
  {
    id: 1,
    name: "Sarah M.",
    location: "Kennington",
    rating: 5,
    text: "Locked myself out at 11pm on a Sunday — they arrived within 25 minutes. Professional, friendly, and charged exactly what was quoted. Cannot recommend Lockstar highly enough.",
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "James T.",
    location: "Vauxhall",
    rating: 5,
    text: "Had my front door lock replaced after a break-in. The technician was calm, efficient and explained everything clearly. New locks fitted perfectly. Excellent service.",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Priya K.",
    location: "Oval",
    rating: 5,
    text: "Called at 7am when I couldn't get into my flat before work. The locksmith arrived in under 30 minutes, sorted it quickly and professionally. Great value too.",
    date: "3 weeks ago",
  },
  {
    id: 4,
    name: "David R.",
    location: "Lambeth",
    rating: 5,
    text: "Used Lockstar for our office building — they upgraded all our commercial locks and installed a new master key system. Thorough, knowledgeable and great value.",
    date: "2 months ago",
  },
  {
    id: 5,
    name: "Emma L.",
    location: "Elephant & Castle",
    rating: 5,
    text: "Brilliant service. My key broke in the lock at night and they fixed it within the hour. Fair price, no hidden charges, and the locksmith was really reassuring.",
    date: "1 week ago",
  },
  {
    id: 6,
    name: "Mark B.",
    location: "Stockwell",
    rating: 5,
    text: "UPVC door wouldn't close properly after an attempted break-in. Lockstar came the same day and repaired everything. House felt secure again. Highly recommended.",
    date: "3 months ago",
  },
] as const;

export const FAQS = [
  {
    question: "How quickly can you respond to an emergency lockout in Kennington?",
    answer:
      "Our average emergency response time in Kennington and SE11 is 20–30 minutes. We operate 24 hours a day, 7 days a week, 365 days a year — including bank holidays and Christmas Day.",
  },
  {
    question: "Are you available 24 hours a day?",
    answer:
      "Yes. Lockstar Locksmith Kennington provides genuine 24/7 emergency locksmith cover. There is no extra charge for night, weekend or bank holiday callouts — our prices are fully transparent and quoted upfront.",
  },
  {
    question: "How much does an emergency locksmith cost in Kennington?",
    answer:
      "Our prices start from £69 for a standard lockout. We provide a fixed, no-obligation quote before any work begins — no hidden fees, no surprise charges. The final price depends on the type of lock and time of day.",
  },
  {
    question: "Are your locksmiths DBS checked and fully insured?",
    answer:
      "Every Lockstar technician is DBS (Disclosure and Barring Service) checked, fully insured with public liability cover, and trained to MLA (Master Locksmiths Association) standards. Your property is in safe hands.",
  },
  {
    question: "Can you open a lock without breaking it?",
    answer:
      "In the majority of cases, yes. Our non-destructive entry techniques mean we can open most standard and high-security locks without drilling. We will always attempt non-destructive entry first and advise you honestly if a lock cannot be saved.",
  },
  {
    question: "Do you replace and supply new locks?",
    answer:
      "Yes. We carry a full range of British Standard, BS3621, and high-security locks from brands including Yale, Mul-T-Lock, ERA, and Banham. We can advise on the best lock for your door and fit it on the same visit.",
  },
  {
    question: "Do you cover areas outside Kennington?",
    answer:
      "We primarily serve Kennington (SE11) and surrounding areas including Vauxhall, Oval, Stockwell, Elephant & Castle, Waterloo, Westminster, Lambeth, and across South and Central London. Call us to check if we cover your exact postcode.",
  },
  {
    question: "What do I do if I've been burgled?",
    answer:
      "Call 999 first if you feel unsafe, then call us. We provide emergency burglary repair services — boarding up, temporary security, and permanent lock replacement. We can usually arrive within 30 minutes and will make your property secure the same day.",
  },
] as const;
