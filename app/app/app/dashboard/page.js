import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold mb-8">Welcome to Your HelloHub Dashboard</h1>
        <p className="text-xl mb-12">Your AI receptionist is ready to set up!</p>
        
        <div className="max-w-2xl mx-auto bg-gray-800 rounded-2xl p-10 shadow-2xl">
          <h2 className="text-3xl font-bold mb-6">Step 1: Create Your First Receptionist</h2>
          <p className="text-lg mb-8 opacity-90">
            Click below to build your AI voice agent in under 2 minutes.
          </p>
          <Link
            href="/dashboard/create"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 px-12 py-6 rounded-xl text-2xl font-bold transition"
          >
            Create AI Receptionist
          </Link>
        </div>

        <div className="mt-20">
          <p className="text-sm opacity-60">
            More features coming: call logs, payments, custom scripts, team access
          </p>
        </div>
      </div>
    </div>
  );
}
