import Button from "components/button";
import icons from "constants/icons";
import { useState } from "react";

const VerifyEmail = () => {
  const [emailVerified, setEmailVerified] = useState<boolean>(false);
  const handleEmailVerification = () => {
    setEmailVerified(true);
  };
  return (
    <div className="flex justify-center items-center flex-col gap-2 h-dvh">
      <img src={icons.message} alt="email-icon" />

      {!emailVerified && (
        <div className="flex justify-center items-center flex-col gap-2">
          <h1 className="text-xl font-bold">Verify your email</h1>
          <p className="text-center">
            A verification email has been sent to jane@gmail.com. <br /> Please
            check your email and follow the link to verify your account. If you
            don’t see it, click the resend button below.
          </p>

          <Button
            onClick={() => handleEmailVerification()}
            label="Resend"
            size="medium"
          />
        </div>
      )}

      {emailVerified && (
        <p className="text-xl font-bold">Your email has been verified</p>
      )}
    </div>
  );
};

export default VerifyEmail;
