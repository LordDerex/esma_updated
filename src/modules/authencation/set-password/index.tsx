import Button from "components/button";
import TextField from "components/textfield";
import { Link, useNavigate } from "react-router";

export default function SetPassword() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/auth");
  };
  return (
    <section className="h-full w-full flex justify-center items-center">
      <div className="w-2/3 flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <h1 className="text-center font-bold text-[28px]">
            Set new password
          </h1>
          <p className="text-base text-center">Please set your new password</p>
        </div>
        <div className="flex flex-col gap-4">
          <TextField
            label="New password"
            placeholder="Password"
            type="password"
          />

          <Button label="Confirm" onClick={() => handleNavigation()} />
        </div>
      </div>
    </section>
  );
}
