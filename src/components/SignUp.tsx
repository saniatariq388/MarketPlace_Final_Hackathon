"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { User, Mail, Lock, Apple } from "lucide-react";
import Image from "next/image";

export default function SignUpForm() {
  return (
    <>
      <div className="w-full flex items-center justify-center bg-[#ffffff] ">
        <Card className="w-[424px] h-[624px] shadow-[0_4px_80px_rgba(255,159,13,0.15)] my-[120px]">
          <CardContent className="p-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-8">Sign Up</h1>

            <form className="space-y-4 text-black">
              <div className="relative ">
                <User className="absolute left-3 top-3 h-5 w-5 text-gray-600" />
                <Input placeholder="Name" className="pl-10 border-gray-200" />
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-600" />
                <Input
                  type="email"
                  placeholder="Email"
                  className="pl-10 border-gray-200"
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-600" />
                <Input
                  type="password"
                  placeholder="Password"
                  className="pl-10 border-gray-200"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" className="bg-[#FF9F0D] border-0" />
                  <label htmlFor="remember" className="text-sm text-gray-800">
                    Remember me?
                  </label>
                </div>
              </div>

              <Button className="w-full bg-[#FF9F0D] hover:bg-[#f59300]">
                Sign Up
              </Button>

              <div className="text-right">
                <a href="#" className="text-sm text-gray-500">
                  Forget password?
                </a>
              </div>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 text-gray-500 bg-white border border-gray-200">
                    OR
                  </span>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full mb-3 text-black border-gray-200"
              >
                <Image
                  src="/images/google.png"
                  alt="Google"
                  width={20}
                  height={24}
                  priority
                  className="mr-2 object-cover"
                />
                Sign up with Google
              </Button>

              <Button
                variant="outline"
                className="w-full text-black border-gray-200"
              >
                <Apple size={24} fill="black" />
                Sign up with Apple
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
