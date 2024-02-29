import { Link, useNavigate } from "react-router-dom";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

import Oauth from "../components/Oauth";
import axios from "axios";
import { useState } from "react";

const SignIn = () => {
  const [formData, setFormData] = useState({});

  const { loading, error } = useSelector((state) => state.user);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // eslint-disable-next-line no-unused-vars
      // setLoading(true);
      dispatch(signInStart());
      const response = await axios.post(
        "/api/auth/signin",
        JSON.stringify(formData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response;
      // setLoading(false);
      // setError(null);
      // setFormData({});
      dispatch(signInSuccess(data.data));
      navigate("/");
      console.log("sign-in:", data.data.message);
    } catch (error) {
      // setLoading(false);
      // setError(error.response.data.message);
      dispatch(signInFailure(error.response.data.message));
    }
  };

  //console.log(formData);
  return (
    <>
      <div className="p-3 max-w-lg mx-auto">
        <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="email"
            className="border p-3 rounded-lg"
            id="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="password"
            className="border p-3 rounded-lg"
            id="password"
            onChange={handleChange}
          />
          <button
            disabled={loading}
            className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80"
          >
            {loading ? "Loading..." : "Sign In"}
          </button>
          <Oauth />
        </form>
        <div className="flex mt-3">
          <p>Dont have an account?</p>
          <Link to="/sign-up">
            <span className=" text-blue-700 hover:underline ml-2">Sign Up</span>
          </Link>
        </div>
        {error && <p className="text-red-500 mt-5">{error}</p>}
      </div>
    </>
  );
};

export default SignIn;
