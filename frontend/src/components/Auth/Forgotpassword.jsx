

const Forgotpassword = () => {
  
  return (
    <>


      <div className="flex justify-center items-center flex-col mt-5 mx-2 bg-white border-2 border-gray-300 rounded-lg  gap-1 md:w-full">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Oh no! Forgot your password?
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Don't worry — it happens to the best of us. Enter your email below to reset it.
        </p>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="input-field w-80"
              placeholder="you@example.com"
              required
            />
          </div>

          <button
            type="submit"
            className="ml-20 py-2 px-4 bg-[#3498DB] hover:bg-blue-700 text-white font-semibold rounded-md"
          >
            Send Reset Link
          </button>
        </form>

        <div className="mt-6 text-center"><span>
          <a href="/" className="text-sm">
            Remembered your password? Login
          </a></span>
        </div>

        </div>


      {/* <div className="underwork flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold"  >Under Work</h1>
            <p className="text-lg text-gray-500">We are working on this page. Please check back later. or contact us for more information.</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">Contact Us</button>
            <button  onClick={handleCheckBackLater} className="bg-gray-500 text-white px-4 py-2 rounded-md mt-4">Check Back Later</button> 
        </div> */}
    </>
  );
};

export default Forgotpassword;