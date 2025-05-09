"use client";

import { useRouter } from "next/navigation";

export default function BlogPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-950 to-black text-white p-8 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-6 text-center tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-indigo-600">
        Travel Blog
      </h1>

      <p className="text-gray-300 max-w-xl text-center mb-10">
        Get inspired with travel tips, stories, and advice from fellow adventurers!
      </p>

      {/* Go Back Button */}
      <button
        onClick={() => router.push("/")}
        className="border border-white text-white px-6 py-2 rounded-xl hover:bg-white hover:text-zinc-900 transition transform hover:scale-105"
      >
        Back to Explore
      </button>

      {/* Blog Posts */}
      <div className="mt-12 max-w-4xl w-full text-left space-y-8">
        <div>
          <h3 className="text-2xl font-semibold text-white">Top 5 Hidden Gems in Europe</h3>
          <p className="text-gray-400">Discover the secret spots in Europe that most tourists never get to see!</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-white">How to Travel on a Budget</h3>
          <p className="text-gray-400">Traveling doesn’t have to be expensive. Here are our best tips for exploring the world on a budget.</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-white">Ultimate Packing List for a Long Trip</h3>
          <p className="text-gray-400">Everything you need to bring on your next big adventure — and what to leave behind.</p>
        </div>
      </div>

      <footer className="mt-16 text-sm text-gray-600 text-center">
        ✈️ Stay inspired and start planning your next adventure!
      </footer>
    </div>
  );
}
