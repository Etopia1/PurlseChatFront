// const Hero = () => {

//   return (
//     <div className="w-full bg-[blue] flex items-center justify-center h-[100vh]">
//       <div className="bg-[green] flex  items-center justify-between  mx-auto h-[90vh] container flex-wrap gap-2 px-4">
//         <div className="w-[600px] bg-black flex justify-center items-center h-[70vh] max-sm:h-[40vh] max-lg:h-[40vh] md:w-full lg:w-[600px] max-sm:w-full">

//         </div>

//         <div className="w-[600px] bg-[red] flex justify-center items-center h-[70vh] max-sm:h-[37vh] max-lg:h-[36vh] md:w-full lg:w-[600px]">

//         </div>

//       </div>

//     </div>
//   )
// }

// export default Hero
const Hero = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center px-4">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        
        {/* Text Content */}
        <div className="md:w-1/2 text-white text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Build Stunning UIs with Ease
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Create fast, responsive, and modern interfaces using powerful tools and beautiful design.
          </p>
          <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition">
            Get Started
          </button>
        </div>

        {/* Image/Illustration */}
        <div className="md:w-1/2">
          <img 
            src="" 
            alt="Tech illustration" 
            className="rounded-lg shadow-lg w-full object-cover max-h-[400px]"
          />
        </div>

      </div>
    </div>
  );
};

export default Hero;
