//src\components\CoffeeHeader.tsx
'use client'

import React from 'react'
import { useState } from 'react'
import {Instagram, Heart, Check, ArrowRight, ArrowLeft, Quote, Play, Calendar, User} from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Clock, MicroscopeIcon as MagnifyingGlassIcon, Mail, MapPin, Phone, ShoppingBagIcon, UserIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { chefTeam } from '@/constant/meetChef'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import { Facebook, Twitter, Youtube, PinIcon as Pinterest } from 'lucide-react'
import { posts } from '@/constant/post'
import Partner from './Partner'
import Menu from './Menu'



const SocialIcon = ({ Icon }: { Icon: any }) => (
  <div className="bg-gray-100 p-2 rounded hover:bg-[#195A00] group transition-colors duration-200">
    <Icon className="w-4 h-4 text-gray-600 group-hover:text-white" />
  </div>
)

export default function CoffeeHeader() {
  // const [activePath, setActivePath] = useState('home')
  const [activePath, setActivePath] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', path: 'home' },
    { name: 'Menu', path: 'menu' },
    { name: 'Blog', path: 'blog' },
    { name: 'Pages', path: 'pages' },
    { name: 'About', path: 'about' },
    { name: 'Shop', path: 'shop' },
    { name: 'Contact', path: 'contact' },
  ]

  return (
   <div>
     {/* header */}
     <div className='relative w-full min-h-[600px] md:h-[914px]'>
      <div className="absolute z-10 w-full bg-black">
        {/* Navigation Bar */}
        <nav className="absolute top-0 left-0 w-full z-20 px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex h-16 items-center justify-between">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link 
                  href="/" 
                  className="text-2xl font-bold text-white"
                >
                  Food<span className="text-[#FF9F0D]">tuck</span>
                </Link>
              </div>
               {/* Mobile menu button */}
               <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white hover:text-[#FF9F0D] transition-colors duration-200"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={`/${item.path}`}
                      className={`${
                        activePath === item.path
                          ? 'text-[#FF9F0D] font-bold'
                          : 'text-white hover:text-[#FF9F0D]'
                      } text-base transition-colors duration-200`}
                      onClick={() => setActivePath(item.path)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
               {/* Right side icons */}
               <div className="hidden md:flex items-center space-x-4">
                <button className="text-white hover:text-[#FF9F0D] transition-colors duration-200">
                  <MagnifyingGlassIcon className="h-6 w-6" />
                </button>
                <button className="text-white hover:text-[#FF9F0D] transition-colors duration-200">
                  <UserIcon className="h-6 w-6" />
                </button>
                <button className="text-white hover:text-[#FF9F0D] transition-colors duration-200">
                  <ShoppingBagIcon className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={`/${item.path}`}
                  className={`${
                    activePath === item.path
                      ? 'text-[#FF9F0D] font-bold'
                      : 'text-white hover:text-[#FF9F0D]'
                  } block px-3 py-2 text-base transition-colors duration-200`}
                  onClick={() => {
                    setActivePath(item.path)
                    setIsMenuOpen(false)
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}

         {/* Hero Section */}
         <div className="w-full flex flex-col md:flex-row md:gap-[50px] lg:gap-[350px] px-4 md:px-6 lg:px-8">
          <div className="w-full md:w-[430px] md:ml-0 lg:ml-[304px] mt-[100px] md:mt-[282px] mb-[50px] md:mb-[282px] relative flex flex-col items-center md:items-left justify-center space-y-4">
            <div className='w-[236px] flex gap-4 p-2 border-2 border-[#bc9a6c]'>
              <p>Welcome to coffee hut</p>
              <Heart color={"#bc9a6c"}/>
            </div>
            <h1 className="text-4xl md:text-6xl leading-[1.2] md:leading-[68px] text-[#bc9a6c] font-bold text-center md:text-left">Heal the world with coffee</h1>
            <p className='text-white mt-[16px] md:mt-[32px] mb-[16px] md:mb-[32px] text-center md:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={"/shoppingCart"}>
                <div className='w-full sm:w-[190px]'><Button size={'lg'} className='w-full bg-[#bc9a6c] text-white hover:bg-black hover:text-[#bc9a6c] hover:border-2 hover:border-[#bc9a6c]'>Order now</Button></div>
              </Link>
              <Link href={"/menu"}>
                <div className='w-full sm:w-[190px]'><Button size={"lg"} className='w-full bg-black text-[#bc9a6c] border-2 border-[#bc9a6c] hover:bg-[#bc9a6c] hover:text-[white]'>See menu</Button></div>
              </Link>
            </div>
          </div>
          
          {/* image */}
          <div className='w-full md:w-[550px] relative mt-[50px] md:mt-[145px] flex justify-center'>
            <div className='w-[300px] h-[350px] md:w-[536px] md:h-[596px] border-2 border-[#bc9a6c]'></div>
            <div className='w-[300px] h-[350px] md:w-[536px] md:h-[596px] absolute -z-0 top-[20px] md:top-[40px] left-[20px] md:left-[40px]'>
              <Image src="/images/coffee1.png" alt="coffee" layout="fill" objectFit="cover" />
            </div>
          </div>
        </div>
      </div>
      </div>

       {/* about section */}

      <div className='w-full my-[60px] md:my-[120px] flex justify-center items-center px-4 md:px-6 lg:px-8'>
      <div className='w-full max-w-[1356px] flex flex-col lg:flex-row justify-between gap-[40px] lg:gap-[68px]'>
        <div className='w-full lg:w-[762px] relative flex flex-col items-center lg:items-start'>
          <div className='w-[200px] h-[200px] md:w-[276px] md:h-[269px] absolute top-[100px] md:top-[150px] right-[20px] md:right-[40px] z-10 hidden md:block'>
            <Image src="/images/dot.png" alt="dot" layout="fill" objectFit="contain" />
          </div>
          <div className='w-full max-w-[573px] h-[400px] md:h-[642px] relative z-20'>
            <Image src="/images/coffee2.png" alt="coffee image" layout="fill" objectFit="contain" />
          </div>
          <div className='w-full max-w-[475px] h-[200px] md:h-[257px] absolute z-30 top-[250px] md:top-[350px] left-0 md:left-[-50px]'>
            <Image src="/images/coffee3.png" alt="coffee" layout="fill" objectFit="contain" />
          </div>
        </div>
        <div className='w-full lg:w-[594px] flex justify-center items-center mt-[250px] md:mt-0'>
          <div className='w-full max-w-[536px] flex flex-col text-black items-left'>
            <p className='text-[16px] md:text-[18px] mb-4 md:mb-8'>About us</p>
            <h1 className='text-[32px] md:text-[48px] leading-[1.2] md:leading-[56px] font-semibold'>We are the best quality Coffee maker</h1>
            <p className='mt-4 md:mt-8 mb-4 md:mb-8 text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pelle ntesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urn a, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>

            <div className='flex flex-col gap-4 mb-8 text-bold'>
              <div className='flex gap-4 items-center'>
                <div className='w-[34px] h-[34px] bg-[#edeae3] flex justify-center items-center'><Check size={20} /></div>
                <p className='text-sm md:text-base'> Experienced Chefs</p>
              </div>
              
              <div className='flex gap-4 items-center'> 
                <div className='w-[34px] h-[34px] bg-black flex justify-center items-center text-white'><Check size={20} /></div>
                <p className='text-sm md:text-base'>Fresh & Organic Foods</p>
              </div>

              <div className='flex gap-4 items-center'>
                <div className='w-[34px] h-[34px] bg-[#edeae3] flex justify-center items-center'><Check size={20} /></div>
                <p className='text-sm md:text-base'>Different Coffee & Drinks</p>
              </div>
            </div>
            <Link href="/">
              <div className='w-full sm:w-[229px] h-[58px] rounded bg-[#bc9a6c] flex justify-center items-center py-4 px-6 sm:px-12 text-white text-[16px] md:text-[18px] font-bold'>
                Learn More <ArrowRight className="ml-2" size={20} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  
     
    {/* Coffee Category */}
    <div className="w-full my-[60px] sm:my-[90px] lg:my-[120px] flex flex-col justify-center items-center text-black py-[60px] sm:py-[90px] lg:py-[120px] px-4 sm:px-6 lg:px-8">
  {/* heading */}
  <div className="w-full max-w-[1320px] flex flex-col text-center gap-2 mb-[40px] sm:mb-[56px]">
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">Coffee Category</h1>
    <p className="text-sm sm:text-base lg:text-lg">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br className="hidden sm:inline" /> Varius sed pharetra
      dictum neque massa congue
    </p>
  </div>
  {/* food */}
  <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
    <div className="w-full lg:w-[450px] flex flex-col justify-between lg:mr-[30px] gap-[30px]">
      {/* Repeat this block for each coffee item */}
      <div className="w-full lg:w-[450px] flex justify-between items-center">
        <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] border-2 rounded-full border-[#cdb98a] flex justify-center items-center">
          <Image
            src="/images/coffee01.png"
            alt="cup"
            width={45}
            height={45}
            className="w-8 h-8 sm:w-[45px] sm:h-[45px]"
          />
        </div>
        <div className="flex flex-col flex-grow ml-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Cappuccino</h1>
          <p className="text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur <br className="hidden sm:inline" /> adipiscing elit. Leo augue nibh
            est nisi.
          </p>
        </div>
      </div>
      {/* Repeat for other coffee items */}
    </div>
    {/* image */}
    <div className="w-full lg:w-[350px] h-[400px] sm:h-[550px] relative mt-8 lg:mt-0">
      <Image
        src="/images/coffeeleave.png"
        alt="leave"
        width={370}
        height={560}
        className="absolute z-10 right-0 lg:-right-10 bottom-0 lg:bottom-20 w-3/4 lg:w-auto"
      />
      <Image
        src="/images/coffeecup.png"
        alt="cup"
        width={350}
        height={520}
        className="absolute z-1 w-full h-full object-contain"
      />
    </div>
    {/* food */}
    <div className="w-full lg:w-[450px] flex flex-col justify-between lg:ml-[30px] gap-[30px]">
      {/* Repeat this block for each coffee item */}
      <div className="w-full lg:w-[450px] flex justify-between items-center">
        <div className="flex flex-col flex-grow mr-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Cappuccino</h1>
          <p className="text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur <br className="hidden sm:inline" /> adipiscing elit. Leo augue nibh
            est nisi.
          </p>
        </div>
        <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] border-2 rounded-full border-[#cdb98a] flex justify-center items-center">
          <Image
            src="/images/coffee01.png"
            alt="cup"
            width={45}
            height={45}
            className="w-8 h-8 sm:w-[45px] sm:h-[45px]"
          />
        </div>
      </div>
      {/* Repeat for other coffee items */}
    </div>
  </div>
</div>

{
  /* why us */
}
<div className="w-full flex justify-center items-center text-black pb-[60px] sm:pb-[90px] lg:pb-[120px] px-4 sm:px-6 lg:px-8">
  <div className="w-full max-w-[1319px] flex flex-col lg:flex-row gap-8 lg:gap-[85px]">
    <div className="w-full lg:w-[587px]">
      <div className="w-full lg:w-[523px] py-[14px] px-[22px] box-border shadow-lg relative lg:absolute lg:translate-y-[450px] lg:translate-x-[40px] text-black bg-white text-left rounded-2xl mb-8 lg:mb-0">
        <p className="text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed <br className="hidden sm:inline" /> massa turpis
          pulvinar interdum in imperdiet pellentesque. At <br className="hidden sm:inline" /> duis dolor massa elit
          consequat
        </p>
        <p className="text-lg sm:text-xl font-bold mt-6">Alen Barg</p>
      </div>
      <Image
        src="/images/coffeemachine.png"
        alt="coffee machine"
        width={595}
        height={635}
        className="relative z-1 w-full h-auto"
      />
    </div>
    <div className="w-full lg:w-[647px] flex flex-col gap-2">
      <div className="w-full text-left mb-8">
        <h4 className="text-lg sm:text-xl lg:text-2xl">Why Choose Us</h4>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-4 sm:mb-8">
          Best quality food and coffee maker
        </h1>
        <p className="text-sm sm:text-base lg:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam <br className="hidden sm:inline" />{" "}
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue{" "}
          <br className="hidden sm:inline" /> urna, vitae feugiat donec id elementum. Ultrices mattis sed vitae mus
          risus. <br className="hidden sm:inline" /> Lacus nisi,
        </p>
      </div>
      <div className="w-full flex flex-col gap-4 sm:gap-2">
        {/* Repeat this block for each feature */}
        <div className="w-full flex flex-row gap-3">
          <div className="flex justify-center items-center w-[60px] h-[70px] sm:w-[70px] sm:h-[80px] bg-[#bc9a6c]">
            <Image
              src="/images/glass.png"
              alt="glass"
              width={105}
              height={105}
              className="h-[60px] w-[40px] sm:h-[70px] sm:w-[50px]"
            />
          </div>
          <div className="flex flex-col text-left">
            <h1 className="text-xl sm:text-2xl lg:text-[24px] font-bold">High quality coffee</h1>
            <p className="text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing <br className="hidden sm:inline" /> elit. Leo augue
              nibh .
            </p>
          </div>
        </div>
        {/* Repeat for other features */}
      </div>
    </div>
  </div>
</div>

    {/* menu */}
    <Menu/>


    {/* our chef */}
    <section className="w-full  py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-4 font-helvetica">Meet our chef</h2>
          <p className="text-black/90 max-w-md mx-auto font-inter">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {chefTeam.map((member, index) => (
     <Link key={index} href={`/ourChef`} >
      <Card className="bg-white overflow-hidden group relative h-full">
      <div className="relative">
        <Image
          src={member.image}
          alt={member.name}
          width={320}
          height={320}
          className="w-full h-64 object-cover" // Ensure height is fixed for responsive layouts
        />
        {index === 0 && ( // Show social icons only on the first image
          <div className="absolute top-4 right-4 flex flex-col gap-2  group-hover:bg-green ">
            <SocialIcon Icon={Facebook} />
            <SocialIcon Icon={Twitter} />
            <SocialIcon Icon={Youtube} />
            <SocialIcon Icon={Pinterest} />
          </div>
        )}
      </div>
      <div className="p-6 text-center">
        <h3 className="font-bold text-xl text-gray-700 mb-1">{member.name}</h3>
        <p className="text-gray-500">{member.role}</p>
      </div>
    </Card>
    </Link>
  ))}
        </div>

      </div>
    </section>

    {/* reveiws */}
    <section className="container mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-2 gap-8 bg-[#1E1E1E] rounded-lg overflow-hidden">
        {/* Left side - Testimonial content */}
        <Card className="p-8 lg:p-12 bg-[#1E1E1E] border-none text-white">
          <div className="flex flex-col items-center text-center max-w-xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-[30px] h-[29px] rounded-full border border-[#BC9A6C]" />
              <span className="text-lg">Testimonials</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Our customer say
            </h2>

               {/* Quote Icon */}
              <div className="relative w-14 h-14">
                <Quote className="w-14 h-14 text-[#bc9a6c]" />
              </div>

            <p className="text-lg leading-relaxed mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh est nisi, ultricies. 
              Consectetur et faucibus vivamus lorem hendrerit enim donec ut. Nec blandit vulputate varius at quis non.
            </p>

            <div className="flex flex-col items-center gap-4">
              <div className="relative w-[72px] h-[72px]">
                <Image
                  src="/images/carry.png"
                  alt="William carry"
                  width={72}
                  height={72}
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold">William carry</h3>
              <p className="text-lg text-gray-300">Founder & CEO</p>
            </div>

            <div className="flex gap-2 mt-6">
              <div className="w-2.5 h-2.5 rounded-full bg-[#EDEAE3]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#EDEAE3]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#BC9A6C]" />
            </div>
          </div>
        </Card>

        {/* Right side - Image with play button */}
        <div className="relative h-full min-h-[400px] lg:min-h-[622px]">
          <Image
            src="/images/hand.png"
            alt="Coffee presentation"
            fill
            className="object-cover"
          />
          <button 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                     w-20 h-20 bg-white rounded-full flex items-center justify-center
                     hover:scale-110 transition-transform duration-200"
            aria-label="Play video"
          >
            <Play className="w-7 h-7 text-[#BC9A6C] ml-1" />
          </button>
        </div>
      </div>
    </section>

    {/* latest blogs */}
    <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Latest News & Blog</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <CardHeader className="p-0">
              <div className="relative aspect-[4/3]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex items-center gap-6 text-gray-600 text-sm mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#BC9A6C]" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-[#BC9A6C]" />
                  <span>By {post.author}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{post.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {post.description}
              </p>
            </CardContent>
            <CardFooter className="px-6 pb-6">
              <Button 
                variant="outline" 
                className="text-[#BC9A6C] border-[#BC9A6C] hover:bg-[#BC9A6C] hover:text-white"
              >
                Read More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  
     {/* partner */}
      <Partner/>

     {/* footer */}
     <footer className="relative w-full mt-[130px] sm:mt-[100px] xs:mt-[80px]">
  <div className="w-full lg:w-2/3 absolute z-50 left-1/2 transform -translate-x-1/2 top-[-80px] bg-[#ffffff] p-4 sm:p-6 md:p-8 border-2 border-grey-300 shadow-lg">
    <div className="container mx-auto flex flex-col md:flex-row bg-[#ffffff] items-center justify-between gap-6">
      <div className="space-y-2 bg-white text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Subscribe</h2>
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">To Our Newsletter</h3>
      </div>
      <div className="flex-1 max-w-md w-full">
        <div className="flex flex-col sm:flex-row gap-2">
          <Input
            type="email"
            placeholder="Enter your mail"
            className="border-[#BC9A6C] text-[#BC9A6C] placeholder:text-[#BC9A6C] w-full"
          />
          <Button className="bg-[#BC9A6C] hover:bg-[#A88959] px-4 sm:px-8 w-full sm:w-auto">Subscribe now</Button>
        </div>
      </div>
      <div className="flex gap-2 justify-center md:justify-start">
        {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
          <Button key={i} size="icon" variant="ghost" className="bg-[#BC9A6C] hover:bg-[#A88959] text-white">
            <Icon className="h-4 w-4" />
          </Button>
        ))}
      </div>
    </div>
  </div>
  <div className="relative bg-[url('/images/bgfooter.png?height=564&width=1920')] bg-cover bg-center opacity-100">
    <div className="bg-[rgba(30,30,30,0.7)] py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-[120px] sm:mt-[100px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Section */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-white">
            {" "}
            <span className="text-[#BC9A6C]">Food</span>tuck
          </h2>
          <p className="text-white/80">
            Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
        </div>

        {/* Explore Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">Explore</h3>
          <ul className="space-y-2">
            {["Home", "About us", "Contact us", "Blog", "Team", "Our Menu"].map((item) => (
              <li key={item}>
                <a href="#" className="text-white/80 hover:text-white flex items-center gap-2">
                  <span className="text-xs">›</span>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4 col-span-1 sm:col-span-2 lg:col-span-1">
          <h3 className="text-xl font-bold text-white">Contact us</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-2">
              <MapPin className="h-5 w-5 text-white mt-1 flex-shrink-0" />
              <span className="text-white/80">Kolkata India, 3rd Floor, Office 45</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-white flex-shrink-0" />
              <span className="text-white/80">00965 - 96659986</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-white flex-shrink-0" />
              <span className="text-white/80">M.Alyaqout@4house.Co</span>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-white flex-shrink-0" />
              <span className="text-white/80">Sun - Sat / 10:00 AM - 8:00 PM</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  {/* Copyright Bar */}
  <div className="bg-[#BC9A6C] py-4">
    <div className="container mx-auto text-center text-white px-4">
      <p>Copyright © 2022 by Ayeman. All Rights Reserved.</p>
    </div>
  </div>
</footer>

   </div>
   
  )
}

 