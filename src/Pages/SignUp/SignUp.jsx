import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../hook/useTitle";



const SignUp = () => {
  const { registerNewUser, updateProfileData } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
 console.log(location)
 useTitle('SignUp')
  const from = location.state?.from || "/";

  //   const navigate = useNavigate();
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");
  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
    if (password.length < 6) {
      setErr(err);
    } else {
      setErr("");
    }
    if ((name, email, password)) {
      registerNewUser(email, password)
        .then((res) => {
          // Signed in
          const user = res.user;
          console.log(user);
          updateProfileData(name, photo);

          form.reset();
          let timerInterval;
          Swal.fire({
            title: "Confirmation!",
            html: "Successfully Created Profile",
            timer: 3000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
              const b = Swal.getHtmlContainer().querySelector("b");
              timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft();
              }, 4000);
            },
            willClose: () => {
              clearInterval(timerInterval);
            },
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              console.log("I was closed by the timer");
            }
          });

          navigate(from);
          // ...
        })
        .catch((error) => {
          console.log(error.message);
          setErr(error.message);
        });
    }
  };

  return (
    <div>
      <div className="min-h-screen bg-base-200">
        <div className="hero-content flex-col bg-gray-200 ">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 mt-8">Register Now </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-xl text-center shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="flex gap-8">
                <div className=" form-control">
                  <label className="label">
                    <span className="label-text font-bold">Your Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name here"
                    className="input input-bordered"
                    name="name"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Your Photo</span>
                  </label>
                  <input
                    type="text"
                    placeholder="photo here"
                    className="input input-bordered"
                    name="photo"
                  />
                </div>
              </div>
              <div className="flex gap-8">
                <div className=" form-control">
                  <label className="label">
                    <span className="label-text font-bold">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    name="email"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    name="password"
                    required
                  />
                </div>
              </div>
              <p className="text-red-400 ps-3 flex items-center">
                {" "}
                <small className="ps-1"> {err}</small>
                <small className="ps-1"> {success}</small>
              </p>
              <div className="form-control mt-6">
                <button className="btn bg-[#B27A5A] border-0">Register</button>
              </div>
              <p>
                Already Have account?{" "}
                <Link to="/login">
                  <span className="btn btn-ghost">Login!</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
