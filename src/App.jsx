import Home from "./components/Home";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#b6f0e7] via-[#cde9ff] to-[#e4f5ff] flex items-center justify-center px-4 py-12">
      <main className="bg-white/90 backdrop-blur-md border border-[#a5def1] shadow-xl rounded-3xl max-w-6xl w-full p-10 flex flex-col items-center space-y-10">

        {/* Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-gradient-to-r from-[#012a4a] via-[#228ca1] to-[#68d8d6] bg-clip-text drop-shadow-md tracking-tight text-center leading-tight break-words overflow-visible">
          AI Image Enhancer
        </h1>

        {/* Subtitle */}
        <p className="text-center text-gray-700 max-w-2xl text-lg sm:text-xl leading-relaxed font-medium">
          Upload your image and let <span className="text-[#16798a] font-semibold">AI</span> work its magic — 
          <span className="text-[#126a72] font-semibold"> sharper, clearer, smarter</span> in seconds.
        </p>

        {/* Image Upload Section */}
        <div className="w-full flex justify-center">
          <Home />
        </div>

        {/* Footer */}
        <footer className="text-gray-600 text-sm pt-6 flex items-center space-x-2">
          <svg
            className="h-4 w-4 text-[#e85d75]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
           
          </svg>
          <span className="font-semibold">Made by @Prajjwal</span>
        </footer>
      </main>
    </div>
  );
};

export default App;
