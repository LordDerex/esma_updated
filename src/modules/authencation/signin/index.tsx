import { Link } from "react-router-dom";
import Button from "components/button";
import TextField from "components/textfield";

export default function Signin() {
  return (
    <section className="h-full w-full flex justify-center items-center">
      <div className="w-2/3 flex flex-col gap-3">
        <h1 className="text-center font-bold text-[28px]">Sign In</h1>
        <div className="flex flex-col gap-4">
          <TextField
            label="Email"
            placeholder="Enter your email"
            type="email"
          />
          <TextField
            label="Password"
            placeholder="Enter your password"
            type="password"
          />
          <Link to="/auth/forgotten-password" className="text-sm">
            Forgot Password?
          </Link>
          <Button label="Sign In" />
        </div>
      </div>
    </section>
  );
}
