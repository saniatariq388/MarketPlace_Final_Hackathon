'use server'

import { client } from "@/sanity/lib/client";
import { auth, currentUser } from "@clerk/nextjs/server";

export async function clerkGetUser(){
    const {userId} = await auth();
    const user = await currentUser();    

    const userName = `${user?.firstName} ${user?.lastName}`
    const userEmail = user?.externalAccounts[0].emailAddress;
    const userImageUrl = user?.imageUrl;

    return{
        userName,
        userEmail,
        userImageUrl,
        userId,
    }


    // console.log("🧨userId:", userId);    // successfully get
    // console.log("👮‍♀️ user:", user);       // successfully get
    // console.log("👮‍♀️ user:", `${user?.firstName} ${user?.lastName}`);    // successfully get
    // console.log("👮‍♀️ user:", user?.externalAccounts[0].emailAddress);     // successfully get
    console.log("🚗 user:", user?.imageUrl);    // successfully get
}



export async function sanityUserPost(){
    const user = await clerkGetUser()

   const userObject = {
    _type:"user",
    _id:`user-${user.userId}`,  // create or replace main id zaror hoty hai
     userID:user.userId,
     email:user.userEmail,
     name:user.userName,
     image:user.userImageUrl,
   }


    const res = await client.createOrReplace(userObject)
}