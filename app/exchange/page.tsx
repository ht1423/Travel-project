"use client";

import { useState } from "react";

export default function CurrencyExchangePage() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");

  const handleExchange = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder logic for now
    alert(`Convert ${amount} ${fromCurrency} to ${toCurrency}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-black text-white flex flex-col items-center justify-center px-6 py-10">
      <h1 className="text-4xl font-bold mb-3 text-center">
        💱 Currency Exchange
      </h1>
      <p className="text-gray-400 mb-8 text-center max-w-md">
        Quickly convert between world currencies and plan your budget like a pro ✈️
      </p>

      <form
        onSubmit={handleExchange}
        className="bg-zinc-800/60 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-md"
      >
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            required
            className="w-full px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-white"
            placeholder="Enter amount"
          />
        </div>

        <div className="mb-4 flex gap-4">
          <div className="w-1/2">
            <label className="block mb-2 text-sm font-medium">From</label>
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white"
            >
              <option value="USD">USD</option>
              <option value="INR">INR</option>
              <option value="EUR">EUR</option>
              <option value="THB">THB</option>
            </select>
          </div>
          <div className="w-1/2">
            <label className="block mb-2 text-sm font-medium">To</label>
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white"
            >
              <option value="INR">INR</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="THB">THB</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-white text-zinc-900 font-semibold py-2 rounded-lg hover:bg-zinc-200 transition"
        >
          Convert
        </button>
      </form>

      <p className="mt-6 text-sm text-gray-500 text-center max-w-sm">
        🌍 Exchange rates are dynamic. Be sure to double-check before your big trip!
      </p>
    </div>
  );
}
