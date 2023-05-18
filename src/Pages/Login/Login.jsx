import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { loginNewUser } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState(null); 

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";


  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginNewUser(email, password)
      .then((res) => {
        // Signed in
        const user = res.user;
        console.log(user);
        form.reset();
        navigate(from);
        // ...
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
      });
  };
  return (
    <div className="m-auto xl:container px-12 sm:px-0 mx-auto border-2 bg-base-200">
      <div className="mx-auto h-full sm:w-max  mb-8">
        <div className="m-auto shadow-xl">
          <div className="mt-12 rounded-3xl border bg-white -mx-6 sm:-mx-10 p-8 sm:p-10">
            <h3 className="text-2xl font-semibold text-gray-700">
              Loginz to your account
            </h3>
            <div className="mt-12 flex flex-wrap sm:grid gap-6 grid-cols-2">
              <button className="w-full h-11 rounded-full border border-gray-300 bg-white px-6 transition hover:bg-gray-50">
                <div className="w-max mx-auto flex items-center justify-center space-x-4">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png"
                    className="w-5"
                    alt=""
                  />
                  <span className="block w-max text-sm font-semibold tracking-wide text-cyan-700">
                    With Google
                  </span>
                </div>
              </button>
              <button className="w-full h-11 rounded-full bg-gray-900 px-6 transition hover:bg-gray-800">
                <div className="w-max mx-auto flex items-center justify-center space-x-4 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  <span className="block w-max text-sm font-semibold tracking-wide text-white">
                    With Github
                  </span>
                </div>
              </button>
            </div>

            <form onSubmit={handleLogin} className="mt-10 space-y-8">
              <div>
                <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                  <input
                    id=""
                    type="email"
                    name="email"
                    placeholder="Your email or user name"
                    className="w-full bg-transparent pb-3 border-b border-gray-300 outline-none invalid:border-red-400 transition"
                  />
                </div>
              </div>

              <div className="flex flex-col items-end">
                <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                  <input
                    id=""
                    type="Your password"
                    placeholder="Your Password"
                    name="password"
                    className="w-full bg-transparent pb-3 border-b border-gray-300 outline-none invalid:border-red-400 transition"
                  />
                </div>
                <button type="reset" className="-mr-3 w-max p-3">
                  <span className="text-sm tracking-wide text-sky-600">
                    Forgot password ?
                  </span>
                </button>
              </div>
              <p className="text-red-400">{errorMessage}</p>
              <div>
                <button className="w-full rounded-full bg-sky-500 h-11 flex items-center justify-center px-6 py-3 transition hover:bg-sky-600">
                  <span className="text-base font-semibold text-white">
                    Login
                  </span>
                </button>
                <button href="#" type="reset" className="-ml-3 w-max p-3">
                  <Link to="/signup">
                    {" "}
                    <span className="text-sm tracking-wide text-sky-600">
                      Create new account
                    </span>
                  </Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
