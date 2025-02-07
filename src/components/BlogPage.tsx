//src\components\BlogPage.tsx

import React from 'react'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, Calendar1, Facebook, Instagram, Search, Star, Twitter, Youtube } from 'lucide-react';
import { MessagesSquare } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import RecentPost from './RecentPost';
import Link from 'next/link';

function BlogPage() {
  return (
    <>
    <div className='w-full flex justify-center items-center mb-[200px]'>
       <div className='w-full max-w-[1320px] flex flex-col lg:flex-row gap-6  mt-[120px] justify-between '>
         {/* blog list */}
        <div className='w-full p-2 lg:w-[872px] flex flex-col gap-[56px]'>
            <div className='w-full flex flex-col justify-start items-left text-left'>
                <div className='w-full mb-4'>
                    <Image src="/images/shawarma.png" alt="food details" width={880} height={840} ></Image>
                </div>
                <div className='h-6 text-black text-[24px] flex gap-4 mb-6'>
                <Calendar1 color="orange"  size={34}/>
                  Feb 14, 2022 /  
                  <MessagesSquare color="orange" size={34}/>
                   3 / 
                   <CircleUserRound color="orange"  size={34}/>
                   Admin
                </div>
                <h1 className='text-4xl font-bold text-black mb-[28px]'>10 Reasons To Do A Digital Detox Challenge </h1>
                <div className='w-full h-[2px] bg-[#ceccca]'></div>
                <p className='text-[16px] leading-[24px] text-black mt-[28px]'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
               <Link href={"/blogDetails"}> <div className='w-[172px] h-[52px] px-6 py-4 mt-4 border-2 border-orange-500 rounded text-orange-500 flex justify-center items-center'>Read More
                <ArrowUpRight size={24} color="orange"/>
                </div></Link>
            </div>
            <div className='w-full flex flex-col justify-start items-left text-left'>
                <div className='w-full mb-4'>
                    <Image src="/images/Piza.png" alt="food details" width={880} height={840} ></Image>
                </div>
                <div className='h-6 text-black text-[24px] flex gap-4 mb-6'>
                <Calendar1 color="orange"  size={34}/>
                  Feb 14, 2022 /  
                  <MessagesSquare color="orange" size={34}/>
                   3 / 
                   <CircleUserRound color="orange"  size={34}/>
                   Admin
                </div>
                <h1 className='text-4xl font-bold text-black mb-[28px]'>10 Reasons To Do A Digital Detox Challenge </h1>
                <div className='w-full h-[2px] bg-[#ceccca]'></div>
                <p className='text-[16px] leading-[24px] text-black mt-[28px]'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                <div className='w-[172px] h-[52px] px-6 py-4 mt-4 border-2 border-orange-500 rounded text-orange-500 flex justify-center items-center'>Read More
                <ArrowUpRight size={24} color="orange"/>
                </div>
            </div>
            <div className='w-full flex flex-col justify-start items-left text-left'>
                <div className='w-full mb-4'>
                    <Image src="/images/barger.png" alt="food details" width={880} height={840} ></Image>
                </div>
                <div className='h-6 text-black text-[24px] flex gap-4 mb-6'>
                <Calendar1 color="orange"  size={34}/>
                  Feb 14, 2022 /  
                  <MessagesSquare color="orange" size={34}/>
                   3 / 
                   <CircleUserRound color="orange"  size={34}/>
                   Admin
                </div>
                <h1 className='text-4xl font-bold text-black mb-[28px]'>10 Reasons To Do A Digital Detox Challenge </h1>
                <div className='w-full h-[2px] bg-[#ceccca]'></div>
                <p className='text-[16px] leading-[24px] text-black mt-[28px]'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                <div className='w-[172px] h-[52px] px-6 py-4 mt-4 border-2 border-orange-500 rounded text-orange-500 flex justify-center items-center'>Read More
                <ArrowUpRight size={24} color="orange"/>
                </div>
            </div>
            <div className='w-full flex flex-col justify-start items-left text-left'>
                <div className='w-full mb-4'>
                    <Image src="/images/karahi.png" alt="food details" width={880} height={840} ></Image>
                </div>
                <div className='h-6 text-black text-[24px] flex gap-4 mb-6'>
                <Calendar1 color="orange"  size={34}/>
                  Feb 14, 2022 /  
                  <MessagesSquare color="orange" size={34}/>
                   3 / 
                   <CircleUserRound color="orange"  size={34}/>
                   Admin
                </div>
                <h1 className='text-4xl font-bold text-black mb-[28px]'>10 Reasons To Do A Digital Detox Challenge </h1>
                <div className='w-full h-[2px] bg-[#ceccca]'></div>
                <p className='text-[16px] leading-[24px] text-black mt-[28px]'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                <div className='w-[172px] h-[52px] px-6 py-4 mt-4 border-2 border-orange-500 rounded text-orange-500 flex justify-center items-center'>Read More
                <ArrowUpRight size={24} color="orange"/>
                </div>
            </div>
            {/* navdiv */}
            <div className='w-full flex justify-center items-center mt-[56px]'>
              <div className='flex justify-evenly gap-4'>
                <div className='w-14 h-14 flex justify-center items-center border-[1px] border-[#ceccca] '>
                  <ArrowLeft color={"orange"} />
                </div>
                <div className='w-14 h-14 flex justify-center text-orange-500 items-center border-[1px] border-[#ceccca] '>
                  1
                </div>
                <div className='w-14 h-14 flex justify-center items-center bg-orange-500 text-white border-[1px] border-[#ceccca] '>
                 2
                </div>
                <div className='w-14 h-14 flex justify-center items-center text-orange-500 border-[1px] border-[#ceccca] '>
                  3
                </div>
                <div className='w-14 h-14 flex justify-center items-center border-[1px] border-[#ceccca] '>
                  <ArrowRight color={"orange"} />
                </div>
              </div>
            </div>
        </div>
        <div className='w-[424px] flex flex-col gap-4 mt-6 text-black'>
           <div className='w-full'>
              {/* Search */}
          <Card>
            <CardContent className="p-4">
              <div className="relative">
                <Input 
                  placeholder="Search Your Keyword..." 
                  className="pl-4 pr-10 py-2 bg-orange-50 text-[#828282]"
                />
                <Button 
                  size="sm" 
                  className="absolute right-0 top-0 bottom-0 bg-[#FF9F0D] hover:bg-orange-600"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
           </div>
           <div className='w-full flex items-center py-[32px] px-[51px] border-[#dcdada] border-[1px] rounded-xl'>
            <div className='w-full flex flex-col justify-center items-center gap-[8px]'>
                <div className='w-[116px] h-[116px] border-radius-full items-center'>
                    <Image src="/images/img.png" alt="blogger" width={150} height={150}></Image>
                </div>
                <h1 className='text-bold text-4xl text-black'>Prince Miyako</h1>
                <p className='text-2xl text-[#828282] '>Blogger/Photographer</p>
               <div>
               <div className='flex gap-2'>
                    <Star size={24} fill={"orange"} color={"orange"}/>
                    <Star size={24} fill={"orange"} color={"orange"}/>
                    <Star size={24} fill={"orange"} color={"orange"}/>
                    <Star size={24} fill={"orange"} color={"orange"}/>
                    <Star size={24} fill={"orange"} color={"orange"}/>
                     <p className='text--2xl text-[#828282] '>(1 Review)</p>
                </div>
               
               </div>
               <p className='text-[16px] text-[#828282] text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Veritatis distinctio, odio eligendi suscipit reprehenderit atque</p>
               <div className='flex justify-center items-center gap-4 mt-2'>
                <Facebook fill={"black"} size={24} />
                <Twitter  fill={"black"} size={24}/>
                <Instagram size={24}/>
                <Youtube size={28}/>
               </div>
            </div>
           </div>
           <RecentPost/>
        </div>
       
       </div>
    </div>
    </>
  )
}

export default BlogPage