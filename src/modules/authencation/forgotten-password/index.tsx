import Button from "components/button";
import TextField from "components/textfield";
import icons from "constants/icons";
import { Link, useNavigate } from "react-router-dom";

export default function ForgottenPassword() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/auth/code-confirmation");
  };
  return (
    <section className="h-full w-full flex justify-center items-center">
      <div className="w-2/3 flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <h1 className="text-center font-bold text-[28px]">Forgot Password</h1>
          <p className="text-lg text-center">
            Please input email and a link will be sent to you
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <TextField
            label="Email"
            placeholder="Enter your email"
            type="email"
          />

          <Button label="Send" onClick={() => handleNavigation()} />
          <Link
            to="/auth"
            className="font-bold text-center flex gap-3 justify-center items-center"
          >
            <img src={icons.arrow_left} alt="Back" /> Back to Sign In
          </Link>
        </div>
      </div>
    </section>
  );
}
