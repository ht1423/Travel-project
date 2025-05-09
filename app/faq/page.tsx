"use client";

import { useRouter } from "next/navigation";

export default function FAQPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-950 to-black text-white p-8 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-6 text-center tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-indigo-600">
        Frequently Asked Questions (FAQs)
      </h1>

      <p className="text-gray-300 max-w-xl text-center mb-10">
        Got questions? We’ve got answers! Check out our frequently asked questions below.
      </p>

      {/* Go Back Button */}
      <button
        onClick={() => router.push("/")}
        className="border border-white text-white px-6 py-2 rounded-xl hover:bg-white hover:text-zinc-900 transition transform hover:scale-105"
      >
        Back to Explore
      </button>

      {/* FAQ Content */}
      <div className="mt-12 max-w-3xl w-full text-left space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-white">What is the best time to travel?</h3>
          <p className="text-gray-400">The best time to travel depends on the destination, but most places are ideal for visiting between spring and fall.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">How do I make a booking?</h3>
          <p className="text-gray-400">Simply choose your destination, pick your dates, and follow the instructions on the booking page!</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">Do I need travel insurance?</h3>
          <p className="text-gray-400">We recommend travel insurance to protect yourself in case of unexpected events like flight cancellations or medical emergencies.</p>
        </div>
      </div>

      <footer className="mt-16 text-sm text-gray-600 text-center">
        ✈️ We’re here to help with your travel plans!
      </footer>
    </div>
  );
}
