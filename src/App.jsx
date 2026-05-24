
function App() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white flex items-center justify-center">
      
      <div className="bg-zinc-800 p-10 rounded-3xl shadow-2xl border border-zinc-700 text-center space-y-5">
        
        <h1 className="text-5xl font-bold text-cyan-400">
          Tailwind CSS 🚀
        </h1>

        <p className="text-zinc-300 text-lg">
          Successfully connected with React + Vite
        </p>

        <a
            href="https://github.com/Zephyrex21"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 px-6 py-3 rounded-xl font-semibold text-black"
          >
            Zephyrex Github
        </a>

      </div>

    </div>
  )
}

export default App
