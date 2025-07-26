import { useState } from "react";

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUploadImage(url);
      // Simulate enhancement
      setTimeout(() => {
        setEnhancedImage(url); // mock: use same image
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full space-y-10">

      {/* Upload Box */}
      <label className="cursor-pointer border-2 border-dashed border-gray-400 rounded-xl py-10 px-6 bg-white/70 shadow-md text-center text-gray-700 text-lg font-medium w-full max-w-2xl">
        Click and drag to upload your image
        <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
      </label>

      {/* Image Previews - Centered Grid */}
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
          {/* Original Image */}
          <div className="bg-gray-100 rounded-xl shadow-lg overflow-hidden flex flex-col">
            <div className="bg-gray-800 text-white text-center py-2 font-semibold rounded-t-xl">
              Original Image
            </div>
            <div className="h-64 flex items-center justify-center px-4">
              {uploadImage ? (
                <img src={uploadImage} alt="Original" className="max-h-full max-w-full object-contain" />
              ) : (
                <p className="text-gray-600">No Image Selected</p>
              )}
            </div>
          </div>

          {/* Enhanced Image */}
          <div className="bg-gray-100 rounded-xl shadow-lg overflow-hidden flex flex-col">
            <div className="bg-blue-700 text-white text-center py-2 font-semibold rounded-t-xl">
              Enhanced Image
            </div>
            <div className="h-64 flex items-center justify-center px-4">
              {enhancedImage ? (
                <img src={enhancedImage} alt="Enhanced" className="max-h-full max-w-full object-contain" />
              ) : (
                <p className="text-gray-600">No Enhanced Image</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
