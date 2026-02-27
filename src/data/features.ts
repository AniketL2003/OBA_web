  export interface Feature {
    title: string;
    description: string;
    icon: string;
    category?: string;
  }

  export const coreFeatures: Feature[] = [
    {
      title: "Order Creation",
      description: "Create your orders with ease and handle them smartly.",
      icon: "/images/features/OrderCreationIcon.svg",
    },
    {
      title: "Notifications",
      description: "Deliver messages, email, and SMS into your order flow.",
      icon: "/images/features/Notifications.svg",
    },
    {
      title: "Order Processing",
      description: "Handle order processing from inventory to delivery.",
      icon: "/images/features/Processing.svg",
    },
    {
      title: "Invoice Generation",
      description: "Generate your order invoice easily and manage them.",
      icon: "/images/features/Invoice.svg",
    },
    {
      title: "Analytics",
      description: "Manage your insights with ease and data with efficiency.",
      icon: "/images/features/Analytics.svg",
    },
    {
      title: "Delivery",
      description: "Deliver orders in real-time with comprehensive status updates and notifications.",
      icon: "/images/features/Delivery.svg",
    },
  ];

  export const businessOwnerFeatures: Feature[] = [
    {
      title: "Product & Catalog Management",
      description: "Organize products with category trees, manage stock, and control pricing from one dashboard.",
      icon: "/images/features/Product.svg",
    },
    {
      title: "Real-time Analytics",
      description: "Track trends, monitor inventory, and make data-driven decisions instantly.",
      icon: "/images/features/Analytics.svg",
    },
  ];

  export const operationsFeatures: Feature[] = [
    {
      title: "Order Processing",
      description: "Filter, search, and export orders with advanced filtering and bulk operations.",
      icon: "/images/features/orderProcess.svg",
    },
    {
      title: "Delivery Management",
      description: "Set delivery zones, configure fees, and manage runner assignments efficiently.",
      icon: "/images/features/DeliveryMgmt.svg",
    },
  ];

  export const platformFeatures: Feature[] = [
    { title: "Offers & Coupons", icon: "⚡", description: "" },
    { title: "Cancellation Rules", icon: "⏰", description: "" },
    { title: "Area Selection", icon: "📍", description: "" },
    { title: "Dynamic Pricing", icon: "💰", description: "" },
    { title: "Filters", icon: "🔍", description: "" },
    { title: "Data Export", icon: "📤", description: "" },
    { title: "Role Management", icon: "👥", description: "" },
    { title: "Auto-Sync", icon: "🔄", description: "" },
    { title: "Notifications", icon: "🔔", description: "" },
    { title: "Tracking", icon: "👁️", description: "" },
    { title: "Security", icon: "🔒", description: "" },
    { title: "Mobile App", icon: "📱", description: "" },
  ];
