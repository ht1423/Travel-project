"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DatePicker } from "@/components/ui/date-picker";
import travelImage from '@/public/travel.jpg'
import pattayaImage from '@/public/pattaya.jpg'
import phuketImage from '@/public/phuket.webp'
import bangkokImage from '@/public/bangkok.webp'
import { useRouter } from "next/navigation";


export default function Home() {
const router = useRouter();

  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center w-full">
      {/* Hero Section */}
      <div className="relative h-[100vh] w-full">
        <Image
          src={travelImage}
          alt="Beautiful destination landscape"
          fill
          className="object-cover brightness-[0.4]"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-center">
            Explore the World
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-[600px] text-gray-200">
            Your journey begins here. Discover amazing destinations and create unforgettable memories.
          </p>
          <Button
  size="lg"
  className="text-lg px-8 bg-white text-black hover:bg-gray-200"
  onClick={() => router.push("/explore")}
>
  Start Planning
</Button>

        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-6xl mx-auto -mt-24 px-4">
        <Card className="border-none shadow-2xl bg-zinc-900/90 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-200">Where to?</label>
                <Input type="text" placeholder="Enter destination" className="h-11 bg-zinc-800 border-zinc-700 text-white placeholder:text-gray-400" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-200">Check in</label>
                <DatePicker />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-200">Check out</label>
                <DatePicker />
              </div>
              <div className="flex items-end">
                <Button className="w-full h-11 bg-white text-black hover:bg-gray-200">
                  Search Trips
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Featured Destinations */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-8 text-white">Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Bangkok, Thailand", image: bangkokImage, price: "From $899" },
            { name: "Pattaya, Thailand", image: pattayaImage, price: "From $1299" },
            { name: "Phuket, Thailand", image: phuketImage, price: "From $1499" },
          ].map((destination) => (
            <Card key={destination.name} className="group cursor-pointer border-none overflow-hidden bg-zinc-900">
              <CardContent className="p-0">
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-white">{destination.name}</h3>
                  <p className="text-blue-400 font-medium">{destination.price}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-zinc-900 py-20 w-full">
        <div className="w-full mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">
            Why Travel With Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Best Price Guarantee",
                description: "We match any price and give you an additional 10% off.",
                icon: "💰",
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock assistance for all your travel needs.",
                icon: "👥",
              },
              {
                title: "Secure Booking",
                description: "Industry-leading security for peace of mind.",
                icon: "🛡️",
              },
            ].map((feature) => (
              <Card key={feature.title} className="border-none bg-zinc-800">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <CardTitle className="mb-2 text-white">{feature.title}</CardTitle>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Currency Exchange Section */}
      <div className="bg-zinc-800 py-20 w-full">
        <div className="w-full mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Currency Exchange</h2>
          <p className="text-xl text-center text-gray-400 mb-8 max-w-lg mx-auto">
            Exchange your money for the best rates and get ready for your next trip. Stay on top of your budget while traveling the world!
          </p>
          <div className="flex justify-center">
            <Button
              className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-3"
              onClick={() => router.push("/exchange")}
            >
              Go to Currency Exchange
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-zinc-950 text-gray-300 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">About Us</h4>
              <p className="text-gray-400">
                Creating unforgettable travel experiences since 2024. Your trusted partner in adventure.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Button variant="link" className="h-auto p-0 text-gray-400 hover:text-white">Destinations</Button>
                </li>
                <li>
                  <Button variant="link" className="h-auto p-0 text-gray-400 hover:text-white">Special Offers</Button>
                </li>
                <li>
                  <Button variant="link" className="h-auto p-0 text-gray-400 hover:text-white">Holiday Packages</Button>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@sojourninternational.xyz</li>
                <li>Phone: +66 038415151</li>
                <li>Address: House No. 202/198 Mwat MuNum, Nong Prue, Banglamung, Chonburi 20150</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Newsletter</h4>
              <div className="flex space-x-2">
                <Input type="email" placeholder="Enter your email" className="bg-zinc-800 border-zinc-700 text-white placeholder:text-gray-400" />
                <Button className="bg-white text-black hover:bg-gray-200">Join</Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
