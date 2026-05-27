export const BUSINESS = {
  tagline: "Your Trusted Reefer Freight Specialists",
  subtitle:
    "Temperature-controlled trucking excellence across the Western United States",

  stats: [
    { value: "10+", label: "Years Experience" },
    { value: "98%", label: "On-Time Delivery Rate" },
    { value: "11", label: "States Covered" },
    { value: "±1°F", label: "Temp Variance Tolerance" },
  ],

  whoWeAre: {
    lead: "We are a California-based, owner-operated refrigerated (reefer) trucking company running authority under our own MC# and DOT number out of Fresno, CA — the heart of the nation's most productive agricultural corridor. Our business was built from the ground up by operators who understand the cold chain, the produce markets, and the relentless standards that perishable freight demands.",
    detail:
      "Unlike large carriers that treat temperature-controlled freight as an afterthought, reefer hauling is our core specialty. Every load we touch is treated with the same discipline: pre-trip inspection of the reefer unit, confirmed set points before departure, continuous temperature logging, and direct driver accountability from pickup to delivery. We also handle local dry van loads across the Central Valley and Western U.S.",
  },

  specializations: [
    {
      badge: "TARGET: 32°F – 40°F",
      badgeClass: "bg-secondary/20 text-secondary",
      title: "Fresh Produce & Berries",
      description:
        "California's San Joaquin Valley harvest routes — grapes, stone fruit, citrus, leafy greens, and berries requiring tight temperature windows.",
      icon: "eco",
      colSpan: 2 as const,
    },
    {
      badge: "TARGET: 0°F OR BELOW",
      badgeClass: "bg-error-container/20 text-error",
      title: "Frozen Commodities",
      description:
        "Blast-frozen proteins, ice cream, and frozen meals maintained at 0°F or below with zero tolerance for excursions.",
      icon: "ac_unit",
      filled: true,
      colSpan: 1 as const,
    },
    {
      badge: "TIME-SENSITIVE",
      badgeClass: "bg-primary/20 text-primary",
      title: "Dairy & Eggs",
      description:
        "Highly time-sensitive loads from processing facilities to DCs with strict food-safety chain-of-custody.",
      icon: "egg",
      colSpan: 1 as const,
    },
    {
      badge: "TARGET: VARIABLE",
      badgeClass: "bg-primary/20 text-primary",
      title: "Floral & Pharmaceuticals",
      description:
        "Precision temperature profiles for delicate commodities where a single-degree deviation can destroy product value.",
      icon: "medical_services",
      colSpan: 1 as const,
    },
    {
      badge: "REGIONAL",
      badgeClass: "bg-tertiary/20 text-tertiary",
      title: "Local Dry Van Loads",
      description:
        "Intrastate and regional dry freight across the Central Valley and Western U.S., alongside our reefer operations.",
      icon: "inventory_2",
      colSpan: 1 as const,
    },
    {
      badge: "DUAL-ZONE",
      badgeClass: "bg-secondary/20 text-secondary",
      title: "Multi-temp Loads",
      description:
        "Experience running dual-zone configurations to consolidate freight without cross-contamination.",
      icon: "local_shipping",
      colSpan: 3 as const,
    },
  ],

  equipment: [
    { label: "Trailer Type", value: "53' Reefer Semi-Trailer (Thermo King / Carrier Transicold)" },
    { label: "Temp Range", value: "-20°F to +70°F, continuous operation" },
    { label: "Monitoring", value: "Real-time temperature logging; alerts on deviation" },
    { label: "Fuel", value: "Diesel APU for idle reduction; reefer unit runs independently" },
    { label: "Compliance", value: "CARB-compliant engine & reefer unit; ELD-enabled cab" },
    { label: "Certifications", value: "USDA, FDA, FMCSA compliant; food-grade trailer cleaning protocol" },
    { label: "Tracking", value: "24/7 GPS visibility; ETA updates on request" },
  ],

  fleetSnapshot: [
    { icon: "thermostat", label: "Set Point", value: "34°F" },
    { icon: "device_thermostat", label: "Cargo Temp", value: "-1.4°F" },
    { icon: "straighten", label: "Temp Range", value: "-20°F to +70°F" },
    { icon: "sensors", label: "Monitoring", value: "LINK ACTIVE" },
    { icon: "gps_fixed", label: "GPS / ELD", value: "ONLINE" },
    { icon: "verified", label: "Pre-Cool", value: "VERIFIED" },
    { icon: "local_shipping", label: "Active Unit", value: "#4208" },
    { icon: "schedule", label: "Reefer Runtime", value: "12.4 HRS" },
  ],

  lanes: {
    intro:
      "Our home base in Fresno, CA positions us at the crossroads of the most produce-dense region in the country. We run regular lanes across the Western U.S. and accept spot freight on competitive terms.",
    groups: [
      {
        title: "Primary",
        routes: "Fresno / Central Valley → Los Angeles, Bay Area, San Diego (intrastate CA)",
      },
      {
        title: "Outbound West",
        routes: "CA → Phoenix, Las Vegas, Seattle, Portland",
      },
      {
        title: "Cross-Country",
        routes: "CA → Denver, Dallas, Chicago, Atlanta (with co-driver or relay)",
      },
      {
        title: "Backhaul Lanes",
        routes: "Northwest produce, Pacific NW seafood, Southwest distribution centers",
      },
    ],
    cities: [
      "LA / SAN DIEGO",
      "BAY AREA",
      "PHOENIX",
      "LAS VEGAS",
      "SEATTLE",
      "PORTLAND",
      "DENVER",
      "DALLAS",
      "CHICAGO",
      "ATLANTA",
    ],
  },

  whyChooseUs: [
    {
      icon: "person",
      title: "Direct Driver Ownership",
      description:
        "The person whose name is on the MC# is the one driving your load. No sub-contracting, no handoffs.",
    },
    {
      icon: "verified",
      title: "Temperature Compliance Guarantee",
      description:
        "We document pre-cool, set points, and delivery temps on every load. Full paper trail for your food-safety audits.",
    },
    {
      icon: "map",
      title: "Produce Corridor Knowledge",
      description:
        "We know which receivers have tight appointment windows, which shippers run late, and how to avoid the 99/5 and I-5 choke points.",
    },
    {
      icon: "forum",
      title: "Responsive Communication",
      description:
        "Direct driver & dispatch contact. No automated phone trees, no 24-hour wait for a callback.",
    },
    {
      icon: "payments",
      title: "Competitive Spot & Contract Rates",
      description:
        "We work with factoring-backed payment, accepting broker loads via QuickPay.",
    },
    {
      icon: "shield",
      title: "Fully Insured & DOT Authorized",
      description:
        "Cargo $100K, liability $1M, satisfactory FMCSA safety rating, and CARB-compliant equipment on every load.",
    },
  ],

  compliance: [
    { icon: "verified_user", label: "DOT AUTHORIZED" },
    { icon: "security", label: "$1M LIABILITY" },
    { icon: "inventory_2", label: "$100K CARGO" },
    { icon: "eco", label: "CARB COMPLIANT" },
    { icon: "workspace_premium", label: "FMCSA SATISFACTORY" },
    { icon: "receipt_long", label: "QUICK-PAY ELIGIBLE" },
  ],

  dispatchSteps: [
    {
      icon: "chat",
      title: "1. Load Details",
      description:
        "Share origin, destination, commodity, temp requirements, weight, and pickup window.",
      highlight: true,
    },
    {
      icon: "task_alt",
      title: "2. Rate Confirmation",
      description:
        "Receive a rate confirmation within 1–2 hours during business hours.",
      highlight: false,
    },
    {
      icon: "ac_unit",
      title: "3. Pre-cool & Dispatch",
      description:
        "We pre-cool, load, and depart on schedule — with temperature confirmation sent before wheels roll.",
      highlight: false,
      pulse: true,
    },
    {
      icon: "fact_check",
      title: "4. Delivery & Logs",
      description:
        "Delivery with POD and temp log provided same day. Invoice processed via factoring for fast payment.",
      highlight: false,
    },
  ],

  closingPromise:
    "Cold chain integrity is not a feature — it is our promise.",
  footerTagline: "Fresno, CA · DOT & MC# Authorized · Available 7 Days a Week",
} as const;
