// app/not-found.tsx

import Footer from '@/components/Footer';
import HeaderMenu from '@/components/HeaderMenu';
import Link from 'next/link';

export default function NotFound() {
  return (
   <>
   <HeaderMenu />
   <div className='w-full flex justify-center items-center py-[120px]'>
   <div className=" flex flex-col justify-center items-center text-center">
      <h1 className="text-8xl font-bold text-[#FF9F0D]">404</h1>
      <h1 className="text-[32px] text-black text-bold mt-4">Oops! The page you are looking for could not be found.</h1>
      <p className='text-black text-xl mt-4'>Page Cannot be found! we will have it figured out in no time. Menwhile, <br /> cheek out these fresh ideas:</p>
      <Link href="/" className="mt-6 px-6 py-3 bg-[#FF9F0D] text-white rounded">
        Go Back to Home
      </Link>
    </div>
   </div>
    <Footer/>
   </>
  );
}
