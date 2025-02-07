import React from "react";
import Link from "next/link";
import Image from 'next/image'

interface FooterProps {
  bgColorFirstDiv?: string;  // Optional prop for first div background color
  bgColorLastDiv?: string; 
  textColor?: string;
}






export default function Footer({ bgColorFirstDiv = 'black' }: FooterProps) {
  return (
    <div>
      <div>
        <div className={`bg-${bgColorFirstDiv} text-[#FFF]`}>
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Support Section */}
            <div className="max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between items-center py-[50px] border-b-[1px] border-b-[#FF9F0D]">
              <div className="text-center lg:text-left flex flex-col mb-6 lg:mb-0">
                <h3 className="font-helvetica text-[24px] lg:text-[32px] font-bold">
                  <span className="text-[#FF9F0D]">St</span>ill You Need Our Support?
                </h3>
                <p className="m-0 font-inter text-[14px] lg:text-[16px] font-normal">
                  Don’t wait—make a smart & logical quote here. It’s pretty easy.
                </p>
              </div>
              <div>
                <form action="" className="font-normal flex flex-col sm:flex-row gap-2">
                  <input
                    className="p-3 rounded-tl-[4px] rounded-bl-[4px] bg-[#FF9F0D] font-inter text-white placeholder-[#FFF] placeholder-opacity-60"
                    type="text"
                    placeholder="Enter Your Email"
                  />
                  <button
                    type="submit"
                    className="bg-white p-3 rounded-[4px] text-[#FF9F0D] w-full sm:w-auto"
                  >
                    Subscribe Now
                  </button>
                </form>
              </div>
            </div>
            {/* Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
              {/* About Us */}
              <div className="flex flex-col gap-[20px] text-white p-4 rounded">
                <h3 className="font-bold text-[20px] lg:text-[24px]">About Us</h3>
                <p className="font-inter text-[14px] lg:text-[16px]">
                  Corporate clients and leisure travelers have been relying on Groundlink for safe,
                  dependable, and professional chauffeured car service in major cities worldwide.
                </p>
                <div className="flex items-center gap-[10px]">
                  <div className="bg-[#FF9F0D] px-4 py-3 rounded-[4px]">
                    <Image src="/images/Clock.png" alt="clock" width={45} height={45} />
                  </div>
                  <div>
                    <h4 className="text-[16px] lg:text-[18px]">Opening Hours</h4>
                    <p className="m-0 text-[12px] lg:text-[14px]">Mon - Sat (8:00 AM - 6:00 PM)</p>
                    <p className="m-0 text-[12px] lg:text-[14px]">Sunday - Closed</p>
                  </div>
                </div>
              </div>
              {/* Useful Links */}
              <div className="flex flex-col gap-[20px] text-white p-4 rounded">
                <h3 className="font-bold text-[20px] lg:text-[24px]">Useful Links</h3>
                <ul className="flex flex-col gap-[10px] font-inter text-[16px] lg:text-[20px]">
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/ourChef">Partners</Link>
                  </li>
                  <li>
                    <Link href="/ourChef">Team</Link>
                  </li>
                  <li>
                    <Link href="/menu">Menu</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contacts</Link>
                  </li>
                </ul>
              </div>
              {/* Help Section */}
              <div className="flex flex-col gap-[20px] text-white p-4 rounded">
                <h3 className="font-bold text-[20px] lg:text-[24px]">Help?</h3>
                <ul className="flex flex-col gap-[10px] font-inter text-[16px] lg:text-[20px]">
                  <li>
                    <Link href="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link href="#">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link href="#">Reporting</Link>
                  </li>
                  <li>
                    <Link href="#">Documentation</Link>
                  </li>
                  <li>
                    <Link href="#">Support Policy</Link>
                  </li>
                  <li>
                    <Link href="#">Privacy</Link>
                  </li>
                </ul>
              </div>
              {/* Recent Posts */}
              <div className="flex flex-col gap-[20px] text-white p-4 rounded">
                <h3 className="font-bold text-[20px] lg:text-[24px]">Recent Posts</h3>
                <div className="flex flex-col gap-[10px]">
                  {[
                    { src: '/images/kabab2.png', date: '20 Feb 2022', text: 'Keep Your Business' },
                    { src: '/images/roast.png', date: '20 Feb 2022', text: 'Keep Your Business' },
                    { src: '/images/roll.png', date: '20 Feb 2022', text: 'Keep Your Business' },
                  ].map(({ src, date, text }, index) => (
                    <Link key={index} href="!" className="flex gap-[10px]">
                      <Image src={src} alt={text} width={55} height={55} />
                      <div className="font-inter text-[14px] lg:text-[16px]">
                        <p className="m-0">{date}</p>
                        <p>{text}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#4f4f4f] text-white">
          <div className="max-w-[1320px] h-[100px] mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
            <p className="m-0 font-normal text-[14px] lg:text-[16px]">
              Copyright © 2022 by Ayeman. All Rights Reserved.
            </p>
            <div className="flex gap-[10px]">
              {['facebook', 'twitter', 'insta', 'youtube', 'pinterest'].map((platform, index) => (
                <div key={index} className="bg-white w-[36px] h-[36px] flex justify-center items-center">
                  <Link href="#">
                    <Image src={`/images/${platform}.png`} alt={platform} width={20} height={20} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
