export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-4">AutoDocumentary AI</h1>
        <p className="text-xl text-gray-300 mb-8">
          Create AI-powered documentaries in minutes
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition">
          Get Started
        </button>
      </div>
    </main>
  );
}
