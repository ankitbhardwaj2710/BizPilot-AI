
import { useState } from "react";
import { Link } from "react-router-dom";
import { Bot, User, Mail, Lock, ArrowRight } from "lucide-react";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignup(e) {
    e.preventDefault();
    alert("Account creation will be connected in the next sprint!");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#080711] px-5 py-10 text-white">

      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#12101d] p-8 shadow-2xl shadow-purple-950/30">

        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-purple-700">
            <Bot size={30} />
          </div>

          <h1 className="text-2xl font-bold">
            Create your account
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            Start your smarter business journey
          </p>
        </div>

        <form onSubmit={handleSignup} className="space-y-5">

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Full Name
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4">
              <User size={18} className="text-gray-500" />
              <input
                required
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Your name"
                className="w-full bg-transparent py-4 text-sm outline-none"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Email Address
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4">
              <Mail size={18} className="text-gray-500" />
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full bg-transparent py-4 text-sm outline-none"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Password
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4">
              <Lock size={18} className="text-gray-500" />
              <input
                type="password"
                required
                minLength={6}
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Create password"
                className="w-full bg-transparent py-4 text-sm outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 py-4 font-semibold transition hover:opacity-90"
          >
            Create Account <ArrowRight className="ml-2 inline" size={17} />
          </button>

        </form>

        <p className="mt-7 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-purple-400">
            Login
          </Link>
        </p>

        <Link to="/" className="mt-6 block text-center text-xs text-gray-500 hover:text-white">
          ← Back to Home
        </Link>

      </div>
    </div>
  );
}
