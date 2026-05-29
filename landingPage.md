<!DOCTYPE html>

<html class="dark scroll-smooth" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>REEFER-ONE | Temperature-Controlled Freight Excellence</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&amp;family=Manrope:wght@600;700;800&amp;family=JetBrains+Mono:wght@500&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "on-secondary-fixed": "#001f25",
                    "surface-tint": "#89ceff",
                    "on-surface": "#dde2f8",
                    "outline": "#88929b",
                    "surface-container-low": "#151b2b",
                    "surface-bright": "#33394a",
                    "on-secondary-container": "#00515d",
                    "secondary": "#5de6ff",
                    "error-container": "#93000a",
                    "tertiary": "#7bd0ff",
                    "on-error-container": "#ffdad6",
                    "tertiary-fixed": "#c4e7ff",
                    "error": "#ffb4ab",
                    "inverse-surface": "#dde2f8",
                    "inverse-on-surface": "#2a3040",
                    "on-tertiary-fixed-variant": "#004c69",
                    "surface": "#0d1322",
                    "on-secondary-fixed-variant": "#004e5a",
                    "secondary-fixed-dim": "#2fd9f4",
                    "outline-variant": "#3e4850",
                    "primary": "#89ceff",
                    "on-primary-fixed-variant": "#004c6e",
                    "on-secondary": "#00363e",
                    "secondary-container": "#00cbe6",
                    "on-tertiary-container": "#00384e",
                    "on-tertiary": "#00354a",
                    "on-primary": "#00344d",
                    "on-background": "#dde2f8",
                    "surface-container-lowest": "#080e1d",
                    "on-surface-variant": "#bec8d2",
                    "surface-variant": "#2f3445",
                    "primary-fixed": "#c9e6ff",
                    "on-error": "#690005",
                    "on-tertiary-fixed": "#001e2c",
                    "primary-fixed-dim": "#89ceff",
                    "on-primary-container": "#003751",
                    "inverse-primary": "#006591",
                    "surface-container": "#191f2f",
                    "tertiary-container": "#00a7e0",
                    "background": "#0d1322",
                    "primary-container": "#0ea5e9",
                    "surface-dim": "#0d1322",
                    "surface-container-highest": "#2f3445",
                    "secondary-fixed": "#a2eeff",
                    "surface-container-high": "#242a3a",
                    "on-primary-fixed": "#001e2f",
                    "tertiary-fixed-dim": "#7bd0ff"
            },
            "borderRadius": {
                    "DEFAULT": "0.125rem",
                    "lg": "0.25rem",
                    "xl": "0.5rem",
                    "full": "0.75rem"
            },
            "spacing": {
                    "container-max": "1440px",
                    "xs": "4px",
                    "md": "16px",
                    "xl": "40px",
                    "unit": "4px",
                    "lg": "24px",
                    "gutter": "24px",
                    "margin-mobile": "16px",
                    "sm": "8px"
            },
            "fontFamily": {
                    "body-lg": ["Inter"],
                    "data-mono": ["JetBrains Mono"],
                    "body-md": ["Inter"],
                    "display-lg": ["Manrope"],
                    "headline-lg": ["Manrope"],
                    "headline-md": ["Manrope"],
                    "label-caps": ["Inter"]
            },
            "fontSize": {
                    "body-lg": ["18px", {"lineHeight": "1.6", "letterSpacing": "-0.01em", "fontWeight": "400"}],
                    "data-mono": ["14px", {"lineHeight": "1.4", "letterSpacing": "0", "fontWeight": "500"}],
                    "body-md": ["16px", {"lineHeight": "1.5", "letterSpacing": "0", "fontWeight": "400"}],
                    "display-lg": ["48px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "800"}],
                    "headline-lg": ["32px", {"lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "700"}],
                    "headline-md": ["24px", {"lineHeight": "1.3", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                    "label-caps": ["12px", {"lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "700"}]
            }
          },
        },
      }
    </script>
<style>
        @layer utilities {
            .glass {
                background: rgba(11, 17, 32, 0.6);
                backdrop-filter: blur(12px);
                border: 1px solid rgba(255, 255, 255, 0.05);
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            }
            .glass-hover:hover {
                background: rgba(14, 165, 233, 0.15);
                border-color: rgba(14, 165, 233, 0.4);
                transform: translateY(-4px);
                box-shadow: 0 10px 30px -10px rgba(137, 206, 255, 0.3);
            }
            .glow-primary {
                box-shadow: 0 0 15px rgba(137, 206, 255, 0.3);
            }
            .shimmer {
                background: linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent);
                background-size: 200% 100%;
                animation: shimmer 3s infinite;
            }
            @keyframes shimmer {
                0% { background-position: -200% 0; }
                100% { background-position: 200% 0; }
            }
            .ken-burns {
                animation: kenburns 40s infinite alternate ease-in-out;
            }
            @keyframes kenburns {
                0% { transform: scale(1); }
                100% { transform: scale(1.15); }
            }
            .breath-pulse {
                animation: breath 4s infinite ease-in-out;
            }
            @keyframes breath {
                0%, 100% { opacity: 0.6; transform: scale(1); filter: brightness(1); }
                50% { opacity: 1; transform: scale(1.1); filter: brightness(1.3); }
            }
            .draw-path {
                stroke-dasharray: 1000;
                stroke-dashoffset: 1000;
                animation: draw 3s forwards ease-in-out;
            }
            @keyframes draw {
                to { stroke-dashoffset: 0; }
            }
            .reveal-step {
                opacity: 0;
                transform: translateY(20px);
                transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
            }
            .reveal-step.active {
                opacity: 1;
                transform: translateY(0);
            }
            .animate-blink {
                animation: blink 1.5s infinite;
            }
            @keyframes blink {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.3; }
            }
        }
        @media (prefers-reduced-motion: reduce) {
            .ken-burns, .breath-pulse, .draw-path, .animate-blink, .animate-pulse {
                animation: none !important;
                transition: none !important;
            }
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
    </style>
</head>
<body class="bg-background text-on-surface font-body-md overflow-x-hidden selection:bg-primary/30">
<!-- TopNavBar -->
<nav class="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm shadow-primary/5">
<div class="flex justify-between items-center h-20 px-gutter max-w-container-max mx-auto">
<div class="font-display-lg text-headline-md tracking-tighter text-primary font-black cursor-pointer">
            REEFER-ONE
        </div>
<div class="hidden md:flex gap-lg items-center">
<a class="font-label-caps text-label-caps text-primary border-b-2 border-primary pb-1" href="#fleet">Fleet</a>
<a class="font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors" href="#tech">Technology</a>
<a class="font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors" href="#compliance">Compliance</a>
<a class="font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors" href="#routes">Routes</a>
<a class="font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors" href="#company">Company</a>
</div>
<div class="flex items-center gap-md">
<div class="hidden md:flex items-center gap-sm">
<span class="material-symbols-outlined text-on-surface-variant hover:text-secondary-fixed transition-all duration-300 cursor-pointer">notifications</span>
<span class="material-symbols-outlined text-on-surface-variant hover:text-secondary-fixed transition-all duration-300 cursor-pointer">account_circle</span>
</div>
<button class="bg-primary text-on-primary px-lg py-sm font-label-caps text-label-caps cursor-pointer active:scale-95 transition-all">Monitor Live</button>
</div>
</div>
</nav>
<!-- Hero Section -->
<section class="relative h-screen flex items-center overflow-hidden">
<div class="absolute inset-0 z-0">
<img alt="Hero Background" class="w-full h-full object-cover ken-burns" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_nH_FAzapTDhHM8M11vuQ9RIPqjKrBxkgsJeXkyJALqBZDjQQqRtBoNZLGupRM1GFMnBx67dZSMJOt7aDo8bfrLXjTPKi_4oD8TuVmKXGLaU9uxgRP0I3_9b1VoTQKpIjfEq6O8aqhVgOTzKSi76jpWDSXBFyYbHrxeg0-L0I7SVW8N2Y3w-HUIHIkxQ-HzuWvi88UYeY8P9IzG_qTSYld7OQcMA0loALHfxl8U8Ifxlhuk_pwotnTPIjDkABt3qQsXwLv_iHnmSb"/>
<div class="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
</div>
<div class="relative z-10 max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-xl items-center w-full">
<div class="space-y-lg opacity-0 translate-y-10 transition-all duration-1000 ease-out" id="hero-content">
<div class="inline-flex items-center gap-sm px-md py-xs bg-primary/10 border border-primary/20 rounded-full">
<span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span class="font-label-caps text-label-caps text-primary">Live Operations Active</span>
</div>
<h1 class="font-display-lg text-display-lg text-on-surface leading-tight">
                Temperature-Controlled <br/>
<span class="text-primary">Freight Excellence</span>
</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
                Trusted reefer freight specialists delivering cold-chain reliability across the Western United States.
            </p>
<div class="flex flex-wrap gap-md pt-md">
<button class="bg-primary-container text-on-primary-container px-xl py-md font-label-caps text-label-caps rounded-lg hover:brightness-110 transition-all shadow-lg shadow-primary/20">Request a Quote</button>
<button class="border border-outline-variant text-on-surface px-xl py-md font-label-caps text-label-caps rounded-lg hover:bg-surface-variant transition-all">View Service Areas</button>
</div>
</div>
<!-- Floating Dashboard Visuals -->
<div class="hidden lg:block relative h-[500px]">
<div class="absolute top-10 right-0 w-80 glass p-lg rounded-xl border-l-4 border-primary shadow-2xl transition-all duration-1000 delay-300 opacity-0 translate-y-10" id="hero-card-1">
<div class="flex justify-between items-start mb-md">
<div class="space-y-xs">
<p class="font-label-caps text-[10px] text-on-surface-variant uppercase">Current Status</p>
<h3 class="font-headline-md text-primary">In Transit</h3>
</div>
<span class="material-symbols-outlined text-primary breath-pulse" style="font-variation-settings: 'FILL' 1;">local_shipping</span>
</div>
<div class="space-y-sm">
<div class="flex justify-between text-[12px] font-data-mono">
<span>TEMP SENSOR 01</span>
<span class="text-secondary breath-pulse">-1.4°F</span>
</div>
<div class="h-1 bg-surface-variant rounded-full overflow-hidden">
<div class="h-full bg-secondary w-3/4"></div>
</div>
</div>
</div>
<div class="absolute bottom-10 left-0 w-64 glass p-md rounded-xl border-t border-primary/20 shadow-2xl transition-all duration-1000 delay-500 opacity-0 translate-y-10" id="hero-card-2">
<div class="flex items-center gap-md mb-sm">
<div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
<span class="material-symbols-outlined text-primary animate-pulse">location_on</span>
</div>
<div>
<p class="font-label-caps text-[10px] text-on-surface-variant">Live Tracking</p>
<p class="font-data-mono text-sm">FRESNO, CA</p>
</div>
</div>
<div class="h-24 w-full bg-surface-container-low rounded-lg flex items-center justify-center border border-outline-variant/30 overflow-hidden">
<svg class="w-full h-full p-xs" viewbox="0 0 200 100">
<path class="draw-path" d="M10,80 Q50,20 100,50 T190,20" fill="none" stroke="#89ceff" stroke-dasharray="5,5" stroke-width="2"></path>
<circle class="breath-pulse" cx="190" cy="20" fill="#89ceff" r="4"></circle>
</svg>
</div>
</div>
</div>
</div>
</section>
<!-- Stats Section -->
<div class="relative z-20 -mt-20 max-w-container-max mx-auto px-gutter">
<div class="grid grid-cols-2 md:grid-cols-4 gap-md">
<div class="glass p-lg rounded-xl border-t-2 border-primary/50 glass-hover opacity-0 translate-y-10 transition-all duration-700" id="stat-1">
<p class="font-display-lg text-headline-lg text-primary mb-xs">10+</p>
<p class="font-label-caps text-label-caps text-on-surface-variant">Years Experience</p>
</div>
<div class="glass p-lg rounded-xl border-t-2 border-secondary/50 glass-hover opacity-0 translate-y-10 transition-all duration-700 delay-100" id="stat-2">
<p class="font-display-lg text-headline-lg text-secondary mb-xs">98%</p>
<p class="font-label-caps text-label-caps text-on-surface-variant">On-Time Delivery</p>
</div>
<div class="glass p-lg rounded-xl border-t-2 border-primary/50 glass-hover opacity-0 translate-y-10 transition-all duration-700 delay-200" id="stat-3">
<p class="font-display-lg text-headline-lg text-primary mb-xs">11</p>
<p class="font-label-caps text-label-caps text-on-surface-variant">States Covered</p>
</div>
<div class="glass p-lg rounded-xl border-t-2 border-secondary/50 glass-hover opacity-0 translate-y-10 transition-all duration-700 delay-300" id="stat-4">
<p class="font-display-lg text-headline-lg text-secondary mb-xs">±1°F</p>
<p class="font-label-caps text-label-caps text-on-surface-variant">Temp Precision</p>
</div>
</div>
</div>
<!-- Trust Section -->
<section class="py-xl max-w-container-max mx-auto px-gutter" id="fleet">
<div class="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
<div class="relative rounded-2xl overflow-hidden group">
<img alt="Close up of Reefer Unit" class="w-full aspect-video lg:aspect-square object-cover transition-transform duration-1000 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfQj45ys8t5PWyexq4PfWoIHZYS0ZEpWnjwJz4m4mKoUSJ4Q6H3occoMZPdvDdwljXJkzo-Ab7kfKsBYimnIdqa_XArAXN_c_6cNam7NQo_U9HpfzZmO890uYYDSHjC9qV9exgDPElrM8s1bqGMw-bU7jL9idRaPLTWcOFC1jte-Z3uJCtI4OFPMzVFPL0WsUMY7Ek24_0Cum4tY1rTDvxLHfH54cJGw_JoHipDhgmnZKbBJWMGxVrFdCaaIEo69z20MxSrpXm8SKt"/>
<div class="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60"></div>
<div class="absolute bottom-lg left-lg glass p-md rounded-lg">
<p class="font-data-mono text-secondary text-sm">OPERATIONAL INTEGRITY</p>
<p class="text-on-surface font-headline-md">Thermo King Pre-Trip Validated</p>
</div>
</div>
<div class="space-y-lg">
<h2 class="font-display-lg text-headline-lg text-on-surface">Built by Operators Who <br/><span class="text-primary">Understand the Cold Chain</span></h2>
<p class="font-body-lg text-on-surface-variant">
                Based in Fresno, California, REEFER-ONE is an owner-operated logistics powerhouse. We don't just move freight; we manage environmental stability for high-consequence cargo.
            </p>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-md">
<div class="p-md bg-surface-container-low border border-outline-variant/30 rounded-xl glass-hover">
<span class="material-symbols-outlined text-primary mb-sm animate-pulse">verified</span>
<h4 class="font-headline-md text-on-surface text-lg mb-xs">Authorized Carrier</h4>
<p class="text-sm text-on-surface-variant">Full MC#/DOT credentials with a dedicated safety monitoring team.</p>
</div>
<div class="p-md bg-surface-container-low border border-outline-variant/30 rounded-xl glass-hover">
<span class="material-symbols-outlined text-primary mb-sm breath-pulse">thermostat</span>
<h4 class="font-headline-md text-on-surface text-lg mb-xs">Temp Discipline</h4>
<p class="text-sm text-on-surface-variant">Strict pre-cooling protocols and real-time remote telemetry.</p>
</div>
</div>
</div>
</div>
</section>
<!-- Reefer Expertise (Bento Grid) -->
<section class="py-xl bg-surface-container-lowest">
<div class="max-w-container-max mx-auto px-gutter">
<div class="text-center mb-xl space-y-sm">
<p class="font-label-caps text-primary tracking-widest uppercase">Our Specialization</p>
<h2 class="font-display-lg text-headline-lg">Freight That Requires Focus</h2>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-md">
<!-- Produce -->
<div class="md:col-span-2 relative h-80 glass rounded-2xl p-xl overflow-hidden group glass-hover">
<div class="absolute top-0 right-0 w-1/2 h-full opacity-20 group-hover:opacity-40 transition-all duration-700 group-hover:scale-105">
<img class="w-full h-full object-cover" data-alt="Close up high-end produce" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7HuW0RkLCktfb-OJ8ewtiRXvpCJgIvq8n6poElsP0-ag_SByUK0-JGDRaM-BZEwIvXuzL7Cd-FvMCnvzjeeHseEthG57dHkJPOpLqXK_-xWE-pNL35jLuEuOuOK2296gkXCLySqAMCdCxERzjj6lF6tcZUc28Ddi1Uht_qS4lJLgPJ1VLMkhZ-l39y7MsYqJ2WBiaUXWnFsXfySqyRUmB7AYMp_PZzs5JfJQfOpZVuFdOYb75BPOYfwm-WH4stznI10hIAf1H3Ilh"/>
</div>
<div class="relative z-10 h-full flex flex-col justify-between">
<div>
<span class="bg-secondary/20 text-secondary px-sm py-xs rounded text-[10px] font-bold group-hover:brightness-125 transition-all">TARGET: 34°F - 38°F</span>
<h3 class="text-headline-md mt-md">Fresh Produce &amp; Berries</h3>
<p class="text-on-surface-variant max-w-sm mt-sm">Time-sensitive transit with precise humidity control to maintain field-fresh quality.</p>
</div>
<span class="material-symbols-outlined text-4xl text-primary transition-transform duration-500 group-hover:rotate-12">eco</span>
</div>
</div>
<!-- Frozen -->
<div class="relative h-80 glass rounded-2xl p-xl overflow-hidden group glass-hover">
<div class="relative z-10 h-full flex flex-col justify-between">
<div>
<span class="bg-error-container/20 text-error px-sm py-xs rounded text-[10px] font-bold group-hover:brightness-125 transition-all">TARGET: -10°F</span>
<h3 class="text-headline-md mt-md">Frozen Commodities</h3>
<p class="text-sm text-on-surface-variant mt-sm">Deep-freeze stability for meats and processed foods.</p>
</div>
<span class="material-symbols-outlined text-4xl text-secondary transition-transform duration-500 group-hover:scale-110" style="font-variation-settings: 'FILL' 1;">ac_unit</span>
</div>
<div class="absolute bottom-0 right-0 w-24 h-24 bg-secondary/10 blur-3xl"></div>
</div>
<!-- Pharma/Floral -->
<div class="relative h-80 glass rounded-2xl p-xl overflow-hidden group glass-hover">
<div class="relative z-10 h-full flex flex-col justify-between">
<div>
<span class="bg-primary/20 text-primary px-sm py-xs rounded text-[10px] font-bold group-hover:brightness-125 transition-all">TARGET: VARIABLE</span>
<h3 class="text-headline-md mt-md">Sensitive Pharma</h3>
<p class="text-sm text-on-surface-variant mt-sm">High-value cargo requiring constant thermal auditing.</p>
</div>
<span class="material-symbols-outlined text-4xl text-tertiary group-hover:animate-pulse">medical_services</span>
</div>
</div>
<!-- Multi-temp -->
<div class="md:col-span-2 relative h-80 glass rounded-2xl p-xl overflow-hidden group glass-hover">
<div class="relative z-10 h-full flex flex-col justify-between">
<div class="flex justify-between items-start">
<div>
<h3 class="text-headline-md">Multi-temp &amp; Dairy</h3>
<p class="text-on-surface-variant max-w-md mt-sm">Divided trailers for mixed loads requiring disparate temperature set-points.</p>
</div>
<div class="space-y-xs text-right">
<div class="font-data-mono text-xs text-secondary group-hover:brightness-125 transition-all">ZONE A: 34°F</div>
<div class="font-data-mono text-xs text-primary group-hover:brightness-125 transition-all">ZONE B: -5°F</div>
</div>
</div>
<div class="flex gap-md">
<span class="material-symbols-outlined text-4xl text-on-surface-variant group-hover:text-primary transition-colors">egg</span>
<span class="material-symbols-outlined text-4xl text-on-surface-variant group-hover:text-secondary transition-colors">local_drink</span>
</div>
</div>
<div class="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
</div>
</div>
</div>
</section>
<!-- Technology Dashboard Section -->
<section class="py-xl" id="tech">
<div class="max-w-container-max mx-auto px-gutter">
<div class="glass rounded-3xl p-xl border-outline-variant/30 overflow-hidden relative">
<div class="absolute inset-0 opacity-10 pointer-events-none">
<div class="w-full h-full" style="background-image: radial-gradient(#89ceff 1px, transparent 1px); background-size: 40px 40px;"></div>
</div>
<div class="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-xl">
<div class="lg:col-span-2 space-y-lg">
<h2 class="font-headline-lg">Fleet Management Dashboard</h2>
<div class="h-64 w-full bg-surface-container rounded-2xl border border-outline-variant/30 p-lg">
<div class="flex justify-between items-center mb-md">
<p class="font-label-caps text-on-surface-variant">LIVE TEMPERATURE TELEMETRY - UNIT #4208</p>
<div class="flex gap-sm">
<div class="w-3 h-3 rounded-full bg-secondary animate-blink"></div>
<span class="font-data-mono text-xs text-secondary animate-blink">LINK ACTIVE</span>
</div>
</div>
<svg class="w-full h-40" viewbox="0 0 800 150">
<path class="draw-path" d="M0,75 L100,72 L200,76 L300,74 L400,75 L500,73 L600,75 L700,74 L800,75" fill="none" stroke="#5de6ff" stroke-width="3"></path>
<path d="M0,75 L100,72 L200,76 L300,74 L400,75 L500,73 L600,75 L700,74 L800,75 L800,150 L0,150 Z" fill="url(#grad)" opacity="0.1"></path>
<defs>
<lineargradient id="grad" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style="stop-color:#5de6ff;stop-opacity:1"></stop>
<stop offset="100%" style="stop-color:#5de6ff;stop-opacity:0"></stop>
</lineargradient>
</defs>
<circle class="animate-pulse" cx="700" cy="74" fill="#5de6ff" r="4"></circle>
</svg>
<div class="flex justify-between mt-sm font-data-mono text-[10px] text-on-surface-variant">
<span>-4h</span><span>-3h</span><span>-2h</span><span>-1h</span><span>NOW</span>
</div>
</div>
<div class="grid grid-cols-3 gap-md">
<div class="text-center p-md border-r border-outline-variant/30">
<p class="text-2xl font-display-lg text-primary">53’</p>
<p class="text-[10px] font-label-caps text-on-surface-variant">Reefer Trailers</p>
</div>
<div class="text-center p-md border-r border-outline-variant/30">
<p class="text-2xl font-display-lg text-secondary">CARB</p>
<p class="text-[10px] font-label-caps text-on-surface-variant">Compliant Fleet</p>
</div>
<div class="text-center p-md">
<p class="text-2xl font-display-lg text-tertiary">ELD</p>
<p class="text-[10px] font-label-caps text-on-surface-variant">Enabled Track</p>
</div>
</div>
</div>
<div class="bg-surface-container-high rounded-2xl p-lg border border-outline-variant/30 space-y-md glass-hover">
<h4 class="font-headline-md text-lg">System Specs</h4>
<ul class="space-y-md">
<li class="flex items-center gap-md group">
<span class="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">settings_input_component</span>
<span class="text-sm text-on-surface-variant">Thermo King Precedent S-600 Series</span>
</li>
<li class="flex items-center gap-md group">
<span class="material-symbols-outlined text-primary group-hover:rotate-45 transition-transform">sensors</span>
<span class="text-sm text-on-surface-variant">24/7 Satellite Remote Monitoring</span>
</li>
<li class="flex items-center gap-md group">
<span class="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">shield</span>
<span class="text-sm text-on-surface-variant">Redundant Cooling Backups</span>
</li>
<li class="flex items-center gap-md group">
<span class="material-symbols-outlined text-primary group-hover:rotate-180 transition-transform">history</span>
<span class="text-sm text-on-surface-variant">Electronic Temp Log Audits</span>
</li>
</ul>
<div class="pt-md border-t border-outline-variant/30">
<img class="w-full h-32 object-cover rounded-lg shimmer" data-alt="Logistics control center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo1WPPEZp_6PIdEBbdePGaHmVUx4wjCeS4nKTd_Zpr-HHi35NBSByfCetsyf_XTF3ieSh-2ZghO5e-du7CcP35lVIXwVmxlKFugd54E_y5sr-8VAXpxYEg505nZPFxVfXfrPpABEw3lNHDlsmDzRnq9nJVPB0epm_5AUvfa6Z9JqOsxs2HyN_KNw1pZK7bIm99H6fgAZUCri0vSGOmAz6IBJoGh4qfl8spnPrRJ9baYDJVrHsyNC2FXgIjVUGqmPgqzVHEOEmhvkcL"/>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Service Area Map -->
<section class="py-xl" id="routes">
<div class="max-w-container-max mx-auto px-gutter text-center mb-xl">
<h2 class="font-display-lg text-headline-lg">Western U.S. Core Routes</h2>
<p class="text-on-surface-variant mt-md">Daily departures from Fresno with dedicated lanes across major hubs.</p>
</div>
<div class="w-full bg-surface relative h-[600px] overflow-hidden">
<div class="absolute inset-0 opacity-40 grayscale contrast-150">
<img class="w-full h-full object-cover" data-alt="Stylized dark mode topography map" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXsCnc_ZUkFLCFRuMkguow7zfmLC3U8nQrPpAUaxZhgiQMTU7-m7l-y0hdzhhY27JctIHG5MGs6NDffbjkt8pzRA5hAM6l3bhhdYVA9VXqaEScV2LUUjQeipoj6dTqoW-1MkbTuhswo4j1P0jRhy0IVWPOehgJBkXfy0K0SUjL0M-gJzgPAMpuCKMMC86wtAyqJ6102D3hrR-H0N8xCfO1o1yzRWA08X--8AQuQpw1lXabjGibkiocYum67Sj4fLa6M7ZUYJWoKqvS"/>
</div>
<div class="absolute inset-0 flex items-center justify-center">
<svg class="w-full h-full max-w-4xl" viewbox="0 0 800 600">
<!-- Glow Paths -->
<path class="opacity-50 draw-path" d="M150,250 L200,400 L350,450" fill="none" stroke="#89ceff" stroke-dasharray="10,10" stroke-width="3"></path>
<path class="opacity-50 draw-path" d="M150,250 L100,100" fill="none" stroke="#5de6ff" stroke-dasharray="10,10" stroke-width="3"></path>
<!-- City Nodes -->
<g transform="translate(150,250)">
<circle class="breath-pulse" fill="#89ceff" r="10"></circle>
<text class="font-data-mono text-[10px] fill-primary" text-anchor="middle" y="25">FRESNO (HUB)</text>
</g>
<g transform="translate(200,400)">
<circle class="animate-pulse" fill="#ffffff" r="5"></circle>
<text class="font-data-mono text-[10px] fill-on-surface-variant" text-anchor="middle" y="15">LA / SD</text>
</g>
<g transform="translate(350,450)">
<circle class="animate-pulse" fill="#ffffff" r="5"></circle>
<text class="font-data-mono text-[10px] fill-on-surface-variant" text-anchor="middle" y="15">PHOENIX</text>
</g>
<g transform="translate(100,100)">
<circle class="animate-pulse" fill="#ffffff" r="5"></circle>
<text class="font-data-mono text-[10px] fill-on-surface-variant" text-anchor="middle" y="-10">SEATTLE</text>
</g>
</svg>
</div>
<div class="absolute bottom-xl left-xl glass p-lg rounded-xl grid grid-cols-2 md:grid-cols-4 gap-md glass-hover">
<div><p class="font-data-mono text-xs text-primary">LA / SAN DIEGO</p></div>
<div><p class="font-data-mono text-xs text-on-surface-variant">BAY AREA</p></div>
<div><p class="font-data-mono text-xs text-on-surface-variant">PHOENIX</p></div>
<div><p class="font-data-mono text-xs text-on-surface-variant">LAS VEGAS</p></div>
<div><p class="font-data-mono text-xs text-on-surface-variant">SEATTLE</p></div>
<div><p class="font-data-mono text-xs text-on-surface-variant">PORTLAND</p></div>
<div><p class="font-data-mono text-xs text-on-surface-variant">DENVER</p></div>
<div><p class="font-data-mono text-xs text-on-surface-variant">DALLAS</p></div>
</div>
</div>
</section>
<!-- How It Works (Timeline) -->
<section class="py-xl max-w-container-max mx-auto px-gutter" id="how-it-works">
<div class="text-center mb-xl">
<h2 class="font-display-lg text-headline-lg">Streamlined Dispatch Flow</h2>
</div>
<div class="relative flex flex-col md:flex-row justify-between gap-xl">
<div class="absolute top-10 left-0 w-full h-0.5 bg-outline-variant/30 hidden md:block z-0">
<div class="h-full bg-primary w-1/4 animate-pulse"></div>
</div>
<div class="relative z-10 flex-1 group reveal-step">
<div class="w-20 h-20 rounded-full glass glow-primary flex items-center justify-center mb-md group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-primary text-3xl">chat</span>
</div>
<h4 class="font-headline-md text-lg mb-xs">1. Load Details</h4>
<p class="text-sm text-on-surface-variant">Share pick-up, drop-off, and temp requirements.</p>
</div>
<div class="relative z-10 flex-1 group reveal-step">
<div class="w-20 h-20 rounded-full glass border border-outline-variant flex items-center justify-center mb-md group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-on-surface-variant text-3xl group-hover:text-primary transition-colors">task_alt</span>
</div>
<h4 class="font-headline-md text-lg mb-xs">2. Rate Confirmation</h4>
<p class="text-sm text-on-surface-variant">Instant, competitive enterprise rate lock-ins.</p>
</div>
<div class="relative z-10 flex-1 group reveal-step">
<div class="w-20 h-20 rounded-full glass border border-outline-variant flex items-center justify-center mb-md group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-on-surface-variant text-3xl group-hover:text-primary transition-colors breath-pulse">ac_unit</span>
</div>
<h4 class="font-headline-md text-lg mb-xs">3. Pre-cool &amp; Dispatch</h4>
<p class="text-sm text-on-surface-variant">Unit pre-cooled to target temp before arrival.</p>
</div>
<div class="relative z-10 flex-1 group reveal-step">
<div class="w-20 h-20 rounded-full glass border border-outline-variant flex items-center justify-center mb-md group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-on-surface-variant text-3xl group-hover:text-primary transition-colors">fact_check</span>
</div>
<h4 class="font-headline-md text-lg mb-xs">4. Delivery &amp; Logs</h4>
<p class="text-sm text-on-surface-variant">Full POD and temperature audit logs provided.</p>
</div>
</div>
</section>
<!-- Compliance & Credentials -->
<section class="py-lg border-y border-outline-variant/20 bg-surface-container-low" id="compliance">
<div class="max-w-container-max mx-auto px-gutter">
<div class="flex flex-wrap justify-center gap-xl opacity-60">
<div class="flex items-center gap-sm group">
<span class="material-symbols-outlined text-on-surface group-hover:text-primary transition-colors">verified_user</span>
<span class="font-label-caps text-label-caps group-hover:text-on-surface transition-colors">DOT AUTHORIZED</span>
</div>
<div class="flex items-center gap-sm group">
<span class="material-symbols-outlined text-on-surface group-hover:text-primary transition-colors">security</span>
<span class="font-label-caps text-label-caps group-hover:text-on-surface transition-colors">$1M LIABILITY</span>
</div>
<div class="flex items-center gap-sm group">
<span class="material-symbols-outlined text-on-surface group-hover:text-primary transition-colors">inventory_2</span>
<span class="font-label-caps text-label-caps group-hover:text-on-surface transition-colors">$100K CARGO</span>
</div>
<div class="flex items-center gap-sm group">
<span class="material-symbols-outlined text-on-surface group-hover:text-primary transition-colors">eco</span>
<span class="font-label-caps text-label-caps group-hover:text-on-surface transition-colors">CARB COMPLIANT</span>
</div>
<div class="flex items-center gap-sm group">
<span class="material-symbols-outlined text-on-surface group-hover:text-primary transition-colors">workspace_premium</span>
<span class="font-label-caps text-label-caps group-hover:text-on-surface transition-colors">FMCSA SATISFACTORY</span>
</div>
</div>
</div>
</section>
<!-- Final CTA -->
<section class="relative py-xl overflow-hidden">
<div class="absolute inset-0 z-0">
<img class="w-full h-full object-cover ken-burns" data-alt="Truck in fog at night" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBECQMVFP8Xs0d7Pc9OLm7wXPOxnYaH6WKDuAyIl3C2akcj0ip6enQ2OraEgRtR0Oepj-ylXN_EBKMKpZ3pNwBKaw_v4gZgUjKeDX-Kx3JtWkVvpWVZX7qerupEtWoOLjwDsRjOESMKsoverXb8rQCJftGwvUGJciRcmuXV4A7V7SASxKoddG8nU73sFnwwQT3z0tYa2K5x0BmjC2KGY6jLP3gntKdcm850OLQMQfjXzfWGgb4fK76m63KFUzA-Y0wCnFP2zaw7Pv8h"/>
<div class="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>
</div>
<div class="relative z-10 max-w-container-max mx-auto px-gutter text-center py-xl">
<h2 class="font-display-lg text-headline-lg mb-md">Cold Chain Integrity Is Not a Feature — <br/><span class="text-primary">It’s Our Promise.</span></h2>
<p class="font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-xl">
            Ready to partner with a carrier that values your cargo’s environment as much as you do? Our dispatch is ready 24/7.
        </p>
<div class="flex flex-wrap justify-center gap-md">
<button class="bg-primary text-on-primary px-xl py-md font-label-caps text-label-caps rounded-lg hover:brightness-110 transition-all shadow-xl shadow-primary/30">Book a Load</button>
<button class="glass text-on-surface px-xl py-md font-label-caps text-label-caps rounded-lg hover:bg-surface-variant transition-all">Talk to Dispatch</button>
</div>
</div>
</section>
<!-- Footer -->
<footer class="bg-surface-container-lowest border-t border-outline-variant" id="company">
<div class="max-w-container-max mx-auto px-gutter py-xl">
<div class="grid grid-cols-1 md:grid-cols-4 gap-xl mb-xl">
<div class="space-y-md">
<div class="font-display-lg text-headline-md text-on-surface">REEFER-ONE</div>
<p class="text-sm text-on-surface-variant">Precision cold-chain logistics for the enterprise carrier network.</p>
</div>
<div>
<h5 class="font-label-caps text-primary mb-md">PORTALS</h5>
<ul class="space-y-sm text-sm text-on-surface-variant">
<li><a class="hover:text-primary transition-colors" href="#">Carrier Portal</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Customer Dashboard</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Driver Login</a></li>
</ul>
</div>
<div>
<h5 class="font-label-caps text-primary mb-md">LEGAL</h5>
<ul class="space-y-sm text-sm text-on-surface-variant">
<li><a class="hover:text-primary transition-colors" href="#">Privacy Protocol</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Fleet API</a></li>
</ul>
</div>
<div>
<h5 class="font-label-caps text-primary mb-md">CONTACT</h5>
<p class="text-sm text-on-surface-variant mb-xs">Operations: (559) 555-0199</p>
<p class="text-sm text-on-surface-variant">Dispatch: dispatch@reefer-one.com</p>
<p class="text-sm text-on-surface-variant mt-md">Fresno, CA 93706</p>
</div>
</div>
<div class="pt-lg border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-md">
<p class="text-[10px] font-label-caps text-on-surface-variant">© 2024 REEFER-ONE LOGISTICS. PRECISION COLD-CHAIN SYSTEMS.</p>
<div class="flex gap-md">
<span class="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors">share</span>
<span class="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors">mail</span>
</div>
</div>
</div>
</footer>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        // Hero Load Animation
        setTimeout(() => {
            document.getElementById('hero-content').classList.remove('opacity-0', 'translate-y-10');
            document.getElementById('hero-card-1').classList.remove('opacity-0', 'translate-y-10');
            document.getElementById('hero-card-2').classList.remove('opacity-0', 'translate-y-10');
            
            ['stat-1', 'stat-2', 'stat-3', 'stat-4'].forEach(id => {
                document.getElementById(id).classList.remove('opacity-0', 'translate-y-10');
            });
        }, 100);

        // Intersection Observer for Timeline and other sections
        const observerOptions = {
            threshold: 0.2
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('reveal-step')) {
                        // Staggered reveal for timeline
                        const steps = entry.target.parentElement.querySelectorAll('.reveal-step');
                        steps.forEach((step, index) => {
                            setTimeout(() => {
                                step.classList.add('active');
                            }, index * 200);
                        });
                    } else {
                        entry.target.classList.add('active');
                    }
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-step').forEach(el => observer.observe(el));
    });
</script>
</body></html>