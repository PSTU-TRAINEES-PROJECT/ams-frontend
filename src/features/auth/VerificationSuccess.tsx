import Image from "next/image";
import Button from "component/Button";

export default function VerificationSuccess() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-black">
      <div className="rounded-xl shadow-lg shadow-[#ACA0A0] text-center py-8 px-24">
        {/* confetti image*/}
        <div className="flex justify-center mb-4">
          <Image src={"/images/confetti.png"} alt="confetti image" width={120} height={120} />
        </div>
        {/* congratulation text*/}
        <div>
          <h3 className="text-[#2ECC71] text-3xl font-bold my-4">Congratulations!</h3>
          <p className="text-sm text-[#3498DB] my-6">Your account has been verified.</p>
        </div>
        <Button>Continue to your account</Button>
      </div>
    </div>
  );
}
