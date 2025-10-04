
export const NAV_LINKS = [
  { name: 'Features', href: '#features' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Pricing', href: '#pricing' },
];

export const FEATURES = [
  {
    title: 'Intuitive Workflow',
    description: 'Our platform simplifies complex processes, allowing your team to focus on what truly matters. Boost productivity with a clean, user-friendly interface.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    title: 'Advanced Analytics',
    description: 'Gain deep insights into your performance with our powerful analytics dashboard. Track metrics, visualize data, and make informed decisions effortlessly.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  },
  {
    title: 'Seamless Integrations',
    description: 'Connect Aether with your favorite tools. Our robust API and pre-built integrations make it easy to create a unified ecosystem for your business.',
    icon: 'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V4a2 2 0 012-2h8a2 2 0 012 2v4z',
  },
   {
    title: '24/7 Premium Support',
    description: 'Our dedicated support team is available around the clock to assist you with any questions or issues, ensuring you get the most out of our platform.',
    icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
];

export const TESTIMONIALS = [
  {
    quote: "Aether has completely transformed our workflow. The efficiency gains are incredible, and the platform is a joy to use. I can't recommend it enough!",
    name: 'Sarah Johnson',
    title: 'CEO, Innovate Inc.',
    avatar: 'https://picsum.photos/id/237/100/100',
  },
  {
    quote: 'The analytics dashboard is a game-changer. We can now make data-driven decisions with confidence. The support team is also top-notch, always responsive and helpful.',
    name: 'Michael Chen',
    title: 'Marketing Director, Growth Co.',
    avatar: 'https://picsum.photos/id/238/100/100',
  },
  {
    quote: "Switching to Aether was the best decision we've made this year. The seamless integrations saved us countless hours of manual work.",
    name: 'Emily Rodriguez',
    title: 'Head of Operations, Synergize',
    avatar: 'https://picsum.photos/id/239/100/100',
  },
];

export const PRICING_PLANS = [
  {
    name: 'Starter',
    price: '$29',
    frequency: '/ month',
    description: 'For individuals and small teams getting started.',
    features: [
      '10 Projects',
      'Basic Analytics',
      'Email Support',
      '5 GB Storage',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$79',
    frequency: '/ month',
    description: 'For growing businesses that need more power.',
    features: [
      'Unlimited Projects',
      'Advanced Analytics',
      'Priority Support',
      '50 GB Storage',
      'Team Collaboration',
    ],
    cta: 'Choose Pro',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    frequency: '',
    description: 'For large organizations with custom needs.',
    features: [
      'Everything in Pro',
      'Dedicated Account Manager',
      'Custom Integrations',
      'On-premise option',
      '24/7 Phone Support',
    ],
    cta: 'Contact Us',
    popular: false,
  },
];

export const FOOTER_LINKS = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#pricing' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
};
