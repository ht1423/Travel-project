"use client";

import { useState } from "react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your sign-in logic here
    console.log("Signing in with", email, password);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-950 text-white flex flex-col items-center justify-center px-6 py-10">
      <h1 className="text-4xl font-bold mb-3 text-center">
        Welcome Back, Explorer 🧭
      </h1>
      <p className="text-gray-400 mb-8 text-center max-w-md">
        Every journey starts with a single step. Log in to plan your dream trip,
        track your bookings, and unlock exclusive travel insights ✨
      </p>

      <form
        onSubmit={handleSignIn}
        className="bg-zinc-800/60 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-md"
      >
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-white"
            placeholder="you@email.com"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-white"
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-white text-zinc-900 font-semibold py-2 rounded-lg hover:bg-zinc-200 transition"
        >
          Sign In
        </button>
      </form>

      <p className="mt-6 text-gray-500 text-sm text-center max-w-sm">
        🔒 We value your privacy. Your data is secure, and your journey is
        personal. Let’s make it unforgettable.
      </p>
    </div>
  );
}
