import { useState } from "react"
import Header from "./Header"

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)




  
  const toggleForm = () => {
    setIsSignInForm(!isSignInForm)
  }
  return (
    <>
      <div className="absolute">
                  <Header />
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>

      <form className="absolute w-3/12 p-12 bg-black mx-auto  my-36 right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="py-4 font-bold text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 m-2 w-full bg-gray-700"
          ></input>
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 m-2 w-full bg-gray-700"
        ></input>
        <input
          type="password"
          placeholder="password "
          className="p-3  m-2 w-full  bg-gray-700"
        ></input>
        <button className="p-3 m-2  bg-red-700 w-full rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleForm}>
          {isSignInForm
            ? "New to Netflix ? Sign up now"
            : "Already user Sign in now"}
        </p>
      </form>
    </>
  )
}

export default Login
