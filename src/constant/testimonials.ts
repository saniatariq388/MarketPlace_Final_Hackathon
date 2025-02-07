interface Testimonial {
  id: number
  name: string
  role: string
  image: string
  rating: number
  content: string
}

 export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alamin Hasan",
    role: "Food Specialist",
    image: "/images/Ellipse.png",
    rating: 4,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat."
  },
  {
    id: 2,
    image: "/images/img2.png",
    content: "Quisque diam pellentesque bibendum non dui fringilla.",
    name: "John Doe",
    role: "Chef",
    rating: 5,
  },
  {
    id: 3,
    image: "/images/img3.png",
    content: "Ultrices mattis sed vitae mus risus lacus nisi.",
    name: "Jane Smith",
    role: "Culinary Expert",
    rating: 5,
  },
]
