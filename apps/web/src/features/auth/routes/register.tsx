import { RegisterForm } from "@/features/auth/components/registerForm";
import BG_IMAGE from "@/assets/images/register/twitter_landing.png";

export const Register = () => {
  return (
    <div className="relative overflow-hidden bg-black h-screen">
      <div className="relative h-full">
        <main className=" flex h-full">
          <div
            className="w-7/12 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${BG_IMAGE})` }}
          />

          <div className="w-4/12 h-full flex items-center">
            <RegisterForm className=" ml-10" />
          </div>
        </main>
      </div>
    </div>
  );
};
