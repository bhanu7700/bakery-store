import React, { useContext, useState } from "react";
import { Auth } from "../context/AuthContext";

const LoginPage = () => {
  const {
    registerDetails,
    setRegisterDetails,
    loginDetails,
    setLoginDetails,
    handleCreateAccount, handleLogin
  } = useContext(Auth);

  const [account, setAccount] = useState(true);

  const handleRegisterInputChange = (event) => {
    const { name, value } = event.target;
    setRegisterDetails({
      ...registerDetails,
      [name]: value,
    });
    // setIsFormValid(checkFormValidity());
  };

  const handleLoginInputChange = (event) => {
    const { name, value } = event.target;
    setLoginDetails({
      ...loginDetails,
      [name]: value,
    });
    // setIsFormValid(checkFormValidity());
  };

  return (
    <>
      {account ? (
        <div className="text-center paddin-x py-4 flex flex-col justify-center items-center">
          <img src="/images/logo.png" alt="logo" className="h-16" />
          <h1 className="text-[26px] font-bold py-2">Login to your account</h1>
          <h1 className="mb-5 font-semibold ">
            Don't have an account yet?
            <span className="text-[#fc7c7c]" onClick={() => setAccount(false)}>
              {" "}
              {""}Signup
            </span>
          </h1>
          <form onSubmit={(e) => handleLogin(e)} className="flex gap-4 flex-col">
            {/* <label class="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                class="input border-0  w-full max-w-xs"
                placeholder="Email"
              />
            </label> */}
            <label class="border-[2px] px-4 rounded flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="w-4 h-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="text"
                class=" border-0 border-none focus:ring-0 w-full max-w-xs "
                placeholder="Username"
                name="username"
                value={loginDetails.username}
                onChange={handleLoginInputChange}
              />
            </label>
            <label class="border-[2px] px-4 rounded flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="w-4 h-4 opacity-70"
              >
                <path
                  fill-rule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                type="password"
                class="border-0 border-none focus:ring-0  w-full max-w-xs"
                placeholder="Password"
                name="password"
                value={loginDetails.password}
                onChange={handleLoginInputChange}
              />
            </label>
            <button type="submit" className="w-full bg-black text-white rounded py-2 font-bold hover:bg-[#fc7c7c]">
              Login
            </button>
          </form>
        </div>
      ) : (
        <div className="text-center paddin-x py-4 flex flex-col justify-center items-center">
          <img src="/images/logo.png" alt="logo" className="h-16" />
          <h1 className="text-[26px] font-bold py-2">Create an account</h1>
          <h1 className="mb-5 font-semibold ">
            Have an account already?
            <span className="text-[#fc7c7c]" onClick={() => setAccount(true)}>
              {" "}
              {""}Login
            </span>
          </h1>
          <form
            onSubmit={(e) => handleCreateAccount(e)}
            className="flex gap-4 flex-col"
          >
            <label class="border-[2px] px-4 rounded flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                class="border-0 border-none focus:ring-0 w-full max-w-xs"
                placeholder="Email"
                name="email"
                value={registerDetails.email}
                onChange={handleRegisterInputChange}
              />
            </label>
            <label class="border-[2px] px-4 rounded flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="w-4 h-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="text"
                class=" border-0 border-none focus:ring-0 w-full max-w-xs "
                placeholder="Username"
                name="username"
                value={registerDetails.username}
                onChange={handleRegisterInputChange}
              />
            </label>
            <label class="border-[2px] px-4 rounded flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="w-4 h-4 opacity-70"
              >
                <path
                  fill-rule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                type="password"
                class="border-0 border-none focus:ring-0  w-full max-w-xs"
                placeholder="Password"
                name="password"
                value={registerDetails.password}
                onChange={handleRegisterInputChange}
              />
            </label>
            <button
              type="submit"
              className="w-full bg-black text-white rounded py-2 font-bold hover:bg-[#fc7c7c]"
            >
              SignUp
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default LoginPage;
