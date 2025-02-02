import Button from "components/button";
import TextField from "components/textfield";
import { useNavigate } from "react-router";

const VerifyCode = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/auth/set-password/:token");
  };

  return (
    <section className="h-full w-full flex justify-center items-center">
      <div className="w-2/3 flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <h1 className="text-center font-bold text-[28px]">
            Verification code
          </h1>
          <p className="text-base text-center">
            Please input the code sent to you email
          </p>
        </div>
        <div className="flex flex-col gap-8 justify-center items-center">
          <div className="w-full">
            <TextField
              label="Verification code"
              placeholder="Verification code"
              type="text"
            />

            <h1 className="text-base cursor-pointer mt-1">Resend email</h1>
          </div>
          <div className="w-[70%]">
            <Button
              size="large"
              label="Confirm"
              onClick={() => handleNavigation()}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerifyCode;
