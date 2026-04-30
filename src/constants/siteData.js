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
// Matches the exact nav items on gearpointcrm.com: home | crm | non-profits | about
export const NAV_LINKS = [
  { label: 'Home',        href: '/' },
  { label: 'CRM',         href: '/crm' },
  { label: 'Non-Profits', href: '/non-profits' },
  { label: 'Contact',     href: '/contact' },
  { label: 'Order',       href: '/order' },
  { label: 'About',       href: '/about' },
];

// ─── Hero ────────────────────────────────────────────────────────
export const HERO = {
  eyebrow:  'GearPoint Solutions',
  tagline:  'Technology solutions for non profits and small business',
  heading:  'Take your non-profit management to the next level with technology adoption',
  cta:      'Schedule a Free Consultation',
  ctaHref:  '/contact',
};

// ─── Home Areas of Practice ───────────────────────────────────────────────
export const AREAS_OF_PRACTICE = [
  {
    id:    'salesforce-crm',
    icon:  '☁️',
    title: 'Salesforce CRM',
    description:
      'We specialize in Salesforce CRM solutions to strategize the way small business owners run their small business and nonprofit organizations, to optimize their production and generation of positive results.',
  },
  {
    id:    'intuit-accounting',
    icon:  '📊',
    title: 'Intuit Accounting Software',
    description:
      'We provide specialized services in Intuit Accounting software services. This includes support for servicing and upgrading your accounting system. We have a team of certified Intuit Software professionals.',
  },
  {
    id:    'managed-it',
    icon:  '🛠️',
    title: 'Managed IT Services',
    description:
      'We offer managed IT services that provide businesses with proactive monitoring, maintenance, and support for their IT infrastructure. This allows our clients to focus on their core business while we ensure their technology is running efficiently and securely.',
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
export const CRM_CONTENT = {
  heading: 'C . R . M',
  intro: 'GearPoint Solutions is geared to assist small businesses in managing their operations with a simplistic approach. We work to serve small scale nonprofits to provide them with an organized and efficient business foundation. At Gearpoint Solutions, we understand the value of meaningful customer relationship management and do our best to instill exceptional resources for the best in business. With a low implementation cost and elite performance, a CRM system from Gearpoint Solutions is a segue to success.',
  sections: [
    {
      icon: '🎯',
      title: 'CRM Strategy',
      subtitle: 'Why a nonprofit should invest in a CRM ?',
      body: 'Customer relationships are the centerpiece of non-profits and a pivotal step to secure influential investments. A CRM is designed to work for the business owner and direct all relations within the core of the operation. Current non-profits face technological challenges without the proper equipment to communicate, branch out, and progress. With the integration of a CRM system, non-profits can leverage technology to advance their administration capabilities and maintain their donors and volunteers using modernized management resources. The existence of a non-profit organization solely depends on its association with other corporations which prove the vital importance of a CRM within the non-profit sphere.'
    },
    {
      icon: '✉️',
      title: 'Email Marketing',
      subtitle: '',
      body: 'Digital communication is a key player in the operation of non-profits. Email marketing is a brilliant way to connect non-profits with current and potential partners, donors, and volunteers. With engaging email sequences integrated within a communication network, recipients can be notified of events, announcements, and critical news related to the activity and operations of the non-profit organization. Email marketing can be utilized to intrigue and involve outsiders in the organization’s ventures with timely emails that inform them with relative information.'
    },
    {
      icon: '🎁',
      title: 'FREE set up',
      subtitle: 'Helping nonprofits acquire Salesforce CRM licenses for Free. Do all the paperwork and procedures.',
      body: 'A CRM license guarantees a full overview and granted control over one’s business. At Gearpoint Solutions, we provide costless and hassle-free CRM licensing for non-profit organizations from Salesforce, the ultimate source for CRM integration. We handle all the necessary paperwork and procedures to provide non-profits instant access to their partnerships and promising potential. Our offer to give non-profits free CRM licensing is a valid opportunity for small businesses to elevate the structure of their relationships. This free resource can empower non-profits to systematically conduct email marketing, fund raising, and donor/volunteer management under one umbrella. For Gearpoint Solutions, our focus is how small businesses and organizations can most effectively reach their goals.'
    },
    {
      icon: '💰',
      title: 'Fund Raising',
      subtitle: 'Set up the fundraising platform for nonprofits',
      body: 'Fundraising is a central aspect of a non-profit and is responsible for generating the organization’s financial support. Gearpoint Solutions can set up a fundraising platform for non-profits that is stabilized and safe to resource funds. This action plan involves locating, connecting, and securing financial investors who are passionate about establishing a partnership with the organization. The fundamental relationship is then utilized to initiate financial incentives to raise both awareness and monetary gain for the organization’s operations. Gearpoint Solutions finalizes the fundraising platform with a dependable process that ensures funds are entrusted to the organization and promote its progression.'
    },
    {
      icon: '☁️',
      title: 'Salesforce CRM',
      subtitle: 'Set up of CRM system for nonprofits using Salesforce.',
      body: 'GearPoint Solutions solves the imminent problems of business to customer relations with the installation of a straightforward, highly functional CRM system. Our mission is to make customer relationships manageable by establishing the specifications of the CRM which correlate with the individual needs of a non-profit. We ensure the incorporation of their partners, donors, volunteers, and communication platforms to enhance their overall operations. We work alongside non-profits to evaluate their data, services, and associations to construct their CRM according to their needs. It is our privilege to promote the power of non-profits and help them run methodically, aligned with their motivation.'
    }
  ],
  outro: 'Gearpoint Solutions is dedicated to assisting small businesses with their clients 24/7, regardless of the need. We are devoted to offering our insight, technical installation services, and customer support for non-profits who need our help. We prioritize customer satisfaction and guarantee their contentment in all we do. It is our privilege to serve those who help others. We want our CRM services to make a positive impact in the lives of small business owners who desire to make a difference in the way they do business. Our aim is to assess and implement CRMs with success at the forefront of our agenda.'
};

// ─── Non-Profits Page ────────────────────────────────────────────────────
export const NON_PROFITS_CONTENT = {
  heading: 'Non-Profits Page',
  intro: 'Gearpoint Solutions is geared to assist small businesses in managing their operations with a simplistic approach. We work to serve small scale nonprofits to provide them with an organized and efficient business foundation. At Gearpoint Solutions, we understand the value of meaningful customer relationship management and do our best to instill exceptional resources for the best in business. With a low implementation cost and elite performance, a CRM system from Gearpoint Solutions is a segue to success.\n\nOur software implementation services offer management tools with the industry’s leading technologies to implement a systematic program that enables small business owners to assess their business activities, connections, and commitments, all in one place. We provide CRM solutions to strategize the way small business owners run their nonprofit organizations, to optimize their production and generation of positive results.',
  sections: [
    {
      icon: '📈',
      title: '1. CRM strategy - Why a nonprofit should invest in a CRM',
      body: 'Customer relationships are the centerpiece of non-profits and a pivotal step to secure influential investments. A CRM is designed to work for the business owner and direct all relations within the core of the operation. Current non-profits face technological challenges without the proper equipment to communicate, branch out, and progress. With the integration of a CRM system, non-profits can leverage technology to advance their administration capabilities and maintain their donors and volunteers using modernized management resources. The existence of a non-profit organization solely depends on its association with other corporations which prove the vital importance of a CRM within the non-profit sphere.'
    },
    {
      icon: '📝',
      title: '2. Helping nonprofits acquire Salesforce CRM licenses for Free. Do all the paperwork and procedures.',
      body: 'A CRM license guarantees a full overview and granted control over one’s business. At Gearpoint Solutions, we provide costless and hassle-free CRM licensing for non-profit organizations from Salesforce, the ultimate source for CRM integration. We handle all the necessary paperwork and procedures to provide non-profits instant access to their partnerships and promising potential. Our offer to give non-profits free CRM licensing is a valid opportunity for small businesses to elevate the structure of their relationships. This free resource can empower non-profits to systematically conduct email marketing, fund raising, and donor/volunteer management under one umbrella. For Gearpoint Solutions, our focus is how small businesses and organizations can most effectively reach their goals.'
    },
    {
      icon: '⚙️',
      title: '3. CRM Set up - Set up of CRM system for nonprofits using Salesforce.',
      body: 'Gearpoint Solutions solves the imminent problems of business to customer relations with the installation of a straightforward, highly functional CRM system. Our mission is to make customer relationships manageable by establishing the specifications of the CRM which correlate with the individual needs of a non-profit. We ensure the incorporation of their partners, donors, volunteers, and communication platforms to enhance their overall operations. We work alongside non-profits to evaluate their data, services, and associations to construct their CRM according to their needs. It is our privilege to promote the power of non-profits and help them run methodically, aligned with their motivation.'
    },
    {
      icon: '📬',
      title: '4. Set up and integrate the Email Marketing',
      body: 'Digital communication is a key player in the operation of non-profits. Email marketing is a brilliant way to connect non-profits with current and potential partners, donors, and volunteers. With engaging email sequences integrated within a communication network, recipients can be notified of events, announcements, and critical news related to the activity and operations of the non-profit organization. Email marketing can be utilized to intrigue and involve outsiders in the organization’s ventures with timely emails that inform them with relative information.'
    },
    {
      icon: '💎',
      title: '5. Set up the fundraising platform for nonprofits',
      body: 'Fundraising is a central aspect of a non-profit and is responsible for generating the organization’s financial support. Gearpoint Solutions can set up a fundraising platform for non-profits that is stabilized and safe to resource funds. This action plan involves locating, connecting, and securing financial investors who are passionate about establishing a partnership with the organization. The fundamental relationship is then utilized to initiate financial incentives to raise both awareness and monetary gain for the organization’s operations. Gearpoint Solutions finalizes the fundraising platform with a dependable process that ensures funds are entrusted to the organization and promote its progression.'
    },
    {
      icon: '🛠️',
      title: '6. Provide ongoing technical installation and support',
      body: 'Gearpoint Solutions is dedicated to assisting small businesses with their clients 24/7, regardless of the need. We are devoted to offering our insight, technical installation services, and customer support for non-profits who need our help. We prioritize customer satisfaction and guarantee their contentment in all we do. It is our privilege to serve those who help others. We want our CRM services to make a positive impact in the lives of small business owners who desire to make a difference in the way they do business. Our aim is to assess and implement CRMs with success at the forefront of our agenda.'
    }
  ]
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
    { label: 'Home',        href: '/' },
    { label: 'CRM',         href: '/crm' },
    { label: 'Non-Profits', href: '/non-profits' },
    { label: 'Contact',     href: '/contact' },
    { label: 'Order',       href: '/order' },
    { label: 'About',       href: '/about' },
  ],
  services: [
    { label: 'Salesforce CRM',             href: '/crm' },
    { label: 'Intuit Accounting Software', href: '/crm' },
    { label: 'Managed IT Services',        href: '/crm' },
  ],
  legal: [
    { label: 'Privacy Policy',    href: '/privacy' },
    { label: 'Refund Policy',     href: '/refund'  },
    { label: 'Terms + Conditions',href: '/terms'   },
  ],
};
