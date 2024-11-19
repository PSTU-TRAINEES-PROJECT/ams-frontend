import VerificationSuccess from "features/auth/VerificationSuccess";
import VerificationFailed from "features/auth/VerificationFailed";

export default function EmailSuccess() {
  //check verification here with verification token
  const verified = true;
  return verified ? <VerificationSuccess /> : <VerificationFailed />;
}
