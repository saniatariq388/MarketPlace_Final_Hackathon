'use client'
import { chefs } from '@/constant/chefs'
import ChefCard from './ChefCard'
import { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client'



interface Chef {
  _id: string
  name: string
  image: string
  position: string
}

export default function ChefGrid() {
     const [chefs, setChefs] = useState<Chef[]>([])
     const [isLoading, setIsLoading] = useState(true)
     const [error, setError] = useState<string | null>(null)

     useEffect(() => {
      const fetchChefs = async ()=>{
        try{
          const data = await client.fetch(`*[_type == 'chef']{_id,name,position,'image':image.asset->url}`)
            setChefs(data)
            // console.log( setChefs(data))
        } catch(err){
          console.error('Error fetching chefs:',err)
          setError("Failed to load chefs. Please try again later.")
        } finally{
          setIsLoading(false)
        }
      }
      fetchChefs()
     },[])

     if(isLoading){
      return <div className='flex justify-center items-center h-screen text-red-600'>{error}

      </div>
     }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Our Chefs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {chefs.map((chef) => (
          <ChefCard key={chef._id} name={chef.name} image={chef.image} position={chef.position} />
        ))}
      </div>
    </div>
  )
}

