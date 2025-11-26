import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Hero */}
      <div className="container mx-auto px-6 pt-32 pb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-8">
          Never Miss a Call Again
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90">
          HelloHub is your 24/7 AI receptionist. Answers calls, books appointments, qualifies leads — all while you sleep.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            href="/dashboard"
            className="bg-white text-indigo-600 px-10 py-5 rounded-full text-xl font-bold hover:bg-gray-100 transition shadow-2xl"
          >
            Get Started Free
          </Link>
          <a
            href="tel:+15551234567"
            className="border-2 border-white px-10 py-5 rounded-full text-xl font-bold hover:bg-white hover:text-indigo-600 transition"
          >
            Call Demo → 555-123-4567
          </a>
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="text-6xl mb-6">24/7</div>
            <h3 className="text-2xl font-bold mb-4">Always On</h3>
            <p className="opacity-80">Answers every call instantly, even at 3 AM.</p>
          </div>
          <div className="text-center">
            <div className="text-6xl mb-6">Human-like</div>
            <h3 className="text-2xl font-bold mb-4">Sounds Real</h3>
            <p className="opacity-80">Natural voice powered by Vapi — callers can’t tell it’s AI.</p>
          </div>
          <div className="text-center">
            <div className="text-6xl mb-6">No Code</div>
            <h3 className="text-2xl font-bold mb-4">5-Min Setup</h3>
            <p className="opacity-80">Just tell it what
