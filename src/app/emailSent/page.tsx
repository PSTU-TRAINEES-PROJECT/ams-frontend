import email from '../image/Email.png';
import Image from "next/image";
import Button from "../component/button/page";

export default function EmailSent() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 text-black">
         <div className='rounded-xl shadow-lg shadow-[#ACA0A0] text-center py-8 px-12'>
              {/* email icon*/}
           <div className="flex justify-center mb-4">
             <Image 
              src={email} 
              alt="Email Sent"
              width={60} 
              height={60} 
            />
           </div>
             {/* email sent text*/}
            <div>
                <h3 className='text-[#3498DB] text-2xl font-medium my-3'>Please Verify Your Email</h3>
                <p className='text-sm text-[#595959] mb-4'>We just sent a link to <span className='font-bold text-black'>xyz@gmail.com</span>.
                <br/>Click the link to verify your account</p>
            </div>
            <Button>Resend email</Button>
         </div>
      </div>
    );
}
