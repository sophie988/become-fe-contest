import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🐋</span>
          <span className="text-xl font-bold text-blue-400">Whales Market</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Markets</a>
          <a href="#" className="hover:text-white transition-colors">Portfolio</a>
          <a href="#" className="hover:text-white transition-colors">Analytics</a>
        </div>
        <button className="bg-blue-600 hover:bg-blue-500 text-white text-sm px-4 py-2 rounded-lg transition-colors">
          Connect Wallet
        </button>
      </nav>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-8 py-16 text-center">
        <h1 className="text-5xl font-extrabold mb-4">
          Trade Like a <span className="text-blue-400">Whale</span>
        </h1>
        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
          The premier OTC marketplace for pre-market tokens. Buy and sell allocations with zero slippage.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3 rounded-xl transition-colors">
            Start Trading
          </button>
          <button className="border border-gray-700 hover:border-gray-500 text-gray-300 font-semibold px-8 py-3 rounded-xl transition-colors">
            Learn More
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-20">
          {[
            { label: 'Total Volume', value: '$1.2B+' },
            { label: 'Active Markets', value: '340+' },
            { label: 'Traders', value: '85K+' },
          ].map((stat) => (
            <div key={stat.label} className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <p className="text-3xl font-bold text-blue-400">{stat.value}</p>
              <p className="text-gray-500 mt-1 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
