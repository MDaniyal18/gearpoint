/**
 * constants/siteData.js
 * All static content for the GearPoint Solutions website.
 * Extracted directly from gearpointcrm.com.
 */

export const SITE_NAME    = 'GearPoint Solutions';
export const SITE_TAGLINE = 'Technology solutions for non profits and small business';
export const SITE_EMAIL   = 'contact@gearpointcrm.com';
export const SITE_PHONE   = '+1 (800) 123-4567';
export const SITE_ADDRESS = '1452 Hughes Road, Suite 200, Grapevine, TX 76051';

// ─── Navigation ─────────────────────────────────────────────────
// Matches the exact nav items on gearpointcrm.com: home | crm | contact | order | about
export const NAV_LINKS = [
  { label: 'Home',    href: '/'        },
  { label: 'CRM',     href: '/crm'     },
  { label: 'Contact', href: '/contact' },
  { label: 'Order',   href: '/order'   },
  { label: 'About',   href: '/about'   },
];

// ─── Hero ────────────────────────────────────────────────────────
export const HERO = {
  eyebrow:  'GearPoint Solutions',
  tagline:  'Technology solutions for non profits and small business',
  heading:  'Take your non-profit management to the next level with technology adoption',
  cta:      'Schedule a Free Consultation',
  ctaHref:  '/contact',
};

// ─── Home Services ───────────────────────────────────────────────
export const SERVICES = [
  {
    id:    'consulting',
    icon:  '🤝',
    title: 'Non-Profit Consulting Services',
    description:
      'We help bring the efficient and state of art process and technology solutions to non-profits in the following areas:',
    features: [
      'Account Management',
      'Donor Management',
      'Campaign Management',
      'Fundraising Management',
      'Volunteer Management',
    ],
  },
  {
    id:    'custom',
    icon:  '📱',
    title: 'Custom Solutions',
    description:
      'We create custom apps using for both iOS and Android platform that serve to reach your clients. Our Platform provides customized approaches to make and change business logic, customize UI, and integrate with third-party apps and systems.',
    features: [
      'iOS App Development',
      'Android App Development',
      'Business Logic Customization',
      'Third-Party Integrations',
      'Custom UI/UX Design',
    ],
  },
  {
    id:    'support',
    icon:  '🛠️',
    title: 'Support Services',
    description:
      'We offer support of our IT solution to all our clients after the implementation phase. Also, we help to support already existing IT solutions.',
    features: [
      'Post-Implementation Support',
      'System Monitoring',
      'Certified Developer Team',
      'Business Analyst Support',
      'Performance Optimization',
    ],
  },
];

// ─── Stats ───────────────────────────────────────────────────────
export const STATS = [
  { value: '10+',  label: 'Years of Experience' },
  { value: '200+', label: 'Clients Served'      },
  { value: '500+', label: 'Projects Delivered'  },
  { value: '100%', label: 'Client Satisfaction' },
];

// ─── About Page ──────────────────────────────────────────────────
export const ABOUT = {
  heading: 'About us',
  heroBg: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80',
  body: [
    'GearPoint Solutions was founded by a group of passionate CRM professionals who recognized the untapped potential of small businesses in the digital age. We believe that every business, regardless of its size, should have access to the most advanced tools and technologies to help them better serve their customers and grow their business.',
    'Our team is dedicated to empowering small businesses by delivering customized CRM solutions that streamline their sales, marketing, and customer support processes. With GearPoint Solutions, you can trust that you\'re partnering with a team of experts who are passionate about helping your small business succeed.',
  ],
  values: [
    { title: 'Customer Success', body: 'Your success is our success. We measure our performance by the positive impact we have on your business.' },
    { title: 'Innovation',       body: 'We constantly strive to stay ahead of the curve by embracing new technologies and industry best practices.' },
    { title: 'Integrity',        body: 'We are committed to maintaining the highest ethical standards in all aspects of our business.' },
    { title: 'Collaboration',    body: 'We work closely with you and your team to develop solutions that are truly aligned with your business goals.' },
  ],
  footerBlurb: 'GearPoint Solutions LLC is a boutique small business technology consulting firm that provides IT solutions to small business. Our niche areas of focus are technology support for Salesforce CRM and Intuit Accounting Systems',
};

// ─── CRM Page ────────────────────────────────────────────────────
export const CRM = {
  heading: 'CRM Solutions',
  subheading: 'Salesforce & Intuit for Non-Profits and Small Business',
  body: [
    'GearPoint Solutions specializes in Salesforce CRM and Intuit Accounting implementation, customization, and ongoing support for non-profits and small businesses.',
    'We help your organization harness the full power of the world\'s #1 CRM platform to manage donors, volunteers, campaigns, and more — all from a single unified system.',
  ],
  features: [
    { icon: '☁️', title: 'Salesforce NPSP',          body: 'Non-Profit Success Pack configuration and customization tailored to your mission.' },
    { icon: '💼', title: 'Sales Cloud',               body: 'Streamline your pipeline, track opportunities, and close deals faster.' },
    { icon: '📊', title: 'Reports & Dashboards',      body: 'Real-time data insights to drive smarter decisions for your organization.' },
    { icon: '🔗', title: 'Third-Party Integrations',  body: 'Connect Salesforce with your email, marketing, and accounting tools seamlessly.' },
    { icon: '🧾', title: 'Intuit / QuickBooks',       body: 'Accounting and financial management integrated directly with your CRM.' },
    { icon: '🎓', title: 'Training & Adoption',       body: 'Staff training and change management to maximize your technology investment.' },
  ],
};

// ─── Contact Form ─────────────────────────────────────────────────
export const REQUEST_TYPES = [
  'Non-Profit Consulting',
  'Custom App Development',
  'Support Services',
  'CRM Implementation',
  'General Inquiry',
];

// ─── Footer Links ─────────────────────────────────────────────────
export const FOOTER_LINKS = {
  company: [
    { label: 'Home',    href: '/'        },
    { label: 'CRM',     href: '/crm'     },
    { label: 'Contact', href: '/contact' },
    { label: 'Order',   href: '/order'   },
    { label: 'About',   href: '/about'   },
  ],
  services: [
    { label: 'Non-Profit Consulting', href: '/crm'     },
    { label: 'Custom Solutions',      href: '/crm'     },
    { label: 'Support Services',      href: '/crm'     },
    { label: 'IT Implementations',    href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy',    href: '/privacy' },
    { label: 'Refund Policy',     href: '/refund'  },
    { label: 'Terms + Conditions',href: '/terms'   },
  ],
};
