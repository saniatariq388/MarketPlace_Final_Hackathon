import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { recentPosts } from "@/constant/recentPost"
import { Facebook, Instagram, Mail, Pin, Twitter, Youtube } from "lucide-react"
export default function RecentPosts() {
  return (
   <>
    {/* Recent Post */}
    <Card className="w-full max-w-md">
      <CardContent className="p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Recent Post</h2>
        <div className="space-y-4">
          {recentPosts.map((post, index) => (
            <div key={post.id}>
              <div className="flex gap-4">
                <Image
                  src={post.image}
                  alt=""
                  width={80}
                  height={80}
                  className="rounded-md object-cover"
                />
                <div className="space-y-2">
                  <span className="text-[#FF9F0D] text-sm">{post.date}</span>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {post.title}
                  </p>
                </div>
              </div>
              {index < recentPosts.length - 1 && (
                <Separator className="mt-4 opacity-20" />
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
    {/* Filter By Menu */}
    <div className=" w-[423px] flex flex-col gap-6 py-[36px] px-[52px] text-black border-[#dcdada] border-[1px] rounded-xl">
      <h1 className="text-2xl font-bold">Filter By Menu</h1>
      <div className="w-full flex gap-4">
        <div className="w-[67px] h-[67px]">
          <Image src="/images/tikka1.png" alt="tikka" width={70} height={70}></Image>
        </div>
        <div className="w-[244px] flex justify-between">
          <h1 className="text-xl font-bold">Chicken Fry</h1>
          <p className="text-[16px]">26</p>
        </div>
      </div>
      <div className="w-full flex gap-4">
        <div className="w-[67px] h-[67px]">
          <Image src="/images/tikka2.png" alt="tikka" width={70} height={70}></Image>
        </div>
        <div className="w-[244px] flex justify-between">
          <h1 className="text-xl font-bold">Burger Food</h1>
          <p className="text-[16px]">46</p>
        </div>
      </div>
      <div className="w-full flex gap-4">
        <div className="w-[67px] h-[67px]">
          <Image src="/images/tikka3.png" alt="tikka" width={70} height={70}></Image>
        </div>
        <div className="w-[244px] flex justify-between">
          <h1 className="text-xl font-bold">Pizza</h1>
          <p className="text-[16px]">16</p>
        </div>
      </div>
      <div className="w-full flex gap-4">
        <div className="w-[67px] h-[67px]">
          <Image src="/images/cheeseBurger.png" alt="tikka" width={70} height={70}></Image>
        </div>
        <div className="w-[244px] flex justify-between">
          <h1 className="text-xl font-bold">Fresh Fruit</h1>
          <p className="text-[16px]">36</p>
        </div>
      </div>
      <div className="w-full flex gap-4">
        <div className="w-[67px] h-[67px]">
          <Image src="/images/barger.png" alt="tikka" width={70} height={70}></Image>
        </div>
        <div className="w-[244px] flex justify-between">
          <h1 className="text-xl font-bold">vegetables</h1>
          <p className="text-[16px]">16</p>
        </div>
      </div>
    </div> 
    {/* Populer Tags */}
    <div className="w-full flex justify-center items-center py-[32px] px-[55px]  text-black border-[#dcdada] border-[1px] rounded-xl ">
      <div className="w-[325px] items-center">
        <h1 className="text-2xl font-bold">Populer Tags</h1>
        <div className="w-full mt-4 grid grid-cols-3 grid-rows-3 gap-4">
          <div className="py-2 px-[27px] border-[#dcdada] border-[1px] rounded-xl flex text-center justify-center">Sandwich</div>
          <div className="py-2 px-[27px] border-[#dcdada] border-[1px] rounded-xl flex text-center justify-center">Tikka</div>
          <div className="py-2 px-[27px] border-[#dcdada] border-[1px] rounded-xl flex text-center justify-center">Bbq</div>
          <div className="py-2 px-[27px] border-[#dcdada] border-[1px] rounded-xl flex text-center justify-center">Restrurant</div>
          <div className="py-2 px-[27px] border-[#dcdada] border-[1px] rounded-xl flex text-center justify-center col-span-2">Chicken Shawarma</div>
          <div className="py-2 px-[27px] border-[#dcdada] border-[1px] rounded-xl flex text-center justify-center">Health</div>
          <div className="py-2 px-[27px] border-[#dcdada] border-[1px] rounded-xl flex text-center justify-center">Fastfood</div>
          <div className="py-2 px-[27px] border-[#dcdada] border-[1px] rounded-xl flex text-center justify-center">Food</div>
          <div className="py-2 px-[27px] border-[#dcdada] border-[1px] rounded-xl flex text-center justify-center">Pizza</div>
          <div className="py-2 px-[27px] border-[#dcdada] border-[1px] rounded-xl flex text-center justify-center">Burger</div>
          <div className="py-2 px-[27px] border-[#dcdada] border-[1px] rounded-xl flex text-center justify-center">Chicken</div>
        </div>
      </div>
    </div>
    {/* Photo Gallery */}
    <div className="w-full flex flex-col pt-[80px] items-center  text-black border-[#dcdada] border-[1px] rounded-xl ">
      <h1 className="text-2xl font-bold text-black">Photo Gallery</h1>
      <div className="w-full mt-4 grid grid-cols-3 grid-rows-3 gap-6">
        <div className="w-[110px] h-[92px]">
          <Image src="/images/pizza.png" alt="pizza" width={115} height={95}></Image>
        </div>
        <div className="w-[110px] h-[92px]">
          <Image src="/images/tikka1.png" alt="pizza" width={115} height={90}></Image>
        </div>
        <div className="w-[110px] h-[92px]">
          <Image src="/images/gellery1.png" alt="pizza" width={115} height={95}></Image>
        </div>
        <div className="w-[110px] h-[92px]">
          <Image src="/images/gallery2.png" alt="pizza" width={115} height={95}></Image>
        </div>
        <div className="w-[110px] h-[92px]">
          <Image src="/images/gallery3.png" alt="pizza" width={115} height={95}></Image>
        </div>
        <div className="w-[110px] h-[92px]">
          <Image src="/images/gallery4.png" alt="pizza" width={115} height={95}></Image>
        </div>
      </div>
    </div>
    {/* foolw us */}
    <div className="w-full flex flex-col items-center py-[32px] px-[57px]  text-black border-[#dcdada] border-[1px] rounded-xl ">
      <div className="flex flex-col gap-[19px] items-start">
        <h1 className="text-2xl font-bold text-black">Follow Us</h1>
        <div className="flex justify-evenly">
          <div className="w-[52px] h-[52px] ">
            <Twitter color={"black"} fill={"black"} size={26}/>
          </div>
          <div className="w-[52px] h-[52px] ">
             <Instagram color={"black"} size={26}/>
          </div>
          <div className="w-[52px] h-[52px] ">
             <Youtube color={"black"} size={26}/>
          </div>
          <div className="w-[52px] h-[52px] ">
             <Mail color={"orange"} size={26}/>
          </div>
          <div className="w-[52px] h-[52px] ">
             <Facebook color={"black"} fill={"black"} size={26}/>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}

