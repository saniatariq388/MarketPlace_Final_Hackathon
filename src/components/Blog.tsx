//src\components\Blog.tsx

import { ArrowRight, Calendar, MessageSquare } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'

export default function BlogSection() {
  const posts = [
    {
      id: 1,
      title: "Chocolate Truffle Cake With Honey Flavor",
      description: "Lorem ipsum dolor sit amet, consectetur elit. Non mi sed etiam a id at ultricies neque.Tempus,poten diam ac integer id tellus est.",
      date: "02 Jan 2022",
      comments: "03",
      image: "/images/chocolateT.png?height=300&width=400",
    },
    {
      id: 2,
      title: "Chocolate Truffle Cake With Honey Flavor",
      description: "Lorem ipsum dolor sit amet, consectetur elit. Non mi sed etiam a id at ultricies neque.Tempus,poten diam ac integer id tellus est.",
      date: "02 Jan 2022",
      comments: "03",
      image: "/images/chocolateT.png?height=300&width=400",
    },
    {
      id: 3,
      title: "Chocolate Truffle Cake With Honey Flavor",
      description: "Lorem ipsum dolor sit amet, consectetur elit. Non mi sed etiam a id at ultricies neque.Tempus,poten diam ac integer id tellus est.",
      date: "02 Jan 2022",
      comments: "03",
      image: "/images/chocolateT.png?height=300&width=400",
    },
  ]

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 font-helvetica">Latest news & Blog</h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-[4/3] relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full"
                  width={70}
                  height={70}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#195A00]" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[#195A00]" />
                    <span>Comments ({post.comments})</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{post.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Read more
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

