"use client";

import { useRouter } from "next/navigation";

export default function ExplorePage() {
  const router = useRouter();

  const tips = [
    "✨ Always pack light but smart — layers are key!",
    "🌍 Step off the beaten path — that's where magic lives.",
    "📸 Take photos, but don’t forget to live the moment.",
    "💬 Learn basic phrases of the local language — game changer!",
    "🧘‍♀️ Slow down, breathe, soak it all in.",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-950 to-black text-white p-8 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-6 text-center tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-indigo-600">
        Plan Your Trip
      </h1>

      <p className="text-gray-300 max-w-xl text-center mb-10">
        Ready to explore the world? We’ll help you craft the perfect journey — full of memories, meaning, and magic.
      </p>

      {/* Sign In Button */}
      <button
        onClick={() => router.push("/signin")}
        className="mb-12 border border-white text-white px-6 py-2 rounded-xl hover:bg-white hover:text-zinc-900 transition transform hover:scale-105"
      >
        Sign In
      </button>

      {/* Navigation Buttons */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl w-full mb-12">
        <button
          onClick={() => router.push("/destination-details")}
          className="bg-zinc-800/80 backdrop-blur-lg p-6 rounded-2xl shadow-xl hover:shadow-2xl transition text-lg font-medium text-white hover:bg-green-500 hover:text-black"
        >
          Explore Destinations
        </button>
        <button
          onClick={() => router.push("/faq")}
          className="bg-zinc-800/80 backdrop-blur-lg p-6 rounded-2xl shadow-xl hover:shadow-2xl transition text-lg font-medium text-white hover:bg-blue-500 hover:text-black"
        >
          FAQs
        </button>
        <button
          onClick={() => router.push("/blog")}
          className="bg-zinc-800/80 backdrop-blur-lg p-6 rounded-2xl shadow-xl hover:shadow-2xl transition text-lg font-medium text-white hover:bg-purple-500 hover:text-black"
        >
          Travel Blog
        </button>
      </div>

      {/* Travel Vibes Section */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl w-full">
        {tips.map((tip, idx) => (
          <div
            key={idx}
            className="bg-zinc-800/70 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105"
          >
            <p className="text-lg font-medium text-white">{tip}</p>
          </div>
        ))}
      </div>

      <footer className="mt-16 text-sm text-gray-600 text-center">
        ✈️ Built for dreamers. Start your next adventure today.
      </footer>
    </div>
  );
}
