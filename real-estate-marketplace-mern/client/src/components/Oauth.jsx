import { GoogleAuthProvider, getAuth, signInWithPopup } from "@firebase/auth";

import { app } from "../firebase";
import axios from "axios";
import { signInSuccess } from "../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Oauth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);
      //console.log("result: ", result);
      const response = await axios.post(
        "/api/auth/google",
        JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response;
      //console.log("daataaaa", data);
      dispatch(signInSuccess(data?.data));
      navigate("/");
    } catch (error) {
      console.log("Could not sign in with google", error);
    }
  };
  return (
    <button
      onClick={handleGoogleClick}
      type="button"
      className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95"
    >
      Continue with google
    </button>
  );
};

export default Oauth;
