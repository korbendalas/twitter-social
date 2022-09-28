import { RegisterForm } from "@/features/auth/components/registerForm";
import BG_IMAGE from "@/assets/images/register/twitter_landing.png";
import { useState } from "react";
import { LoginForm } from "@/features/auth/components/loginForm";

export const LoginRegisterPage = () => {
  const [isRegister, setIsRegister] = useState(true);

  const setLogin = () => setIsRegister(false);
  const setRegister = () => setIsRegister(true);
  return (
    <div className="relative overflow-hidden bg-black h-screen">
      <div className="relative h-full">
        <main className=" flex h-full">
          <div
            className="w-7/12 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${BG_IMAGE})` }}
          />

          <div className="w-4/12 h-full flex flex-col items-center justify-center">
            {isRegister ? (
              <RegisterForm className=" ml-10" />
            ) : (
              <LoginForm className=" ml-10" />
            )}

            <p className="text-[#E7E9EA] mt-10 font-bold text-xl mb-3 pl-10">
              {isRegister
                ? `Already have an account?`
                : `No Account? Sign Up here`}
            </p>
            <button
              onClick={isRegister ? setLogin : setRegister}
              type="button"
              className="text-center ml-10 w-7/12 px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isRegister ? `Sign In` : `Sign Up`}
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};
