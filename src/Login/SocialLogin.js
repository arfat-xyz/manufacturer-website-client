import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import useToken from "../Hooks/useToken";
import Loading from "../Shared/Loading";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const [signInWithGoogle, user, error, loading] = useSignInWithGoogle(auth);

  const [token] = useToken(user);
  token && navigate(from, { replace: true });

  return (
    <div>
      {error && <span className="text-red-500">{error}</span>}
      {loading && <span>"Loading Please wait"</span>}
      <div className="divider">OR</div>
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
