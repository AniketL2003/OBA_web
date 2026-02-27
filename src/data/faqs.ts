export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

export const faqs: FAQ[] = [
  {
    question: "How do I get started with OBA?",
    answer: "Getting started with OBA is simple! Sign up for a free trial, complete our quick setup process that guides you through configuring your store settings, and our onboarding team will help you get everything running smoothly.",
    category: "Getting Started",
  },
  {
    question: "How long does it take to set up OBA?",
    answer: "Most businesses can complete the basic setup in under 30 minutes. The full configuration typically takes 1-2 hours, depending on your specific requirements.",
    category: "Getting Started",
  },
  {
    question: "Do I need technical knowledge to use OBA?",
    answer: "No technical knowledge is required! OBA is designed to be intuitive and user-friendly. Our guided setup process and comprehensive documentation make it easy for anyone to get started.",
    category: "Getting Started",
  },
  {
    question: "Can I manage inventory across multiple stores?",
    answer: "Yes! OBA supports multi-store inventory management, allowing you to track and manage stock across all your locations from a single dashboard.",
    category: "Features",
  },
  {
    question: "Does OBA support mobile apps?",
    answer: "Yes, OBA has native mobile apps for both iOS and Android, allowing you to manage orders on the go.",
    category: "Features",
  },
  {
    question: "Can I export my order data?",
    answer: "Absolutely! OBA provides comprehensive data export functionality, allowing you to export orders, reports, and analytics in various formats including CSV and Excel.",
    category: "Features",
  },
  {
    question: "How does the delivery zone management work?",
    answer: "OBA allows you to create custom delivery zones, set delivery fees for each zone, assign delivery runners to specific areas, and track delivery status in real-time.",
    category: "Features",
  },
  {
    question: "What pricing plans do you offer?",
    answer: "We offer flexible pricing plans tailored to businesses of all sizes. Plans range from Starter for small businesses to Enterprise solutions for large organizations. All plans include a free trial period.",
    category: "Pricing & Plans",
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start your trial.",
    category: "Pricing & Plans",
  },
  {
    question: "Can I change my plan later?",
    answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments.",
    category: "Pricing & Plans",
  },
  {
    question: "Are there any setup fees or hidden charges?",
    answer: "No setup fees or hidden charges! Our pricing is transparent - you pay only for your chosen plan with no additional costs.",
    category: "Pricing & Plans",
  },
  {
    question: "How secure is my data?",
    answer: "Security is our top priority. We use industry-standard encryption, regular security audits, and comply with major data protection regulations. Your data is stored securely and backed up regularly.",
    category: "Security",
  },
  {
    question: "Who has access to my data?",
    answer: "Only you and the team members you explicitly invite have access to your data. We never share your data with third parties, and our staff can only access your data with your explicit permission for support purposes.",
    category: "Security",
  },
  {
    question: "Is my payment information safe?",
    answer: "Yes, your payment information is securely processed through PCI-DSS compliant payment gateways. We never store your full payment card details on our servers.",
    category: "Security",
  },
  {
    question: "Can I add multiple team members?",
    answer: "Yes! Depending on your plan, you can add multiple team members with different roles and permissions. Role-based access control ensures each team member has appropriate access levels.",
    category: "Account & Users",
  },
  {
    question: "How do I cancel my account?",
    answer: "You can cancel your account at any time from your account settings. There are no cancellation fees, and you'll retain access until the end of your current billing period.",
    category: "Account & Users",
  },
  {
    question: "Can I migrate data from my existing system?",
    answer: "Yes! We offer data migration assistance for customers moving from other platforms. Our support team can help you import your existing order data, inventory, and customer information.",
    category: "Account & Users",
  },
];
