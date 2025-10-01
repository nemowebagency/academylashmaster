function App() {
  const handleLogin = () => {
    alert('Funzionalità di accesso in arrivo!')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Benvenuto
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            Benvenuto nella Academy Lash Master
          </p>
          <button
            onClick={handleLogin}
            className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          >
            Accedi
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
