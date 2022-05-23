import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../firebase.init";
import Loading from "../Shared/Loading";

const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, error, loading] = useSignInWithGoogle(auth);
  user && navigate("/");
  return (
    <div>
      {error && <span className="text-red-500">{error}</span>}
      {loading && <span>"Loading Please wait"</span>}
      <div class="divider">OR</div>
      <button
        onClick={() => {
          signInWithGoogle();
        }}
        className="btn btn-primary w-full text-white"
      >
        Google
      </button>
    </div>
  );
};

export default SocialLogin;
