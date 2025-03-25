import bg from "./assets/bg-intro-desktop.png";
import bgmobile from "./assets/bg-intro-mobile.png";
import "./App.css";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); 
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name cannot be empty";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name cannot be empty";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email cannot be empty";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Looks like this is not an email";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password cannot be empty";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Formulario enviado correctamente!");
    }
  };

  return (
    <>
      <img className="absolute top-0 left-0 w-full h-full -z-1 lg:hidden " src={bgmobile} alt="" />
      <img className="absolute top-0 left-0 w-full -z-1 max-lg:hidden "  src={bg} alt="" />
      <div className="flex w-[90%] max-lg:flex-col max-lg:text-center max-lg:justify-center lg:justify-around items-center ">
        <div className="mr-10">
          <h1 className="font-bold text-4xl">Learn to code by watching others</h1>
          <p className="my-10">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>

        <div>
          <div className="bg-[#6055a5] max-lg:w-[90%] text-center p-4 rounded-xl shadow-xl text-white">
            <p><span className="font-bold">Try it free 7 days</span> then $20/mo. thereafter</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex text-[#3e3c49] max-lg:w-[90%] flex-col w-[32rem] my-6 py-4 max-lg:py-10 rounded-xl bg-white items-center">
              <div className="w-[85%] mb-3">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full px-6 py-3 border-2 rounded-lg ${
                    errors.firstName ? "border-red-500" : "border-black"
                  }`}
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
              </div>

              <div className="w-[85%] mb-3">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full px-6 py-3 border-2 rounded-lg ${
                    errors.lastName ? "border-red-500" : "border-black"
                  }`}
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
              </div>

              <div className="w-[85%] mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-6 py-3 border-2 rounded-lg ${
                    errors.email ? "border-red-500" : "border-black"
                  }`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div className="w-[85%] mb-3">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full px-6 py-3 border-2 rounded-lg ${
                    errors.password ? "border-red-500" : "border-black"
                  }`}
                />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              </div>

              <button
                type="submit"
                className="bg-[#38cc8c] text-center p-4 rounded-xl shadow-md mt-4 w-[85%] text-white font-bold"
              >
                Claim your free trial
              </button>

              <p className="mt-5 text-xs text-[#b9b6d3] text-center w-[85%]">
                By clicking the button, you are agreeing to our{" "}
                <span className="text-red-500 font-bold">Terms and Services</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
