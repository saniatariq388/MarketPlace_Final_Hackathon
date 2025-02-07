//src\components\BlogDetails.tsx

import Image from 'next/image'
import { Calendar, MessageCircle, UserCircle, ArrowLeft, Facebook, Twitter, Linkedin, Instagram, Youtube, Star, Search } from 'lucide-react'
import RecentPost from './RecentPost'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'

export default function BlogDetails() {
  return (
   <>
    <div className='w-full max-w-[1320px] flex flex-col p-4 justify-center items-center'>
    <div className=' flex flex-col lg:flex-row gap-6 mt-[80px] '>
    <div className="w-full  lg:max-w-4xl mx-auto px-16 lg:px-10 py-8">
      {/* Main content */}
      <div className="mb-8">
        <Image src="/images/kabab2.png?height=520&width=872" alt="Blog post image" width={872} height={520} className="w-3/4 lg:w-full h-auto mb-6" />
        <div className="flex items-center text-gray-600 mb-4">
          <Calendar className="w-5 h-5 mr-2" />
          <span className="mr-4">Feb 14, 2022</span>
          <MessageCircle className="w-5 h-5 mr-2" />
          <span className="mr-4">3 Comments</span>
          <UserCircle className="w-5 h-5 mr-2" />
          <span>Admin</span>
        </div>
        <h1 className="text-sm lg:text-base  font-bold mb-4">10 Reasons To Do A Digital Detox Challenge</h1>
        <p className="text-gray-700 mb-4">
          Netus pretium tellus nulla commodo massa adipiscing in elementum magna congue condimentum placerat habitasse potenti ac orci a quisque tristique elementum et viverra at condimentum scelerisque eu mi. Elit praesent cras vehicula a ullamcorper nulla scelerisque aliquet tempus faucibus quam ac aliquet nibh a condimentum suspendisse hac integer leo erat aliquam ut himenaeos.
        </p>
        <p className="text-gray-700 mb-4">
          Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac. Nec hac et vestibulum duis a tincidunt per a aptent interdum purus feugiat a id aliquet erat himenaeos nunc torquent euismod adipiscing adipiscing dui gravida justo.
        </p>
      </div>

      {/* Quote section */}
      <div className="bg-orange-500 text-white p-8 mb-8">
        <div className="flex">
          <span className="text-4xl font-bold mr-4">&quot;</span>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
          </p>
        </div>
      </div>

      {/* Image section */}
      <div className='w-full flex flex-col gap-4 text-gray-700'>
        <p className="text-[16px]">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
        <div className='w-full flex gap-6'>
           <div className='w-full flex justify-between text-left'>
           <div className='w-1/2'>
                <p className="text-[16px] mb-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
               
                 <p className="text-[16px]">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing</p>
            </div>
            <div className="w-1/2 mt-4">
                <Image src="/images/blogDetails.png" alt="aggs" width={430} height={370}></Image>
            </div>
           </div>
           
           
        </div>
      </div>
      <p className="text-[16px] text-black mt-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
           
           <p className="text-[16px] mt-4 text-black">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
       

      {/* Tags and Share */}
      <div className="flex justify-between items-center mt-8 mb-8 border-t border-b border-gray-200 py-4">
        <div>
          <span className="font-bold mr-2">Tags:</span>
          <span className="text-gray-600">Restaurant, Dinner, Pizza, Yummy</span>
        </div>
        <div className="flex items-center">
          <span className="font-bold mr-2">Share:</span>
          <Facebook className="w-5 h-5 mx-1 text-gray-600" />
          <Twitter className="w-5 h-5 mx-1 text-gray-600" />
          <Linkedin className="w-5 h-5 mx-1 text-gray-600" />
          <Instagram className="w-5 h-5 mx-1 text-gray-600" />
        </div>
      </div>

      {/* Comments */}
      <div className="mb-8 grid sm:grid-cols-2 lg:grid-cols-1">
        <h2 className="text-2xl font-bold mb-4">Comments - 03</h2>
        {[1, 2, 3].map((comment) => (
          <div key={comment} className="flex mb-6">
            <Image src="/images/img1.png?height=64&width=64" alt="User avatar" width={64} height={64} className="w-[60px] h-[60px] rounded-full mr-4" />
            <div>
              <h3 className="font-bold">MD Sojib Khan</h3>
              <div className="flex items-center text-gray-600 mb-2">
                <Calendar className="w-4 h-4 mr-1" />
                <span className="text-sm">June 22, 2020</span>
              </div>
              <p className="text-gray-700 mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci tellus, fermentum nec imperdiet sed, pulvinar et sem, Fusce hendrerit faucibus sollicitudin.
              </p>
              <button className="flex items-center text-gray-600">
                <ArrowLeft className="w-4 h-4 mr-1" />
                Reply
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Post a comment */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Post a comment</h2>
        <form>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input type="text" placeholder="Enter your name" className="border border-gray-300 p-2 rounded" />
            <input type="email" placeholder="Enter your email" className="border border-gray-300 p-2 rounded" />
          </div>
          <textarea placeholder="Your comment" className="w-full border border-gray-300 p-2 rounded mb-4" rows={6}></textarea>
          <button type="submit" className="bg-orange-500 text-white px-8 py-3 rounded">Post Comment</button>
        </form>
      </div>
    </div>
     {/* right div */}
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

