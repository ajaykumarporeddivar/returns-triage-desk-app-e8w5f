import Link from 'next/link';
import { Inter } from 'next/font/google';
import {
  FileText,
  LayoutDashboard,
  BarChart2,
  Lock,
  ArrowRight,
  Star,
  CheckCircle,
} from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Returns Triage Desk — Streamline E-commerce Returns',
  description: 'Returns Triage Desk helps e-commerce operations managers at Shopify stores centralize, prioritize, and report on return requests to reduce margin loss and manual effort.',
};

export default function LandingPage() {
  const features = [
    {
      icon: FileText,
      name: 'Return Request Intake',
      description: 'E-commerce operations managers cannot quickly turn messy intake, requests, or source material into a clean working queue. Turn messy intake into a clean, prioritized queue.',
      color: 'bg-indigo-100 text-indigo-700',
    },
    {
      icon: LayoutDashboard,
      name: 'Triage Dashboard',
      description: 'E-commerce operations managers lack a single dashboard to prioritize the highest-value work and see what needs action now. Prioritize high-value returns and take action immediately.',
      color: 'bg-emerald-100 text-emerald-700',
    },
    {
      icon: BarChart2,
      name: 'ROI Reporting',
      description: 'E-commerce operations managers need exportable, client-ready outputs that prove ROI without manual reporting or spreadsheet cleanup. Prove impact and optimize operations with automated reports.',
      color: 'bg-rose-100 text-rose-700',
    },
  ];

  const lockedFeatures = [
    { name: 'Triage Automation', value: 'Automate initial return classification and routing.', tier: 'Pro' },
    { name: 'Approval Automation', value: 'Streamline return approval workflows based on predefined rules.', tier: 'Pro' },
    { name: 'Analytics Automation', value: 'Automated insights on return trends and cost analysis.', tier: 'Pro' },
    { name: 'Advanced Team Roles & Permissions', value: 'Granular access control for your operations team.', tier: 'Enterprise' },
    { name: 'Real Database Persistence & Workspaces', value: 'Secure, scalable data storage and multi-store management.', tier: 'Enterprise' },
    { name: 'Advanced Analytics & Benchmark Reports', value: 'Compare your return efficiency against industry benchmarks.', tier: 'Enterprise' },
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '₹0',
      period: '/mo',
      description: 'For small Shopify stores and new E-commerce Ops Managers.',
      features: [
        '1 linked Shopify Store',
        'Up to 10 returns processed/month',
        'Basic Triage Desk access',
        'No ROI reporting',
      ],
      cta: 'Get Started',
      ctaHref: '/dashboard/triage-dashboard',
      highlight: false,
    },
    {
      name: 'Pro',
      price: '₹6,500',
      period: '/mo',
      description: 'Most popular. For E-commerce Operations Managers managing growing stores.',
      features: [
        '1 linked Shopify Store',
        'Up to 100 returns processed/month',
        'Full Triage Dashboard',
        'Basic ROI Reporting',
        'Unlock full roadmap features',
      ],
      cta: 'Unlock Pro Features',
      ctaHref: '/dashboard/triage-dashboard', // For demo, links to dashboard
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large enterprises needing unlimited scale and dedicated support.',
      features: [
        'Unlimited Shopify Stores',
        'Unlimited returns processing',
        'All Pro features',
        'Advanced Analytics & SLA',
        'Dedicated Support & Training',
        'Unlock full roadmap features',
      ],
      cta: 'Contact Us',
      ctaHref: '#',
      highlight: false,
    },
  ];

  return (
    <div className={`min-h-screen antialiased ${inter.className}`}>
      {/* Nav Bar */}
      <nav className="fixed top-12 left-0 right-0 z-40 bg-white/90 backdrop-blur-sm border-b border-zinc-100 py-4 px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center">
            <span className="font-bold text-white text-sm">RTD</span>
          </div>
          <Link href="/" className="font-bold text-xl text-zinc-900 tracking-tight">
            Returns Triage Desk
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          <Link href="#features" className="text-zinc-600 hover:text-zinc-900 transition-colors">
            Features
          </Link>
          <Link href="#pricing" className="text-zinc-600 hover:text-zinc-900 transition-colors">
            Pricing
          </Link>
          <Link
            href="/dashboard/triage-dashboard"
            className="bg-zinc-900 text-white rounded-lg px-4 py-2 hover:bg-zinc-700 transition-colors text-sm font-medium"
          >
            Open Dashboard →
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24">
        <span className="inline-flex items-center rounded-full bg-indigo-500/20 px-3 py-1 text-xs font-semibold text-indigo-300 ring-1 ring-inset ring-indigo-500/20 mb-4">
          AI-Powered E-commerce Operations
        </span>
        <h1 className="font-black text-5xl md:text-7xl tracking-tight leading-none max-w-4xl">
          Stop Losing Margin on Manual Returns
        </h1>
        <p className="text-zinc-400 text-xl mt-4 max-w-2xl">
          Returns Triage Desk empowers e-commerce operations managers to centralize, prioritize, and report on return requests, ensuring faster exception handling and margin protection.
        </p>
        <div className="flex space-x-4 mt-8">
          <Link
            href="/dashboard/triage-dashboard"
            className="bg-white text-zinc-900 font-bold rounded-xl px-8 py-4 shadow-lg hover:shadow-xl transition-all"
          >
            Start Free Today →
          </Link>
          <Link
            href="/dashboard/triage-dashboard"
            className="border border-zinc-600 text-zinc-300 rounded-xl px-8 py-4 hover:bg-zinc-800 transition-colors"
          >
            See It Live →
          </Link>
        </div>

        {/* Hero Visual: CSS-only UI mockup */}
        <div className="relative bg-zinc-800/50 border border-zinc-700 rounded-2xl p-6 max-w-5xl w-full mx-auto mt-16 shadow-2xl overflow-hidden">
          {/* Top bar */}
          <div className="flex items-center justify-between pb-4 border-b border-zinc-700 mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            </div>
            <div className="bg-zinc-700 rounded-md px-4 py-1 w-64 text-sm text-zinc-400">
              returns-triage-desk.app/dashboard/triage
            </div>
            <div className="w-8 h-4 bg-zinc-700 rounded-md"></div>
          </div>

          {/* Main UI layout */}
          <div className="flex space-x-4 h-[400px]">
            {/* Sidebar */}
            <div className="w-1/4 bg-zinc-700 rounded-xl p-4 flex flex-col space-y-4">
              <div className="h-8 bg-zinc-600 rounded-lg animate-pulse w-3/4"></div>
              <div className="h-8 bg-zinc-600 rounded-lg w-full"></div>
              <div className="h-8 bg-indigo-500 rounded-lg text-white flex items-center justify-center text-sm font-medium">
                Triage Desk
              </div>
              <div className="h-8 bg-zinc-600 rounded-lg w-5/6"></div>
              <div className="h-8 bg-zinc-600 rounded-lg w-2/3"></div>
            </div>

            {/* Content Area */}
            <div className="w-3/4 bg-zinc-700 rounded-xl p-6 flex flex-col space-y-4">
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <div className="h-8 w-48 bg-zinc-600 rounded-lg"></div>
                <div className="h-8 w-24 bg-zinc-600 rounded-lg"></div>
              </div>

              {/* Stats/Cards */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-zinc-600 h-24 rounded-lg"></div>
                <div className="bg-zinc-600 h-24 rounded-lg"></div>
                <div className="bg-emerald-500/50 h-24 rounded-lg animate-pulse"></div>
              </div>

              {/* Table / List */}
              <div className="flex-1 bg-zinc-600 rounded-lg p-4 space-y-3">
                <div className="h-6 bg-zinc-500 rounded w-full"></div>
                <div className="h-6 bg-zinc-500 rounded w-full"></div>
                <div className="h-6 bg-zinc-500 rounded w-full"></div>
                <div className="h-6 bg-zinc-500 rounded w-full"></div>
                <div className="h-6 bg-zinc-500 rounded w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Social Proof Bar */}
      <section className="bg-zinc-800/30 border-y border-zinc-700/50 py-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-around items-center gap-8 px-6">
          <div className="text-center">
            <p className="font-black text-4xl text-white">10,000+</p>
            <p className="text-zinc-400 text-sm">Shopify Stores</p>
          </div>
          <div className="text-center">
            <p className="font-black text-4xl text-white">99.9%</p>
            <p className="text-zinc-400 text-sm">Uptime Guaranteed</p>
          </div>
          <div className="text-center">
            <p className="font-black text-4xl text-white">$50M+</p>
            <p className="text-zinc-400 text-sm">Returns Processed</p>
          </div>
          <div className="text-center">
            <p className="font-black text-4xl text-white">4.9★</p>
            <p className="text-zinc-400 text-sm">Customer Rating</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-zinc-900 font-black text-4xl tracking-tight">
            The 3 workflows that protect your e-commerce margin
          </h2>
          <p className="text-zinc-500 mt-3 max-w-2xl mx-auto">
            From messy intake to actionable reports, Returns Triage Desk transforms your returns process with precision and efficiency.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-zinc-50 rounded-2xl border border-zinc-100 p-8 hover:shadow-md transition-shadow flex flex-col items-center text-center"
              >
                <div className={`${feature.color} rounded-xl p-3 inline-flex items-center justify-center mb-6`}>
                  <feature.icon size={28} strokeWidth={2.25} />
                </div>
                <h3 className="font-bold text-xl text-zinc-900 mb-2 tracking-tight">{feature.name}</h3>
                <p className="text-zinc-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locked Roadmap / Selling Points Section */}
      <section className="bg-zinc-950 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white font-black text-4xl tracking-tight">
            Unlock the full roadmap in one click
          </h2>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
            Beyond the MVP, gain access to advanced automation, team management, and robust analytics that scale with your business.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {lockedFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex items-start space-x-4 shadow-sm"
              >
                <Lock size={20} className="text-zinc-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-white tracking-tight">{feature.name}</h3>
                  <p className="text-zinc-400 text-sm mt-1">{feature.value}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="bg-zinc-800 text-zinc-500 text-xs px-2 py-0.5 rounded-full font-medium">
                      {feature.tier} Tier
                    </span>
                    <span className="text-zinc-600 text-xs">Available after upgrade</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="#pricing"
              className="bg-indigo-600 text-white font-bold rounded-xl px-8 py-4 shadow-lg hover:bg-indigo-700 transition-colors"
            >
              Unlock full roadmap →
            </Link>
            <p className="text-zinc-500 text-sm mt-4">
              Upon upgrading, a single click delivers these powerful features directly to your dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-zinc-50 py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-zinc-900 font-black text-4xl tracking-tight">
            How Returns Triage Desk works
          </h2>
          <p className="text-zinc-500 mt-3 max-w-2xl mx-auto">
            Streamline your return operations in three simple, powerful steps.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-12 md:space-y-0 md:space-x-12 mt-16">
            <div className="flex flex-col items-center text-center max-w-sm">
              <div className="w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center text-xl font-bold mb-4">
                1
              </div>
              <h3 className="font-bold text-xl text-zinc-900 mb-2 tracking-tight">Submit Returns</h3>
              <p className="text-zinc-600">
                Easily capture new return requests from any source, automatically structuring messy data into clean, actionable records.
              </p>
            </div>

            <ArrowRight size={32} className="text-zinc-400 hidden md:block mt-8" />
            <ArrowRight size={32} className="text-zinc-400 md:hidden rotate-90" />


            <div className="flex flex-col items-center text-center max-w-sm">
              <div className="w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center text-xl font-bold mb-4">
                2
              </div>
              <h3 className="font-bold text-xl text-zinc-900 mb-2 tracking-tight">Prioritize & Act</h3>
              <p className="text-zinc-600">
                View all pending returns in a single, intelligent dashboard, prioritizing high-value or urgent cases with smart scores.
              </p>
            </div>

            <ArrowRight size={32} className="text-zinc-400 hidden md:block mt-8" />
            <ArrowRight size={32} className="text-zinc-400 md:hidden rotate-90" />

            <div className="flex flex-col items-center text-center max-w-sm">
              <div className="w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center text-xl font-bold mb-4">
                3
              </div>
              <h3 className="font-bold text-xl text-zinc-900 mb-2 tracking-tight">Generate ROI Reports</h3>
              <p className="text-zinc-600">
                Produce instant, client-ready reports that prove your team's efficiency and identify areas for margin protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-zinc-900 font-black text-4xl tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="text-zinc-500 mt-3 max-w-2xl mx-auto">
            Choose the plan that fits your e-commerce operations. No credit card required for Starter.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 items-start">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`flex flex-col p-8 rounded-xl border border-zinc-200 shadow-sm transition-all duration-300 ${tier.highlight
                    ? 'bg-zinc-900 text-white scale-105 ring-2 ring-indigo-500 shadow-xl'
                    : 'bg-white'
                  }`}
              >
                <h3 className={`font-bold text-2xl tracking-tight ${tier.highlight ? 'text-white' : 'text-zinc-900'}`}>
                  {tier.name}
                </h3>
                <p className={`mt-2 ${tier.highlight ? 'text-zinc-300' : 'text-zinc-600'}`}>
                  {tier.description}
                </p>
                <div className="mt-6 flex items-baseline">
                  <span className={`text-5xl font-black ${tier.highlight ? 'text-white' : 'text-zinc-900'}`}>
                    {tier.price}
                  </span>
                  <span className={`ml-2 text-lg font-semibold ${tier.highlight ? 'text-zinc-300' : 'text-zinc-600'}`}>
                    {tier.period}
                  </span>
                </div>
                <ul className={`mt-8 space-y-4 text-sm ${tier.highlight ? 'text-zinc-300' : 'text-zinc-700'}`}>
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <CheckCircle
                        size={18}
                        className={`mr-3 ${tier.highlight ? 'text-indigo-400' : 'text-emerald-500'}`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={tier.ctaHref}
                  className={`block w-full text-center mt-10 py-3 rounded-lg font-bold transition-colors ${tier.highlight
                      ? 'bg-indigo-500 text-white hover:bg-indigo-600'
                      : 'bg-zinc-900 text-white hover:bg-zinc-700'
                    }`}
                >
                  {tier.cta}
                </Link>
                {tier.highlight && (
                  <p className="text-zinc-400 text-xs mt-3">
                    Includes one-click roadmap expansion post-payment.
                  </p>
                )}
                {tier.name === 'Enterprise' && (
                  <p className="text-zinc-400 text-xs mt-3">
                    Includes one-click roadmap expansion.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-zinc-50 py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-zinc-900 font-black text-4xl tracking-tight">
            What e-commerce managers are saying
          </h2>
          <p className="text-zinc-500 mt-3 max-w-2xl mx-auto">
            Real impact, real results, from operations teams just like yours.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white border border-zinc-200 rounded-xl shadow-sm p-8 text-left">
              <div className="flex text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" strokeWidth={0} />)}
              </div>
              <p className="text-zinc-700 text-lg italic">
                “Returns Triage Desk completely transformed our chaotic return process. We went from spending hours sifting through emails to having a perfectly prioritized queue. It’s saved us countless hours and significantly reduced our margin loss from manual errors.”
              </p>
              <p className="font-bold text-zinc-900 mt-6">Olivia Chen</p>
              <p className="text-zinc-500 text-sm">E-commerce Operations Manager at Aura Retail</p>
            </div>

            <div className="bg-white border border-zinc-200 rounded-xl shadow-sm p-8 text-left">
              <div className="flex text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" strokeWidth={0} />)}
              </div>
              <p className="text-zinc-700 text-lg italic">
                “Finally, a tool that truly understands e-commerce returns. The ROI reporting feature alone is worth its weight in gold – I can now show stakeholders the direct impact of our team&apos;s efficiency without any manual spreadsheet work. Indispensable.”
              </p>
              <p className="font-bold text-zinc-900 mt-6">Mark Davis</p>
              <p className="text-zinc-500 text-sm">Owner & Head of Operations at Stellar Goods</p>
            </div>

            <div className="bg-white border border-zinc-200 rounded-xl shadow-sm p-8 text-left">
              <div className="flex text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" strokeWidth={0} />)}
              </div>
              <p className="text-zinc-700 text-lg italic">
                “The intake system is flawless. We integrate various customer service channels, and Returns Triage Desk normalizes everything into a clear, actionable format. Our team can now focus on resolving issues, not on data entry. Highly recommend!”
              </p>
              <p className="font-bold text-zinc-900 mt-6">Sophia Rodriguez</p>
              <p className="text-zinc-500 text-sm">Customer Experience Lead at Prime Finds</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-black text-4xl md:text-5xl tracking-tight">
            Ready to reclaim your e-commerce margin?
          </h2>
          <p className="text-indigo-200 mt-4 text-xl">
            Join thousands of e-commerce operations managers streamlining their returns with Returns Triage Desk.
          </p>
          <Link
            href="/dashboard/triage-dashboard"
            className="inline-flex items-center justify-center bg-white text-indigo-700 font-bold rounded-xl px-8 py-4 mt-10 shadow-lg hover:shadow-xl transition-all"
          >
            Launch Dashboard →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-zinc-400 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="font-bold text-zinc-900 text-sm">RTD</span>
              </div>
              <span className="font-