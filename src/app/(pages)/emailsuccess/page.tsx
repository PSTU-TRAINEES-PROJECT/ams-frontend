import confetti from '../../image/confetti.png';
import Image from "next/image";
import Button from "../../component/button";

export default function EmailSuccess() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 text-black">
         <div className='rounded-xl shadow-lg shadow-secondary-300 text-center py-8 px-24'>
              {/* confetti image*/}
           <div className="flex justify-center mb-4">
             <Image 
              src={confetti} 
              alt="confetti image"
              width={120} 
              height={120} 
            />
           </div>
             {/* congratulation text*/}
            <div>
                <h3 className='text-success-400 text-3xl font-bold mb-3'>Congratulations!</h3>
                <p className='text-sm text-primary-400 mb-8'>Your account has been verified.</p>
            </div>
            <a href="/"><Button>Continue to your account</Button>
            </a>
         </div>
      </div>
    );
}
