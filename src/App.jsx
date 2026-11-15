
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import {
  ArrowRight,
  Bot,
  CalendarCheck,
  ChartNoAxesCombined,
  MessageCircle,
  Sparkles,
  Menu,
  X,
  Check,
} from "lucide-react";

import { motion } from "framer-motion";

import Login from "./auth/Login";
import Signup from "./auth/Signup";

// ========================================
// LANDING PAGE
// ========================================

function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const features = [
    {
      icon: MessageCircle,
      title: "AI Customer Support",
      description:
        "Answer customer questions instantly with an intelligent AI assistant available 24/7.",
    },
    {
      icon: CalendarCheck,
      title: "Smart Appointments",
      description:
        "Let customers book appointments automatically without endless phone calls.",
    },
    {
      icon: ChartNoAxesCombined,
      title: "Business Analytics",
      description:
        "Track leads, conversations and bookings from one powerful dashboard.",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#080711] text-white">

      {/* NAVBAR */}

      <nav className="relative z-50 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">

        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-700 shadow-lg shadow-purple-500/30">
            <Bot size={23} />
          </div>

          <span className="text-xl font-bold tracking-tight">
            BizPilot<span className="text-violet-400"> AI</span>
          </span>
        </Link>

        <div className="hidden items-center gap-9 text-sm text-gray-400 md:flex">
          <a href="#features" className="transition hover:text-white">
            Features
          </a>

          <a href="#how-it-works" className="transition hover:text-white">
            How it works
          </a>

          <a href="#pricing" className="transition hover:text-white">
            Pricing
          </a>
        </div>

        <div className="hidden items-center gap-4 md:flex">

          <Link
            to="/login"
            className="text-sm text-gray-300 hover:text-white"
          >
            Log in
          </Link>

          <Link
            to="/signup"
            className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-violet-100"
          >
            Get Started <ArrowRight className="ml-1 inline" size={16} />
          </Link>

        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

      </nav>

      {/* MOBILE MENU */}

      {menuOpen && (
        <div className="relative z-40 mx-6 flex flex-col gap-5 rounded-2xl border border-white/10 bg-[#151221] p-6 text-gray-300 md:hidden">

          <a href="#features" onClick={() => setMenuOpen(false)}>
            Features
          </a>

          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>
            How it works
          </a>

          <a href="#pricing" onClick={() => setMenuOpen(false)}>
            Pricing
          </a>

          <Link to="/login" onClick={() => setMenuOpen(false)}>
            Login
          </Link>

          <Link to="/signup" onClick={() => setMenuOpen(false)}>
            Get Started
          </Link>

        </div>
      )}

      {/* HERO SECTION */}

      <section className="relative px-6 pb-24 pt-20 text-center lg:pt-28">

        <div className="pointer-events-none absolute left-1/2 top-10 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-purple-700/20 blur-[120px]" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-4xl"
        >

          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
            <Sparkles size={15} />
            Meet your new AI business assistant
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Your Business.
            <br />

            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              On Autopilot.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Meet BizPilot AI — the intelligent assistant that handles
            customer conversations, manages appointments and helps
            your business grow while you focus on what matters.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              to="/signup"
              className="rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-7 py-4 font-semibold shadow-xl shadow-purple-700/25 transition hover:scale-105"
            >
              Start for Free <ArrowRight className="ml-2 inline" size={18} />
            </Link>

            <a
              href="#features"
              className="rounded-xl border border-white/10 bg-white/5 px-7 py-4 font-medium text-white transition hover:bg-white/10"
            >
              Explore Features
            </a>

          </div>

          <p className="mt-5 text-xs text-gray-500">
            No credit card required · Built for growing businesses
          </p>

        </motion.div>

        {/* DASHBOARD PREVIEW */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto mt-20 max-w-5xl"
        >

          <div className="absolute inset-0 rounded-3xl bg-purple-600/20 blur-[100px]" />

          <div className="relative rounded-2xl border border-white/10 bg-[#12101d] p-3 shadow-2xl shadow-purple-950/50 sm:p-5">

            <div className="flex items-center gap-2 border-b border-white/10 pb-4">

              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />

              <span className="ml-3 text-xs text-gray-500">
                BizPilot AI Dashboard
              </span>

            </div>

            <div className="grid gap-4 py-5 text-left sm:grid-cols-3">

              {[
                ["Total Conversations", "1,284", "+18.2%"],
                ["Appointments", "342", "+12.5%"],
                ["Leads Generated", "856", "+24.8%"],
              ].map(([label, value, growth]) => (

                <div
                  key={label}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
                >

                  <p className="text-xs text-gray-500">{label}</p>

                  <div className="mt-3 flex items-end justify-between">
                    <h3 className="text-2xl font-bold">{value}</h3>
                    <span className="text-xs text-green-400">
                      {growth}
                    </span>
                  </div>

                </div>

              ))}

            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-left">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/20 text-purple-300">
                  <Bot />
                </div>

                <div>
                  <p className="font-semibold">BizPilot AI Assistant</p>
                  <p className="text-xs text-green-400">
                    ● Online · Ready to assist
                  </p>
                </div>

              </div>

              <div className="mt-6 max-w-md rounded-xl bg-purple-500/10 p-4 text-sm text-gray-300">
                Hello! Welcome to our business. How can I help you today?
              </div>

              <div className="ml-auto mt-4 max-w-xs rounded-xl bg-white/10 p-4 text-sm text-gray-300">
                I'd like to book an appointment for tomorrow.
              </div>

              <div className="mt-4 max-w-md rounded-xl bg-purple-500/10 p-4 text-sm text-gray-300">
                Absolutely! What time would work best for you?
              </div>

            </div>

          </div>

        </motion.div>

      </section>

      {/* FEATURES */}

      <section
        id="features"
        className="mx-auto max-w-7xl px-6 py-24 lg:px-10"
      >

        <div className="mx-auto mb-16 max-w-2xl text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
            Powerful Features
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Everything your business needs.
            <span className="text-purple-400"> One AI.</span>
          </h2>

          <p className="mt-5 leading-7 text-gray-400">
            Less repetitive work. More meaningful growth.
            Let AI take care of the busywork.
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-3">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:bg-purple-500/[0.05]"
              >

                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-600/20 text-purple-300">
                  <Icon size={27} />
                </div>

                <h3 className="mb-4 text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="leading-7 text-gray-400">
                  {feature.description}
                </p>

                <a
                  href="#how-it-works"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-purple-400"
                >
                  Learn more <ArrowRight size={15} />
                </a>

              </motion.div>
            );

          })}

        </div>

      </section>

      {/* HOW IT WORKS */}

      <section
        id="how-it-works"
        className="border-y border-white/5 bg-white/[0.02] px-6 py-24"
      >

        <div className="mx-auto max-w-5xl text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
            Simple Process
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Get started in three steps.
          </h2>

          <div className="mt-16 grid gap-10 text-left md:grid-cols-3">

            {[
              ["01", "Create your account", "Set up your business profile and add your services."],
              ["02", "Train your AI", "Add business information, FAQs and booking preferences."],
              ["03", "Let AI work", "Start handling conversations and appointments automatically."],
            ].map(([number, title, description]) => (

              <div key={number}>

                <span className="text-4xl font-bold text-purple-500/50">
                  {number}
                </span>

                <h3 className="mt-5 text-xl font-semibold">{title}</h3>

                <p className="mt-3 leading-7 text-gray-400">
                  {description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* PRICING */}

      <section
        id="pricing"
        className="mx-auto max-w-7xl px-6 py-24 text-center"
      >

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
          Simple Pricing
        </p>

        <h2 className="text-4xl font-bold sm:text-5xl">
          Plans that grow with you.
        </h2>

        <p className="mt-5 text-gray-400">
          Start small. Scale when you're ready.
        </p>

        <div className="mx-auto mt-12 max-w-md rounded-3xl border border-purple-500/30 bg-gradient-to-b from-purple-500/10 to-transparent p-8 text-left">

          <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs text-purple-300">
            Starter Plan
          </span>

          <h3 className="mt-6 text-3xl font-bold">
            ₹999
            <span className="text-sm font-normal text-gray-400">
              / month
            </span>
          </h3>

          <p className="mt-3 text-sm text-gray-400">
            Everything you need to start automating your business.
          </p>

          <div className="my-7 space-y-4 text-sm text-gray-300">

            {[
              "AI customer support",
              "Business knowledge base",
              "Customer conversations",
              "Basic analytics",
            ].map((item) => (

              <p key={item} className="flex items-center gap-3">
                <Check size={17} className="text-purple-400" />
                {item}
              </p>

            ))}

          </div>

          <Link
            to="/signup"
            className="block w-full rounded-xl bg-purple-600 py-4 text-center font-semibold transition hover:bg-purple-500"
          >
            Get Started
          </Link>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="border-t border-white/10 px-6 py-10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">

          <Link to="/" className="flex items-center gap-2 font-bold">
            <Bot className="text-purple-400" />
            BizPilot AI
          </Link>

          <p className="text-sm text-gray-500">
            © 2026 BizPilot AI. Built for smarter businesses.
          </p>

        </div>

      </footer>

    </main>
  );
}

// ========================================
// MAIN APP ROUTER
// ========================================

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

      </Routes>
    </BrowserRouter>
  );
}
