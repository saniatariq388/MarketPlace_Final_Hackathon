


interface Product {
    id: number
    name: string
    price: number
    originalPrice?: number
    src: string
  }
  
 export const products: Product[] = [
    {
      id: 1,
      name: "Fresh Lime",
      price: 38.00,
      originalPrice: 45.00,
      src: "/images/freshlime.png?height=400&width=400"
    },
    {
      id: 2,
      name: "Chocolate Muffin",
      price: 28.00,
      src: "/images/muffin.png?height=400&width=400"
    },
    {
      id: 3,
      name: "Burger",
      price: 21.00,
      src: "/images/cheeseburger.png?height=400&width=400"
    },
    {
      id: 4,
      name: "Fresh Lime",
      price: 38.00,
      originalPrice: 45.00,
      src: "/images/pizza.png?height=400&width=400"
    },
    {
      id: 5,
      name: "Fresh Lime",
      price: 38.00,
      originalPrice: 45.00,
      src: "/images/freshlime.png?height=400&width=400"
    },
    {
      id: 6,
      name: "Chocolate Muffin",
      price: 28.00,
      src: "/images/muffin.png?height=400&width=400"
    },
    {
      id: 7,
      name: "Burger",
      price: 21.00,
      src: "/images/cheeseburger.png?height=400&width=400"
    },
    {
      id: 8,
      name: "Fresh Lime",
      price: 38.00,
      originalPrice: 45.00,
      src: "/images/pizza.png?height=400&width=400"
    }
  ]