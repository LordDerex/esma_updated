import Button from "components/button";
import TextField from "components/textfield";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/auth/email-confirmation");
  };

  return (
    <section className="h-full w-full flex justify-center items-center">
      <div className="w-2/3 flex flex-col gap-3">
        <h1 className="text-center font-bold text-[28px]">Sign Up</h1>
        <div className="flex flex-col gap-4">
          <TextField
            label="Email"
            placeholder="e.g somtoesma@gmail.com"
            type="email"
          />
          <TextField
            label="Password"
            placeholder="Enter your password"
            type="password"
          />
          <Link to="/auth/signin" className="text-sm">
            Already have an account? Sign In
          </Link>
          <Button onClick={handleSignUp} label="Sign Up" />
        </div>
      </div>
    </section>
  );
}
