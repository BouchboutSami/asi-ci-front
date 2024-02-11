import React from "react";

const App = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{
        backgroundImage:`url('/images/Login.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ESI Logo with top margin */}
      <div className="mb-10">
        <img
          src="/images/ESI.png"
          alt="ESI Logo"
          className="mb-2 mt-4"
        />
      </div>

      {/* SIGREX WEB Text with margin */}
      <div className="mb-10">
        <h1 className="text-4xl font-black text-blue mb-2 mt-2">SIGREX WEB</h1>
      </div>

      {/* Login Form with margin */}
      <div className="mb-10 w-1/4">
        <form className="w-full max-w-lg mt-3">
          {/* Username Field */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue"
            />
          </div>

          {/* Forgotten Password Link */}
          <div className="mb-4 text-right">
            <a href="/forgottenPassword" className="text-blue text-sm">
              Forgotten password?
            </a>
          </div>

          {/* Connect Button */}
          <button
            type="submit"
            className="w-full bg-blue text-white rounded-md py-2 transition duration-300 hover:bg-[#a5c7e6]"
          >
            Connect
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
