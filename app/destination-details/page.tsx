"use client";

import { useRouter } from "next/navigation";

export default function DestinationDetails() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-950 to-black text-white p-8 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-6 text-center tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-indigo-600">
        Destination Details
      </h1>

      <p className="text-gray-300 max-w-xl text-center mb-10">
        Here, you'll find detailed information about our top travel destinations.
      </p>

      {/* Go Back Button */}
      <button
        onClick={() => router.push("/")}
        className="border border-white text-white px-6 py-2 rounded-xl hover:bg-white hover:text-zinc-900 transition transform hover:scale-105"
      >
        Back to Explore
      </button>

      {/* Destination Details Content */}
      <div className="mt-12 max-w-4xl w-full text-center">
        <h2 className="text-3xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-indigo-600">
          Top Destination: Bali
        </h2>
        <p className="text-lg text-gray-400 mb-8">
          Bali is a tropical paradise known for its lush landscapes, stunning beaches, and rich culture. Explore the beaches, temples, and vibrant nightlife Bali has to offer!
        </p>
        <p className="text-sm text-gray-500 mb-2">Best time to visit: April to October</p>
        <p className="text-sm text-gray-500 mb-2">Average cost: $800 - $1500 per week</p>
      </div>

      <footer className="mt-16 text-sm text-gray-600 text-center">
        ✈️ Dream big and explore the world!
      </footer>
    </div>
  );
}
