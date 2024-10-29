import sad from '../image/Sad.png';
import Image from "next/image";
import Button from "../component/button/page";

export default function EmailFailed() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 text-black">
         <div className='rounded-xl shadow-lg shadow-[#ACA0A0] text-center py-8 px-12'>
              {/* sad icon*/}
           <div className="flex justify-center mb-4">
             <Image 
              src={sad} 
              alt="Email Sent"
              width={100} 
              height={100} 
            />
           </div>
             {/* sorry text*/}
            <div>
                <h3 className='text-[#F22E24] text-4xl font-bold my-3'>Sorry</h3>
                <p className='text-sm text-[#F22E24] mb-4'>Your account verification has been failed.</p>
            </div>
            <Button>Okay</Button>
         </div>
      </div>
    );
}
